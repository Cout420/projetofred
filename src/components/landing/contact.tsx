'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirebaseApp } from '@/firebase/provider';

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um endereço de e-mail válido.' }),
  phone: z.string().min(10, { message: 'O telefone deve ter pelo menos 10 dígitos.' }),
  subject: z.string().min(5, { message: 'O assunto deve ter pelo menos 5 caracteres.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }).max(500),
});

export default function Contact() {
  const { toast } = useToast();
  const app = useFirebaseApp();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!app) {
        toast({
            variant: "destructive",
            title: 'Uh oh! Algo deu errado.',
            description: 'O serviço de banco de dados não está disponível. Tente novamente mais tarde.',
        });
        return;
    }
    try {
      const firestore = getFirestore(app);
      
      await addDoc(collection(firestore, 'denuncias'), {
        ...values,
        createdAt: serverTimestamp(),
      });

      toast({
        title: 'Denúncia enviada com sucesso!',
        description: 'Agradecemos sua colaboração. Sua denúncia foi registrada em nosso sistema.',
      });

      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        variant: "destructive",
        title: 'Uh oh! Algo deu errado.',
        description: 'Não foi possível enviar sua denúncia. Tente novamente mais tarde.',
      });
    }
  }

  return (
    <section id="contact" className="bg-secondary py-12 md:py-24 lg:py-32 animate-fade-in-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-headline font-bold tracking-tighter text-primary sm:text-5xl">Canal de Denúncias</h2>
                <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Presenciou maus-tratos ou abandono? Use o formulário abaixo para nos enviar uma denúncia. Sua identidade será preservada.
                </p>
            </div>
        </div>
        <div className="mx-auto max-w-2xl py-12">
          <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Formulário de Denúncia</CardTitle>
                <CardDescription>Descreva a situação com o máximo de detalhes possível.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Seu Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu.email@exemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Abandono de animal na Rua..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Denúncia</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Descreva o ocorrido, incluindo endereço, características do animal e qualquer outra informação relevante." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full transition-transform duration-300 hover:scale-105" size="lg" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Enviando...' : 'Enviar Denúncia'}
                    {!form.formState.isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

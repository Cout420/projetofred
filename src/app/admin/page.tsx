'use client';

import { useEffect, useState, CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore, useUser } from '@/firebase';
import { collection, onSnapshot, doc, deleteDoc, orderBy, query, type Timestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Trash2, LogOut, Inbox, ExternalLink, Phone, Mail, FileText, User, Calendar, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getAuth, signOut } from 'firebase/auth';
import { Separator } from '@/components/ui/separator';
import { PawPrintIcon } from '@/components/icons/paw-print';

interface Denuncia {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
}

export default function AdminPage() {
  const { user, loading: userLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const [denuncias, setDenuncias] = useState<Denuncia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/admin/login');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    if (user && firestore) {
      const q = query(collection(firestore, 'denuncias'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Denuncia));
        setDenuncias(data);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching denuncias:", error);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [user, firestore]);
  
  const handleDelete = async (id: string) => {
    if (firestore) {
      try {
        await deleteDoc(doc(firestore, 'denuncias', id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/admin/login');
  };

  const backgroundStyle: CSSProperties = {
      backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #10b981 100%)
      `,
      backgroundSize: "100% 100%",
  };

  if (userLoading || loading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary">
           <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen w-full relative" style={backgroundStyle}>
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
                <PawPrintIcon className="h-6 w-6 text-primary" />
                 <h1 className="text-xl font-bold text-primary">Painel de Denúncias</h1>
            </div>
            <Button onClick={handleLogout} variant="ghost" size="sm">
                Sair <LogOut className="ml-2 h-4 w-4" />
            </Button>
        </div>
      </header>

      <main className="p-4 sm:p-6 md:p-8">
        <div className="container mx-auto">
            {denuncias.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-background/50 py-20 text-center backdrop-blur-sm">
                    <Inbox className="h-16 w-16 text-muted-foreground/50" />
                    <h2 className="mt-6 text-2xl font-semibold text-primary">Caixa de Entrada Vazia</h2>
                    <p className="mt-2 text-muted-foreground">Nenhuma denúncia encontrada no momento.</p>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {denuncias.map((d) => (
                    <Card key={d.id} className="flex flex-col rounded-2xl bg-background/80 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 backdrop-blur-sm">
                        <CardHeader className="p-5">
                            <CardTitle className="truncate text-lg font-bold text-primary">{d.subject}</CardTitle>
                            <CardDescription className="flex items-center gap-2 pt-1 text-xs">
                               <Calendar className="h-4 w-4" />
                               <span>{d.createdAt ? format(d.createdAt.toDate(), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR }) : 'Data indisponível'}</span>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow p-5 pt-0">
                            <p className="text-muted-foreground line-clamp-3 text-sm">{d.message}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center p-4 bg-secondary/70 rounded-b-2xl">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver Detalhes
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl rounded-2xl bg-background/80 backdrop-blur-sm">
                                    <DialogHeader className="text-left">
                                        <DialogTitle className="text-2xl font-bold text-primary">{d.subject}</DialogTitle>
                                        <DialogDescription className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>Recebido em: {d.createdAt ? format(d.createdAt.toDate(), "dd 'de' MMMM 'de' yyyy, 'às' HH:mm", { locale: ptBR }) : 'Data indisponível'}</span>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Separator className="my-4" />
                                    <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-6">
                                        <div className="space-y-4">
                                            <h3 className="font-semibold text-primary text-lg">Informações do Denunciante</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-3">
                                                    <User className="h-5 w-5 text-primary/70" />
                                                    <div>
                                                        <p className="font-medium text-foreground">{d.name}</p>
                                                        <p className="text-muted-foreground text-xs">Nome</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Mail className="h-5 w-5 text-primary/70" />
                                                    <div>
                                                        <p className="font-medium text-foreground">{d.email}</p>
                                                        <p className="text-muted-foreground text-xs">Email</p>
                                                    </div>
                                                </div>
                                                {d.phone && (
                                                    <div className="flex items-center gap-3">
                                                        <Phone className="h-5 w-5 text-primary/70" />
                                                        <div>
                                                            <p className="font-medium text-foreground">{d.phone}</p>
                                                            <p className="text-muted-foreground text-xs">Telefone</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <Separator />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-3 text-lg">Detalhes da Denúncia</h3>
                                            <div className="flex items-start gap-4 rounded-xl border bg-muted/50 p-4">
                                                <FileText className="h-5 w-5 text-primary/70 mt-1 flex-shrink-0" />
                                                <p className="text-muted-foreground whitespace-pre-wrap text-sm">{d.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-destructive rounded-full hover:bg-destructive/10">
                                        <Trash2 className="h-5 w-5" />
                                        <span className="sr-only">Excluir</span>
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px] rounded-2xl bg-background/80 backdrop-blur-sm">
                                    <DialogHeader>
                                        <DialogTitle>Confirmar Exclusão</DialogTitle>
                                        <DialogDescription>
                                            Tem certeza que deseja excluir esta denúncia? Esta ação não pode ser desfeita.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-end gap-2 pt-4">
                                        <DialogClose asChild>
                                            <Button variant="outline">Cancelar</Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button variant="destructive" onClick={() => handleDelete(d.id)}>Excluir</Button>
                                        </DialogClose>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </CardFooter>
                    </Card>
                ))}
                </div>
            )}
        </div>
      </main>
    </div>
  );
}

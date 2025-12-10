'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { collection, onSnapshot, doc, deleteDoc, orderBy, query, type Timestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Trash2, LogOut, Inbox, ExternalLink, Phone, Mail, FileText, User, Calendar, Type } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getAuth, signOut } from 'firebase/auth';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

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

  if (userLoading || loading) {
    return (
        <div className="min-h-screen bg-secondary p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <Skeleton className="h-10 w-64" />
                    <Skeleton className="h-10 w-24" />
                </header>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[...Array(8)].map((_, i) => (
                        <Card key={i} className="flex flex-col">
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-1/2 mt-2" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6 mt-2" />
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Skeleton className="h-10 w-24" />
                                <Skeleton className="h-10 w-10" />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-secondary p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap gap-4 justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Painel de Denúncias</h1>
          <Button onClick={handleLogout} variant="destructive">
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </header>

        {denuncias.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center">
                <Inbox className="h-24 w-24 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold text-primary">Nenhuma denúncia encontrada</h2>
                <p className="text-muted-foreground mt-2">Aguardando novas denúncias. Assim que chegarem, elas aparecerão aqui.</p>
            </div>
        ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {denuncias.map((d) => (
                <Card key={d.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="truncate text-lg">{d.subject}</CardTitle>
                    <CardDescription>
                    {d.createdAt ? format(d.createdAt.toDate(), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR }) : 'Data indisponível'}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3">{d.message}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Detalhes
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{d.subject}</DialogTitle>
                         <DialogDescription className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                            <Calendar className="h-4 w-4" />
                            <span>Recebido em: {d.createdAt ? format(d.createdAt.toDate(), "dd 'de' MMMM 'de' yyyy, 'às' HH:mm", { locale: ptBR }) : 'Data indisponível'}</span>
                        </DialogDescription>
                        </DialogHeader>
                        <Separator className="my-4" />
                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
                            <div>
                                <h3 className="font-semibold text-primary mb-3 text-lg">Informações do Denunciante</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                        <User className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-muted-foreground text-xs">Nome</p>
                                            <p className="font-medium text-foreground">{d.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-muted-foreground text-xs">Email</p>
                                            <p className="font-medium text-foreground">{d.email}</p>
                                        </div>
                                    </div>
                                    {d.phone && (
                                        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg col-span-1 sm:col-span-2">
                                            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                            <div>
                                                <p className="text-muted-foreground text-xs">Telefone</p>
                                                <p className="font-medium text-foreground">{d.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                             <div>
                                <h3 className="font-semibold text-primary mb-3 text-lg">Detalhes da Denúncia</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-foreground">Mensagem</p>
                                            <p className="text-muted-foreground mt-1 whitespace-pre-wrap text-sm">{d.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                                <Trash2 className="h-5 w-5" />
                                <span className="sr-only">Excluir</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
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
    </div>
  );
}

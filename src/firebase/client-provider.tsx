'use client';

import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { useMemo, type ReactNode } from 'react';
import { firebaseConfig } from './config';
import { FirebaseProvider } from './provider';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({
  children,
}: FirebaseClientProviderProps) {
  const firebaseApp = useMemo(() => initializeApp(firebaseConfig), []);

  const value = useMemo(() => {
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);
    return { app: firebaseApp, auth, firestore };
  }, [firebaseApp]);

  return <FirebaseProvider value={value}>{children}</FirebaseProvider>;
}

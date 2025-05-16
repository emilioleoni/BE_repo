import { Slot, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { View, ActivityIndicator } from 'react-native';

function ProtectedLayout() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/login');
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <ProtectedLayout />
      </FavoritesProvider>
    </AuthProvider>
  );
}

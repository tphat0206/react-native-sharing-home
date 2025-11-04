import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Delay navigation to ensure Root Layout is mounted
    const timeout = setTimeout(() => {
      router.replace('/welcome' as any);
    }, 0);

    return () => clearTimeout(timeout);
  }, [router]);

  return null;
}

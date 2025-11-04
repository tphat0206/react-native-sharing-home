import { AppIcon } from '@/components/AppIcon';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-gray-50 items-center justify-center px-6">
      <View className="bg-white rounded-3xl p-8 w-full max-w-md items-center shadow-lg">
        {/* App Icon with Gradient */}
        <View className="mb-6">
          <AppIcon size="lg" />
        </View>

        {/* App Title */}
        <Heading size="lg" className="mb-12 text-center">
          HomeShare
        </Heading>

        {/* Get Started Button */}
        <Button
          onPress={() => router.push('/role-selection')}
          className="w-64"
        >
          Get Started
        </Button>
      </View>
    </Box>
  );
}


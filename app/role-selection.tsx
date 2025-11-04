import { AppIcon } from '@/components/AppIcon';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Heading, Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-gray-50 items-center justify-center px-6">
      <View className="bg-white rounded-3xl p-8 w-full max-w-md items-center shadow-lg">
        {/* App Icon with Gradient */}
        <View className="mb-6">
          <AppIcon size="md" />
        </View>

        {/* Title */}
        <Heading size="md" className="mb-2 text-center">
          Welcome
        </Heading>

        {/* Subtitle */}
        <Text size="md" className="mb-8 text-gray-600 text-center">
          Choose your role
        </Text>

        {/* Role Buttons */}
        <View className="w-full gap-4">
          <Button
            variant="outline"
            onPress={() => router.push('/login?role=owner')}
            className="w-full"
          >
            Owner
          </Button>

          <Button
            variant="outline"
            onPress={() => router.push('/login?role=member')}
            className="w-full"
          >
            Member
          </Button>
        </View>
      </View>
    </Box>
  );
}


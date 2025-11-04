import { AppIcon } from '@/components/AppIcon';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heading, Text } from '@/components/ui/text';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams<{ role: string }>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login:', { phoneNumber, password, role });
  };

  return (
    <Box className="flex-1 bg-gray-50 items-center justify-center px-6">
      <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg">
        {/* App Icon with Gradient */}
        <View className="mb-6 items-center">
          <AppIcon size="md" />
        </View>

        {/* Title */}
        <Heading size="md" className="mb-6 text-center">
          Welcome {role || 'user'}
        </Heading>

        {/* Phone Number Input */}
        <Input
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          className="mb-4"
        />

        {/* Password Input */}
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="mb-3"
        />

        {/* Forget Password Link */}
        <Pressable onPress={() => console.log('Forgot password')}>
          <Text size="sm" className="text-gray-600 mb-6">
            Forget password ?
          </Text>
        </Pressable>

        {/* Login Button */}
        <Button onPress={handleLogin} className="w-full mb-4">
          Login
        </Button>

        {/* Sign Up Link */}
        <View className="flex-row justify-center">
          <Text size="sm" className="text-gray-600">
            You don't have account ?{' '}
          </Text>
          <Pressable onPress={() => router.push('/signup')}>
            <Text size="sm" weight="semibold">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
    </Box>
  );
}


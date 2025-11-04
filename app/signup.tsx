import { AppIcon } from '@/components/AppIcon';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic here
    if (password !== confirmedPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Sign up:', { phoneNumber, password });
  };

  return (
    <Box className="flex-1 bg-gray-50 items-center justify-center px-6">
      <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg">
        {/* App Icon with Gradient */}
        <View className="mb-8 items-center">
          <AppIcon size="md" />
        </View>

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
          className="mb-4"
        />

        {/* Confirmed Password Input */}
        <Input
          placeholder="Confirmed password"
          value={confirmedPassword}
          onChangeText={setConfirmedPassword}
          secureTextEntry
          className="mb-6"
        />

        {/* Sign Up Button */}
        <Button onPress={handleSignUp} className="w-full mb-4">
          Sign Up
        </Button>

        {/* Login Link */}
        <View className="flex-row justify-center">
          <Text size="sm" className="text-gray-600">
            You already have account ?{' '}
          </Text>
          <Pressable onPress={() => router.back()}>
            <Text size="sm" weight="semibold">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </Box>
  );
}


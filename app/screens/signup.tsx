import { AppIcon } from '@/components/AppIcon';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import StyledInput from '../components/commons/StyledInput';
import StyledButton from '../components/commons/StyledButton';

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
        <View className="mb-8 items-center">
          <AppIcon size="md" />
        </View>

        <StyledInput
          label="Phone number"
          value={phoneNumber}
          onChangeText={(value) => setPhoneNumber(value)}
        />

        <StyledInput
          label="Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <StyledInput
          label="Confirmed password"
          value={confirmedPassword}
          onChangeText={(value) => setConfirmedPassword(value)}
        />

        <StyledButton 
          onPress={handleSignUp} 
          buttonClassName="w-full h-12"
          size="lg"
          buttonText='Sign up'
        />

        <View className="flex-row justify-center mt-4">
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


import { DrawerLayout } from '@/components/DrawerLayout';
import { CheckIcon, Icon, EditIcon } from '@/components/ui/icon';
import { Input, InputField, InputSlot } from '@/components/ui/input';

import { Text } from '@/components/ui/text';
import React, { useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';

interface ProfileFieldProps {
  value: string;
  onEdit: (value: string) => void;
};

function ProfileField({ value, onEdit }: ProfileFieldProps) {
  const [editing, setEditing] = useState(false);
  return (
    <View className="bg-gray-50 rounded-xl py-4 mb-3 flex-row items-center justify-between">
      {!editing ? (<><Text size="md" className="text-gray-800 pl-4">
        {value}
      </Text>
      <Pressable onPress={() => setEditing(true)}>
        <Icon as={EditIcon} size="lg" className="text-blue-500 mr-4"/>
      </Pressable>
      </>): 
(<>
        <Input
          variant="outline"
          className="flex-1 mr-2"
        >
          <InputField value={value} onChangeText={onEdit}/>
          <InputSlot>
            <Pressable onPress={() => setEditing(false)}>
             <Icon as={CheckIcon} size="lg" className="text-green-500 mr-2 border-1 border-green-500 rounded-full p-1"/>
            </Pressable>
          </InputSlot>
        </Input>
      </>)}
    </View>
  );
}
export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    firstName: 'Emily',
    lastName: 'Smith',
    address: 'Address',
  });
  const phoneNumber = '01234567891'

  const handleEdit = (field: string, value: string) => {
    setProfile(profile => ({ ...profile, [field]: value }));
  };

  const handleChangePhoto = () => {
    console.log('Change photo');
    // Handle photo change logic here
  };

  return (
    <DrawerLayout title="Profile" showNotificationIcon={true}>
      <ScrollView className="flex-1 px-4 pt-6">
        {/* Profile Card */}
        <View className="bg-white rounded-3xl p-8 shadow-sm mb-4">
          {/* Profile Picture */}
          <View className="items-center mb-6">
            <View className="relative">
              {/* Circular Profile Image */}
              <View className="w-32 h-32 rounded-full bg-gray-200 items-center justify-center overflow-hidden">
                {/* Placeholder profile image - you can replace with actual image */}
                <View className="w-full h-full bg-gray-100 items-center justify-center">
                  <Text size="3xl" className="text-gray-400">👤</Text>
                </View>
              </View>
              
              {/* Camera Button */}
              <Pressable 
                onPress={handleChangePhoto}
                className="absolute bottom-0 right-0 bg-white rounded-full w-10 h-10 items-center justify-center shadow-lg border-2 border-gray-100"
              >
                <Text size="lg">📷</Text>
              </Pressable>
            </View>
          </View>

          {/* Phone Number */}
          <View className="items-center mb-8">
            <Text size="lg" weight="medium" className="text-gray-800">
              {phoneNumber}
            </Text>
          </View>

          {/* Profile Fields */}
          <View>
            <ProfileField 
              value={profile.firstName}
              onEdit={(value) => handleEdit('firstName', value)} 
            />
            <ProfileField 
              value={profile.lastName} 
              onEdit={(value) => handleEdit('lastName', value)} 
            />
            <ProfileField 
              value={profile.address} 
              onEdit={(value) => handleEdit('address', value)} 
            />
          </View>
        </View>
      </ScrollView>
    </DrawerLayout>
  );
}


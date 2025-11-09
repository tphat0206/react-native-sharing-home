import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from '@/components/ui/avatar';
import { Text } from '@/components/ui/text';
import React from 'react';
import { View } from 'react-native';
import { HStack } from '@/components/ui/hstack';

interface MemberCardProps {
    avatar?: string;
    memberName: string;
    phoneNumber: string;
    role: string;
};

export default function MemberCard({ avatar, memberName, phoneNumber, role }: MemberCardProps) {
    return (
        <View className="bg-white my-1 rounded-2xl w-full">
        <HStack space="md" reversed={false} className="justify-between p-2">
            <View className="h-16 w-16 align-center justify-center ml-2">
                <Avatar size="md">
                    <AvatarFallbackText>Avatar</AvatarFallbackText>
                    <AvatarImage
                        source={{ uri: avatar }}
                    />

                </Avatar>
            </View>
            <View className="h-16 w-16 align-center justify-center flex-1">
                <Text size="md" className="font-bold">
                    {memberName}
                </Text>
                <Text size="sm" className="">
                    {phoneNumber}
                </Text>
            </View>
            <View className="h-16 w-16 items-end justify-center flex-1 mr-2">
                <Text size="sm" className="font-medium">
                    {role}
                </Text>
            </View>
        </HStack>
        </View>
    );
}
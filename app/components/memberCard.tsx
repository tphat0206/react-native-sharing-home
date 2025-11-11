import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { HStack } from "@/components/ui/hstack";
import { Icon, TrashIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import React, { useMemo } from "react";
import { Pressable, View } from "react-native";
import { ROLE } from "../constants/enum";

interface MemberCardProps {
    avatar?: string;
    memberName: string;
    phoneNumber: string;
    role: string;
    canDelete?: boolean;
    onDelete?: () => void;
}

export default function MemberCard({
    avatar,
    memberName,
    phoneNumber,
    role,
    canDelete = false,
    onDelete = () => {},
}: MemberCardProps) {
    const roleDisplay = useMemo(() => {
        switch (role) {
            case ROLE.ROOM_MEMBER:
                return "Member";
            case ROLE.ROOM_MASTER:
                return "Room master";
            default:
                return "";
        }
    }, [role]);
    return (
        <View className="bg-white mb-2 rounded-2xl w-full">
            <HStack space="md" reversed={false} className="justify-between p-2">
                <View className="h-16 w-16 align-center justify-center ml-2">
                    <Avatar size="md">
                        <AvatarFallbackText>Avatar</AvatarFallbackText>
                        <AvatarImage source={{ uri: avatar }} />
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
                        {roleDisplay}
                    </Text>
                    {canDelete && (
                        <Pressable onPress={onDelete}>
                            <Icon
                                as={TrashIcon}
                                size="md"
                                className="text-red-500 font-medium"
                            />
                        </Pressable>
                    )}
                </View>
            </HStack>
        </View>
    );
}

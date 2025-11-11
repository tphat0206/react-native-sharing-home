import { AppIcon } from "@/components/AppIcon";
import { Box } from "@/components/ui/box";
import { Heading, Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import StyledButton from "../components/commons/StyledButton";
import Routes from "../constants/Routes";

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
                    <StyledButton
                        variant="outline"
                        onPress={() =>
                            router.push(Routes.LOGIN("owner") as any)
                        }
                        buttonClassName="w-full h-12"
                        buttonText="Owner"
                    />

                    <StyledButton
                        variant="outline"
                        onPress={() =>
                            router.push(Routes.LOGIN("member") as any)
                        }
                        buttonClassName="w-full h-12"
                        buttonText="Member"
                    />
                </View>
            </View>
        </Box>
    );
}

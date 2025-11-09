import { AppIcon } from "@/components/AppIcon";
import { Box } from "@/components/ui/box";
import { Heading, Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import StyledButton from "../components/commons/StyledButton";
import StyledInput from "../components/commons/StyledInput";
import Routes from "../constants/Routes";
import { storeData } from "../storage/async_storage";

export default function LoginScreen() {
    const router = useRouter();
    const { role } = useLocalSearchParams<{ role: string }>();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Login:", { phoneNumber, password, role });
        router.dismissAll()
        switch (password) {
            case "home_master":
                storeData("userRole", "home_master");
                router.replace(Routes.HOME_MASTER_DASHBOARD as any)
                return
            case "room_master":
                storeData("userRole", "room_master");
                router.replace(Routes.ROOM_MEMBER_DASHBOARD as any)
                return
            case "room_member":
                storeData("userRole", "room_member")
                router.replace(Routes.ROOM_MEMBER_DASHBOARD as any)
                return
            default:
                console.warn("Invalid password for role selection")
        }
    };

    return (
        <Box className="flex-1 bg-gray-50 items-center justify-center px-6">
            <View className="bg-white rounded-3xl p-8 w-full max-w-md shadow-lg">
                <View className="mb-6 items-center">
                    <AppIcon size="md" />
                </View>

                <Heading size="md" className="mb-6 text-center">
                    Welcome {role || "user"}
                </Heading>
                <StyledInput
                    label="Phone number"
                    value={phoneNumber}
                    onChangeText={(value) => setPhoneNumber(value)}
                />

                <StyledInput
                    label="Password"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={true}
                />

                <Pressable onPress={() => console.log("Forgot password")}>
                    <Text size="sm" className="text-gray-600 mb-6">
                        Forget password ?
                    </Text>
                </Pressable>

                <StyledButton
                    onPress={handleLogin}
                    buttonClassName="w-full h-12"
                    size="lg"
                    buttonText="Login"
                />

                <View className="flex-row justify-center mt-4">
                    <Text size="sm" className="text-gray-600">
                        You do not have account ?{" "}
                    </Text>
                    <Pressable
                        onPress={() => router.push(Routes.SIGNUP as any)}
                    >
                        <Text size="sm" weight="semibold">
                            Sign Up
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Box>
    );
}

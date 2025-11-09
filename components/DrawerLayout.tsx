import Routes from "@/app/constants/Routes";
import { AppIcon } from "@/components/AppIcon";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Heading, Text } from "@/components/ui/text";
import { usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

interface DrawerLayoutProps {
    children: React.ReactNode;
    title?: string;
    showNotificationIcon?: boolean;
}

export function DrawerLayout({
    children,
    title = "Home",
    showNotificationIcon = true,
}: DrawerLayoutProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isHomeScreen =
        pathname.includes(Routes.HOME_MASTER_DASHBOARD) ||
        pathname.includes(Routes.PROFILE) ||
        pathname.includes(Routes.ROOM_MEMBER_DASHBOARD);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navigateTo = (path: string) => {
        router.push(path as any);
        setIsDrawerOpen(false);
    };

    const handleLogout = () => {
        router.replace(Routes.ROLE_SELECTION as any);
    };

    return (
        <View className="flex-1 flex-row bg-white">
            {isDrawerOpen && (
                <>
                    <Pressable
                        className="absolute inset-0 bg-black/20 z-10"
                        onPress={toggleDrawer}
                    />

                    {/* Drawer Content */}
                    <View className="absolute left-0 top-0 bottom-0 w-52 bg-white z-20 shadow-xl pt-12">
                        <ScrollView className="flex-1">
                            {/* Collapse Button */}
                            <Pressable
                                onPress={toggleDrawer}
                                className="flex-row items-center px-4 py-6 border-b border-gray-200"
                            >
                                <Icon
                                    as={ArrowLeftIcon}
                                    size="lg"
                                    className="text-gray-600 mx-2"
                                />
                                <Text size="sm" className="text-gray-600">
                                    Collapse Sidebar
                                </Text>
                            </Pressable>

                            {/* App Logo and Name */}
                            <View className="items-center py-6">
                                <View className="mb-3">
                                    <AppIcon size="sm" />
                                </View>
                                <Heading size="sm">HomeShare</Heading>
                            </View>

                            {/* Menu Items */}
                            <View className="px-3">
                                <Pressable
                                    onPress={() =>
                                        navigateTo(Routes.HOME_MASTER_DASHBOARD)
                                    }
                                    className={`flex-row items-center px-4 py-3 rounded-lg mb-2 ${
                                        pathname.includes(
                                            Routes.HOME_MASTER_DASHBOARD
                                        )
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                >
                                    <View className="w-5 h-5 mr-3">
                                        <Text>⊞</Text>
                                    </View>
                                    <Text
                                        size="md"
                                        weight={
                                            pathname.includes(
                                                Routes.HOME_MASTER_DASHBOARD
                                            )
                                                ? "medium"
                                                : "normal"
                                        }
                                    >
                                        Dashboard
                                    </Text>
                                </Pressable>

                                <Pressable
                                    onPress={() => navigateTo(Routes.PROFILE)}
                                    className={`flex-row items-center px-4 py-3 rounded-lg mb-2 ${
                                        pathname.includes(Routes.PROFILE)
                                            ? "bg-gray-100"
                                            : ""
                                    }`}
                                >
                                    <View className="w-5 h-5 mr-3">
                                        <Text>👤</Text>
                                    </View>
                                    <Text
                                        size="md"
                                        weight={
                                            pathname.includes(Routes.PROFILE)
                                                ? "medium"
                                                : "normal"
                                        }
                                    >
                                        Profile
                                    </Text>
                                </Pressable>
                            </View>
                            {/* Logout Button at Bottom */}
                            <Pressable
                                onPress={handleLogout}
                                className="flex-row items-center px-7 py-4 border-t border-gray-200"
                            >
                                <Icon
                                    as={ArrowLeftIcon}
                                    size="lg"
                                    className="text-red-500 mr-2"
                                />
                                <Text size="md" className="text-red-500">
                                    Log out
                                </Text>
                            </Pressable>
                        </ScrollView>
                    </View>
                </>
            )}

            {/* Main Content */}
            <View className="flex-1 mt-12">
                {/* Header */}
                <View className="bg-white border-b border-gray-200 px-4 py-5 flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        {isHomeScreen ? (
                            <Pressable onPress={toggleDrawer} className="mr-4">
                                <View className="w-6 h-6 justify-around">
                                    <View className="w-6 h-0.5 bg-black" />
                                    <View className="w-6 h-0.5 bg-black" />
                                    <View className="w-6 h-0.5 bg-black" />
                                </View>
                            </Pressable>
                        ) : (
                            <Pressable
                                onPress={() => router.back()}
                                className="mr-4"
                            >
                                <Icon
                                    as={ArrowLeftIcon}
                                    size="lg"
                                    className="text-gray-600"
                                />
                            </Pressable>
                        )}
                        <Heading size="sm">{title}</Heading>
                    </View>

                    {showNotificationIcon && (
                        <Pressable
                            onPress={() =>
                                router.push(Routes.NOTIFICATIONS as any)
                            }
                        >
                            <View className="w-6 h-6">
                                <Text size="xl">🔔</Text>
                            </View>
                        </Pressable>
                    )}
                </View>

                {/* Content */}
                <View className="flex-1 bg-gray-50">{children}</View>
            </View>
        </View>
    );
}

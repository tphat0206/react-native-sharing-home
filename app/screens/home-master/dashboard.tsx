import { DrawerLayout } from "@/components/DrawerLayout";
import { Heading, Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import StyledInput from "../../components/commons/StyledInput";
import StyledModal from "../../components/commons/StyledModal";
import Routes from "../../constants/Routes";

interface HomeCardProps {
    name: string;
    roomCount: number;
    emptyCount: number;
    onPress?: () => void;
}

function HomeCard({ name, roomCount, emptyCount, onPress }: HomeCardProps) {
    return (
        <Pressable
            onPress={onPress}
            className="bg-white rounded-2xl p-6 shadow-sm mb-4"
            style={{ width: "48%" }}
        >
            <Heading size="sm" className="mb-4 text-gray-800">
                {name}
            </Heading>
            <View className="gap-1">
                <Text size="md" className="text-gray-600">
                    Room: {roomCount}
                </Text>
                <Text size="md" className="text-gray-600">
                    Empty: {emptyCount}
                </Text>
            </View>
        </Pressable>
    );
}

export default function DashboardScreen() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [homes, setHomes] = useState([
        { id: 1, name: "Home name 1", roomCount: 5, emptyCount: 5 },
        { id: 2, name: "Home name 2", roomCount: 5, emptyCount: 5 },
        { id: 3, name: "Home name 3", roomCount: 5, emptyCount: 5 },
    ]);
    const [newHomeName, setNewHomeName] = useState("");

    const handleHomePress = (homeId: number, homeName: string) => {
        router.push({
            pathname: Routes.HOME_MASTER_ROOMS as any,
            params: {
                homeId: homeId.toString(),
                homeName: homeName,
            },
        });
    };

    const handleAddHome = () => {
        setHomes([
            ...homes,
            {
                id: homes.length + 1,
                name: newHomeName,
                roomCount: 0,
                emptyCount: 0,
            },
        ]);
        setNewHomeName("");
        setShowModal(false);
    };

    const handeCancelAddHome = () => {
        setNewHomeName("");
        setShowModal(false);
    };

    return (
        <>
            <DrawerLayout title="Dashboard" showNotificationIcon={true}>
                <ScrollView className="flex-1 px-4 pt-6">
                    <View className="flex-row flex-wrap justify-between">
                        {homes.map((home) => (
                            <HomeCard
                                key={home.id}
                                name={home.name}
                                roomCount={home.roomCount}
                                emptyCount={home.emptyCount}
                                onPress={() =>
                                    handleHomePress(home.id, home.name)
                                }
                            />
                        ))}
                    </View>

                    {/* Add Home Button */}
                    <Pressable
                        onPress={() => setShowModal(true)}
                        className="bg-gray-100 rounded-2xl p-6 items-center justify-center mb-4"
                        style={{ minHeight: 120 }}
                    >
                        <Text size="3xl" className="text-gray-400">
                            +
                        </Text>
                    </Pressable>
                </ScrollView>
            </DrawerLayout>
            <StyledModal
                title="Add new home"
                submitButtonText="Add"
                cancelButtonText="Cancel"
                isOpen={showModal}
                closeOnOverlayClick={false}
                size="md"
                handelSubmit={handleAddHome}
                handelCancel={handeCancelAddHome}
                children={
                    <StyledInput
                        placeholder="Enter home name"
                        value={newHomeName}
                        onChangeText={(value) => setNewHomeName(value)}
                    />
                }
            />
        </>
    );
}

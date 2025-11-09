import { DrawerLayout } from "@/components/DrawerLayout";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import StyledInput from "../../components/commons/StyledInput";
import StyledModal from "../../components/commons/StyledModal";
import RoomCard from "../../components/roomCard";
import Routes from "../../constants/Routes";

export default function HomeDetailsScreen() {
    const router = useRouter();
    const { homeId, homeName } = useLocalSearchParams<{
        homeId: string;
        homeName?: string;
    }>();

    const [showModal, setShowModal] = useState(false);
    const [newRoomName, setNewRoomName] = useState("");

    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: "Room 1",
            memberCount: 2,
            debtAmount: 150.5,
            nextInvoiceDate: "2024-02-15",
        },
        {
            id: 2,
            name: "Room 2",
            memberCount: 1,
            debtAmount: 75.0,
            nextInvoiceDate: "2024-02-20",
        },
        {
            id: 3,
            name: "Room 3",
            memberCount: 3,
            debtAmount: 225.75,
            nextInvoiceDate: "2024-02-18",
        },
    ]);

    const handleRoomPress = (roomId: number, roomName: string) => {
        router.push({
            pathname: Routes.HOME_MASTER_ROOM_DETAIL as any,
            params: {
                roomId: roomId.toString(),
                roomName: roomName,
            },
        });
    };

    const handleAddNewRoom = () => {
        setRooms([
            ...rooms,
            {
                id: rooms.length + 1,
                name: newRoomName,
                memberCount: 0,
                debtAmount: 0,
                nextInvoiceDate: "",
            },
        ]);
        setNewRoomName("");
        setShowModal(false);
    };

    const handeCancelAddNewRoom = () => {
        setShowModal(false);
        setNewRoomName("");
    };

    return (
        <>
            <DrawerLayout
                title={homeName || "Home detail"}
                showNotificationIcon={true}
            >
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                    {/* Room List */}
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            roomName={room.name}
                            memberCount={room.memberCount}
                            debtAmount={room.debtAmount}
                            nextInvoiceDate={room.nextInvoiceDate}
                            onPress={() => handleRoomPress(room.id, room.name)}
                        />
                    ))}

                    {/* Add New Room Button */}
                    <Pressable
                        onPress={() => setShowModal(true)}
                        className="bg-gray-100 rounded-2xl p-6 items-center justify-center mb-4 mt-2"
                        style={{ minHeight: 80 }}
                    >
                        <View className="flex-row items-center">
                            <Text
                                size="lg"
                                weight="medium"
                                className="text-gray-600"
                            >
                                + New room
                            </Text>
                        </View>
                    </Pressable>
                </ScrollView>
            </DrawerLayout>
            <StyledModal
                title="Add new room"
                submitButtonText="Add"
                cancelButtonText="Cancel"
                isOpen={showModal}
                closeOnOverlayClick={false}
                size="md"
                handelSubmit={handleAddNewRoom}
                handelCancel={handeCancelAddNewRoom}
                children={
                    <StyledInput
                        placeholder="Enter room name"
                        value={newRoomName}
                        onChangeText={(value) => setNewRoomName(value)}
                    />
                }
            />
        </>
    );
}

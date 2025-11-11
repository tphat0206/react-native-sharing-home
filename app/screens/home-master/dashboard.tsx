import { HMRoom } from "@/app/constants/types";
import { DrawerLayout } from "@/components/DrawerLayout";
import { Text } from "@/components/ui/text";
import { dummy_home_master_room_list } from "@/utils/dummy";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import StyledInput from "../../components/commons/StyledInput";
import StyledModal from "../../components/commons/StyledModal";
import RoomCard from "../../components/roomCard";
import Routes from "../../constants/Routes";

export default function HomeDetailsScreen() {
    const router = useRouter();

    const [showModal, setShowModal] = useState(false);
    const [newRoomName, setNewRoomName] = useState("");

    const [rooms, setRooms] = useState<HMRoom[]>(dummy_home_master_room_list);

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
            <DrawerLayout title={"Dashboard"} showNotificationIcon={true}>
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
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

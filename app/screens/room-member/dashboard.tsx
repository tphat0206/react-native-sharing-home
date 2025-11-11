import RoomCard from "@/app/components/roomCard";
import Routes from "@/app/constants/Routes";
import { RMRoom } from "@/app/constants/types";
import { getData } from "@/app/storage/async_storage";
import { DrawerLayout } from "@/components/DrawerLayout";
import { dummy_room_member_room_list } from "@/utils/dummy";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function DashboardScreen() {
    const router = useRouter();

    const [rooms, setRooms] = useState<RMRoom[]>(dummy_room_member_room_list);

    const handleRoomPress = (roomId: number, roomName: string) => {
        getData("userRole").then((role) => {
            if (role === "room_master") {
                router.push({
                    pathname: Routes.ROOM_VIEW_SELECTION as any,
                    params: {
                        roomId: roomId.toString(),
                        roomName: roomName,
                    },
                });
            } else {
                router.push({
                    pathname: Routes.ROOM_MEMBER_ROOM_DETAIL_MEMBERS as any,
                    params: {
                        roomId: roomId.toString(),
                        roomName: roomName,
                    },
                });
            }
        });
    };

    return (
        <>
            <DrawerLayout title={"Dashboard"} showNotificationIcon={true}>
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                    {/* Room List */}
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            roomName={room.name}
                            homeName={room.homeName}
                            memberCount={room.memberCount}
                            nextInvoiceDate={room.nextInvoiceDate}
                            onPress={() => handleRoomPress(room.id, room.name)}
                        />
                    ))}
                </ScrollView>
            </DrawerLayout>
        </>
    );
}

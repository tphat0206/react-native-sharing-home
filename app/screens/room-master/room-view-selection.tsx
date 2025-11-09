import Routes from "@/app/constants/Routes";
import { DrawerLayout } from "@/components/DrawerLayout";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { EyeIcon, SettingsIcon } from "@/components/ui/icon";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

export default function RoomViewSelectionScreen() {
    const router = useRouter();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const handleManageRoom = () => {
        console.log("Manage room");
    };

    const handleViewAsMember = (roomId: string, roomName?: string) => {
        console.log("View as Member");
        router.push({
            pathname: Routes.ROOM_MEMBER_ROOM_DETAIL_MEMBERS as any,
            params: {
                roomId: roomId,
                roomName: roomName,
            },
        });
    };

    return (
        <>
            <DrawerLayout
                title={roomName || "Room 1"}
                showNotificationIcon={true}
            >
                <View className="flex-1 p-4 mt-4 gap-4">
                    <Button>
                        <ButtonText>Manage room</ButtonText>
                        <ButtonIcon as={SettingsIcon} className="mr-2" />
                    </Button>
                    <Button
                        variant="solid"
                        onPress={() => handleViewAsMember(roomId, roomName)}
                    >
                        <ButtonText>View as Member</ButtonText>
                        <ButtonIcon as={EyeIcon} className="ml-2" />
                    </Button>
                </View>
            </DrawerLayout>
        </>
    );
}

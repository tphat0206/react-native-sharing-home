import { View } from "react-native";
import StyledButton from "./commons/StyledButton";

interface GroupButtonRoomEmptyProps {
    onAddRoomMasterPress: () => void;
    onDeleteRoomPress: () => void;
}

export default function GroupButtonRoomEmpty({
    onAddRoomMasterPress,
    onDeleteRoomPress,
}: GroupButtonRoomEmptyProps) {
    return (
        <View>
            <StyledButton
                onPress={onAddRoomMasterPress}
                buttonClassName="h-12"
                size="lg"
                buttonText="Add room master"
            />
            <StyledButton
                onPress={onDeleteRoomPress}
                buttonClassName="h-12 border-red-500 mt-4"
                size="lg"
                variant="outline"
                buttonText="Delete room"
            />
        </View>
    );
}

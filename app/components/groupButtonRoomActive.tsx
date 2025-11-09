import { View } from "react-native";
import StyledButton from "./commons/StyledButton";

interface GroupButtonRoomActiveProps {
    onViewInvoiceHistoryPress: () => void;
    onCreateInvoicePress: () => void;
    onDeleteRoomPress: () => void;
}
export default function GroupButtonRoomActive({
    onViewInvoiceHistoryPress,
    onCreateInvoicePress,
    onDeleteRoomPress,
}: GroupButtonRoomActiveProps) {
    return (
        <View className="mt-8">
            <View className="flex-row justify-between">
                <StyledButton
                    buttonText="Invoice history"
                    onPress={onViewInvoiceHistoryPress}
                    buttonClassName="h-12"
                />
                <StyledButton
                    buttonText="Create invoice"
                    onPress={onCreateInvoicePress}
                    buttonClassName="h-12"
                />
            </View>
            <StyledButton
                buttonText="Delete room"
                onPress={onDeleteRoomPress}
                buttonClassName="h-12 border-red-500 mt-4"
                variant="outline"
            />
        </View>
    );
}

import { FullSummaryInvoiceHistory } from "@/app/constants/types";
import { HStack } from "@/components/ui/hstack";
import { EyeIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { dummy_room_master_invoice_history_detail } from "@/utils/dummy";
import { useState } from "react";
import { Pressable, View } from "react-native";
import TableRoomMasterInvoiceHistory from "./tableRoomMasterInvoiceHistory";

interface RoomMasterInvoiceHistoryCardProps {
    invoice: {
        id: number;
        month: string;
        total_spent: number;
        is_show_expense: boolean;
    };
    onShowExpense: (invoiceId: number) => void;
}

export default function RoomMasterInvoiceHistoryCard({
    invoice,
    onShowExpense,
}: RoomMasterInvoiceHistoryCardProps) {
    const [invoiceHistoryDetail, setInvoiceHistoryDetail] =
        useState<FullSummaryInvoiceHistory>();

    const handleShowExpense = () => {
        onShowExpense(invoice.id);
        setInvoiceHistoryDetail(dummy_room_master_invoice_history_detail);
    };

    return (
        <View className="bg-white my-1 rounded-2xl w-full px-4 py-4 shadow-md">
            <HStack
                space="md"
                reversed={false}
                className="justify-between px-2"
            >
                <View className="flex-1">
                    <Text size="lg" className="font-bold">
                        Month: {invoice.month}
                    </Text>
                    {!invoice.is_show_expense && (
                        <Text size="md" className="font-medium">
                            Total spent: {invoice.total_spent.toLocaleString()}
                        </Text>
                    )}
                </View>

                <Pressable onPress={handleShowExpense}>
                    <View className="flex-1 items-end justify-center">
                        <Icon as={EyeIcon} size="lg" />
                    </View>
                </Pressable>
            </HStack>
            {invoice.is_show_expense ? (
                <TableRoomMasterInvoiceHistory
                    invoice_history={invoiceHistoryDetail}
                />
            ) : null}
        </View>
    );
}

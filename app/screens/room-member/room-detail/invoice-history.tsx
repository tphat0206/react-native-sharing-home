import MemberInvoiceHistoryCard from "@/app/components/invoices/memberInvoiceHistoryCard";
import { ShortPersonalInvoiceHistory } from "@/app/constants/types";
import { dummy_room_member_invoice_history_list } from "@/utils/dummy";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

interface MemberInvoiceHistory extends ShortPersonalInvoiceHistory {
    is_show_expense: boolean;
}
export default function InvoiceHistoryTab() {
    const router = useRouter();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const [invoiceHistory, setInvoiceHistory] = useState<
        MemberInvoiceHistory[]
    >(dummy_room_member_invoice_history_list);

    const handleShowExpense = (invoiceId: number) => {
        setInvoiceHistory(
            invoiceHistory.map((invoice) =>
                invoice.id === invoiceId
                    ? { ...invoice, is_show_expense: !invoice.is_show_expense }
                    : { ...invoice, is_show_expense: false }
            )
        );
    };

    return (
        <View className="flex-1 bg-gray-50 mt-2 mx-1">
            {invoiceHistory.map((invoice) => (
                <MemberInvoiceHistoryCard
                    key={invoice.id}
                    invoice={invoice}
                    onShowExpense={handleShowExpense}
                />
            ))}
        </View>
    );
}

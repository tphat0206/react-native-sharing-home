import InvoiceHistoryCard from "@/app/components/invoices/invoiceHistoryCard";
import { DrawerLayout } from "@/components/DrawerLayout";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";

export default function InvoiceHistoryScreen() {
    const router = useRouter();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const [invoiceHistory, setInvoiceHistory] = useState([
        {
            id: 1,
            amount: 100000,
            date: "2024-02-15",
            status: "pending",
            is_show_expense: false,
        },
        {
            id: 2,
            amount: 400000123,
            date: "2024-02-15",
            status: "paid",
            is_show_expense: false,
        },
        {
            id: 3,
            amount: 112313123,
            date: "2024-02-15",
            status: "paid",
            is_show_expense: false,
        },
    ]);

    const handleShowExpense = (invoiceId: number) => {
        setInvoiceHistory(
            invoiceHistory.map((invoice) =>
                invoice.id === invoiceId
                    ? { ...invoice, is_show_expense: true }
                    : { ...invoice, is_show_expense: false }
            )
        );
    };

    return (
        <DrawerLayout
            title={roomName + " - Invoice history" || "Invoice history"}
            showNotificationIcon={true}
        >
            <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                {invoiceHistory.map((invoice) => (
                    <InvoiceHistoryCard
                        key={invoice.id}
                        invoice={invoice}
                        onShowExpense={handleShowExpense}
                    />
                ))}
            </ScrollView>
        </DrawerLayout>
    );
}

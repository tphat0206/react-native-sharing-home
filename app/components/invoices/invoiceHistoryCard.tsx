import { HStack } from "@/components/ui/hstack";
import {
    CheckIcon,
    ChevronDownIcon,
    ClockIcon,
    Icon,
} from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Expense } from "../../constants/types";
import StyledBadge from "../commons/StyledBadge";
import TableFixedInvoiceHistory from "./tableFixedInvoiceHistory";

interface InvoiceHistoryCardProps {
    invoice: {
        id: number;
        amount: number;
        date: string;
        status: string;
        is_show_expense: boolean;
    };
    onShowExpense: (invoiceId: number) => void;
}

export default function InvoiceHistoryCard({
    invoice,
    onShowExpense,
}: InvoiceHistoryCardProps) {
    const [expense, setExpense] = useState<Expense[]>([]);

    const handleShowExpense = () => {
        onShowExpense(invoice.id);
        setExpense([
            { name: "Electricity", price: 10000000, quantity: 18 },
            { name: "Water", price: 100, quantity: 1 },
            { name: "Internet", price: 100, quantity: 1 },
            { name: "Rent", price: 100, quantity: 1 },
            { name: "Other", price: 100, quantity: 1 },
        ]);
    };

    const mapStatusToIcon = (status: string) => {
        switch (status) {
            case "paid":
                return CheckIcon;
            case "pending":
                return ClockIcon;
        }
    };

    const mapStatusToAction = (status: string) => {
        switch (status) {
            case "paid":
                return "success";
            case "pending":
                return "warning";
            default:
                return "muted";
        }
    };

    return (
        <View className="bg-white my-1 rounded-2xl w-full px-4 pt-6 pb-4">
            <HStack space="md" reversed={false} className="justify-between p-2">
                <View className="flex-1">
                    <Text size="lg" className="font-bold">
                        Date: {invoice.date}
                    </Text>
                    <Text size="md" className="font-medium">
                        Amount: {invoice.amount.toLocaleString()}
                    </Text>
                    <View className="flex-row items-center justify-between rounded-2xl">
                        <StyledBadge
                            label={invoice.status}
                            icon={mapStatusToIcon(invoice.status)}
                            action={mapStatusToAction(invoice.status)}
                        />
                    </View>
                </View>

                <Pressable onPress={handleShowExpense}>
                    <View className="flex-1 items-end justify-center">
                        <Icon as={ChevronDownIcon} size="lg" />
                    </View>
                </Pressable>
            </HStack>
            {invoice.is_show_expense ? (
                <TableFixedInvoiceHistory expenses={expense} />
            ) : null}
        </View>
    );
}

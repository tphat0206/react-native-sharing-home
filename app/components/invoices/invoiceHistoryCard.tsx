import { Grid, GridItem } from "@/components/ui/grid";
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
import { FixedInvoice } from "../../constants/types";
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
    const [fixedInvoice, setFixedInvoice] = useState<FixedInvoice>();

    const handleShowExpense = () => {
        onShowExpense(invoice.id);
        setFixedInvoice({
            date: new Date(),
            totalAmount: 4550000,
            eachMemberAmount: 1137500,
            expenses: [
                {
                    name: "Rent",
                    price: 4550000,
                    quantity: 1,
                },
                {
                    name: "Electricity",
                    price: 4000,
                    quantity: 120,
                },
                {
                    name: "Wifi",
                    price: 150000,
                    quantity: 1,
                },
                {
                    name: "Water",
                    price: 3000,
                    quantity: 120,
                },
            ],
        });
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
                <>
                    <TableFixedInvoiceHistory
                        expenses={fixedInvoice?.expenses ?? []}
                    />
                    <Grid
                        className="gap-2 p-2 border-b border-gray-200 bg-gray-100"
                        _extra={{ className: "grid-cols-12" }}
                    >
                        <GridItem
                            className="justify-center"
                            _extra={{ className: "col-span-6" }}
                        >
                            <Text size="md" className="font-medium">
                                Total
                            </Text>
                        </GridItem>
                        <GridItem
                            className="justify-center"
                            _extra={{ className: "col-span-6" }}
                        >
                            <Text size="md" className="font-normal text-right">
                                {fixedInvoice?.totalAmount.toLocaleString()}
                            </Text>
                        </GridItem>
                    </Grid>
                </>
            ) : null}
        </View>
    );
}

import { FixedInvoice } from "@/app/constants/types";
import { Grid, GridItem } from "@/components/ui/grid";
import { Heading, Text } from "@/components/ui/text";
import { formatDate } from "@/utils/format_date";
import { useMemo } from "react";
import { View } from "react-native";

interface FixedCostsProps {
    fixedCosts: FixedInvoice;
    memberCount: number;
}

export default function FixedCosts({
    fixedCosts,
    memberCount,
}: FixedCostsProps) {
    const total = useMemo(() => {
        let total = 0;
        fixedCosts.expenses.forEach(
            (expense) => (total += expense.price * expense.quantity)
        );
        return total;
    }, [fixedCosts.expenses]);
    return (
        <View className="bg-gray-200 p-4 rounded-2xl my-2">
            <Heading size="md">Fixed Costs</Heading>
            <Text>{formatDate(fixedCosts.date)}</Text>
            <Grid className="gap-2 my-4" _extra={{ className: "grid-cols-8" }}>
                {fixedCosts.expenses.map((expense, index) => (
                    <GridItem
                        key={`expense-${index}`}
                        className="bg-background-50 p-3 rounded-md text-center"
                        _extra={{ className: "col-span-4" }}
                    >
                        <Text className="text-sm">{expense.name}</Text>
                        <Text className="text-sm">
                            {(
                                expense.price * expense.quantity
                            ).toLocaleString()}
                        </Text>
                    </GridItem>
                ))}
                <GridItem
                    className="bg-background-50 p-3 rounded-md flex justify-between"
                    _extra={{ className: "col-span-8" }}
                >
                    <Text className="text-sm">Total</Text>
                    <Text className="text-sm">{total.toLocaleString()}</Text>
                </GridItem>
                <GridItem
                    className="bg-background-50 p-3 rounded-md flex justify-between"
                    _extra={{ className: "col-span-8" }}
                >
                    <Text className="text-sm">My share</Text>
                    <Text className="text-sm">
                        {(total / memberCount).toLocaleString(undefined, {
                            maximumFractionDigits: 0,
                        })}
                    </Text>
                </GridItem>
            </Grid>
        </View>
    );
}

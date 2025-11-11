import { MonthlyExpense } from "@/app/constants/types";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, ClockIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { formatDate } from "@/utils/format_date";
import { useMemo } from "react";
import { View } from "react-native";

interface MonthlyCostsItemWithoutEditProps {
    monthlyExpense: MonthlyExpense;
}

export default function MonthlyCostsItemWithoutEdit({
    monthlyExpense,
}: MonthlyCostsItemWithoutEditProps) {
    const confirmationCount = useMemo(
        () =>
            monthlyExpense.sharing.filter((expense) => expense.is_confirmed)
                .length,
        [monthlyExpense.sharing]
    );
    return (
        <View className="bg-white my-3 rounded-2xl p-4 shadow-sm">
            <HStack className="justify-between">
                <Text className="font-medium">{monthlyExpense.name}</Text>
                <Text className="font-medium">
                    {monthlyExpense.amount.toLocaleString()}
                </Text>
            </HStack>
            <HStack className="justify-between my-1">
                <Text>{`Date: ${formatDate(monthlyExpense.date)}`}</Text>
                <Text>{`Share: ${confirmationCount} / ${monthlyExpense.sharing.length}`}</Text>
            </HStack>
            <Text className="font-medium">{`Payer: ${monthlyExpense.payer}`}</Text>
            <View className="mt-2">
                {monthlyExpense.sharing.map((sharing, index) => (
                    <HStack
                        key={index}
                        className="items-center justify-between my-1"
                    >
                        <Text size="md">{`${sharing.member.name}`}</Text>
                        {sharing.is_confirmed ? (
                            <Icon
                                as={CheckIcon}
                                size="md"
                                className="text-green-500"
                            />
                        ) : (
                            <Icon
                                as={ClockIcon}
                                size="md"
                                className="text-yellow-500"
                            />
                        )}
                    </HStack>
                ))}
            </View>
        </View>
    );
}

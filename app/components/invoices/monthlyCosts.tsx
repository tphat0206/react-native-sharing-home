import { MonthlyExpense } from "@/app/constants/types";
import { HStack } from "@/components/ui/hstack";
import { Heading } from "@/components/ui/text";
import { View } from "react-native";
import StyledButton from "../commons/StyledButton";
import MonthlyCostsItem from "./monthlyCostsItem";

interface MonthlyCostsProps {
    monthlyExpenses: MonthlyExpense[];
    onAddNewMonthlyExpense: () => void;
    onDeleteMonthlyExpense: (index: number) => void;
    onChangeConfirmation: (index: number, value: boolean) => void;
}

export default function MonthlyCosts({
    monthlyExpenses,
    onAddNewMonthlyExpense,
    onDeleteMonthlyExpense,
    onChangeConfirmation,
}: MonthlyCostsProps) {
    const memberName = "Member 1";
    return (
        <View className="bg-gray-200 p-4 rounded-2xl my-2">
            <HStack className="justify-between items-center">
                <Heading size="md">Fixed Costs</Heading>
                <StyledButton
                    buttonText="New"
                    onPress={onAddNewMonthlyExpense}
                />
            </HStack>

            {monthlyExpenses.map((monthlyExpense, index) => (
                <MonthlyCostsItem
                    key={index}
                    memberName={memberName}
                    monthlyExpense={monthlyExpense}
                    onDeleteMonthlyCostsItem={() =>
                        onDeleteMonthlyExpense(index)
                    }
                    onChangeConfirmation={(value) =>
                        onChangeConfirmation(index, value)
                    }
                />
            ))}
        </View>
    );
}

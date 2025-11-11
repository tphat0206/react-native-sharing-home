import MonthlyCostsItemWithoutEdit from "@/app/components/invoices/monthlyCostsItemWithoutEdit";
import { MonthlyExpense } from "@/app/constants/types";
import { dummy_monthly_costs } from "@/utils/dummy";
import { useState } from "react";
import { View } from "react-native";

export default function MonthlyInvoiceTab() {
    const [monthlyCosts, setMonthlyCosts] =
        useState<MonthlyExpense[]>(dummy_monthly_costs);
    return (
        <View className="my-2">
            {monthlyCosts.map((monthlyCostsItem, index) => (
                <MonthlyCostsItemWithoutEdit
                    key={index}
                    monthlyExpense={monthlyCostsItem}
                />
            ))}
        </View>
    );
}

// import StyledButton from "@/app/components/commons/StyledButton";
import DrawerCreateMonthlyInvoice from "@/app/components/invoices/drawerCreateMonthlyInvoice";
import FixedCosts from "@/app/components/invoices/fixedCosts";
import MonthlyCosts from "@/app/components/invoices/monthlyCosts";
import { FixedInvoice, MonthlyExpense } from "@/app/constants/types";
import { dummy_fixed_costs, dummy_monthly_costs } from "@/utils/dummy";
import React, { useState } from "react";
import { View } from "react-native";

export default function CurrentInvoiceTab() {
    const [showCreateInvoiceDrawer, setShowCreateInvoiceDrawer] =
        useState(false);
    const [fixedCosts, setFixedCosts] =
        useState<FixedInvoice>(dummy_fixed_costs);

    const [monthlyCosts, setMonthlyCosts] =
        useState<MonthlyExpense[]>(dummy_monthly_costs);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [newExpenseName, setNewExpenseName] = useState("");
    const [newExpenseAmount, setNewExpenseAmount] = useState(0);
    const [sharing, setSharing] = useState([false, false, false, false]);

    const members = ["Member 1", "Member 2", "Member 3", "Member 4"];

    const onAddNewMonthlyExpense = () => {
        console.log("Add new monthly expense");
        setShowCreateInvoiceDrawer(true);
    };
    const onDeleteMonthlyExpense = (index: number) => {
        console.log(`Delete monthly expense ${index}`);
    };

    const onChangeConfirmation = (index: number, value: boolean) => {
        console.log(
            `Change confirmation of expense ${index} to ${
                value ? "TRUE" : "FALSE"
            }`
        );
    };

    const handleCancelCreateInvoice = () => {
        setNewExpenseName("");
        setNewExpenseAmount(0);
        setSelectedDate(null);
        setSharing([false, false, false, false]);
        setShowCreateInvoiceDrawer(false);
    };

    const handleCreateNewExpense = () => {
        console.log("Create new expense");
        setNewExpenseName("");
        setNewExpenseAmount(0);
        setSelectedDate(null);
        setSharing([false, false, false, false]);
        setShowCreateInvoiceDrawer(false);
    };

    const handleChangeSelectedDate = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleChangeNewExpenseName = (value: string) => {
        setNewExpenseName(value);
    };

    const handleChangeNewExpenseAmount = (value: number) => {
        setNewExpenseAmount(value);
    };

    const handleChangeSharing = (index: number) => {
        setSharing((prev) =>
            prev.map((value, i) => (i === index ? !value : value))
        );
    };

    return (
        <View>
            <FixedCosts fixedCosts={fixedCosts} memberCount={3} />
            <MonthlyCosts
                monthlyExpenses={monthlyCosts}
                onAddNewMonthlyExpense={onAddNewMonthlyExpense}
                onDeleteMonthlyExpense={onDeleteMonthlyExpense}
                onChangeConfirmation={onChangeConfirmation}
            />
            <DrawerCreateMonthlyInvoice
                isOpen={showCreateInvoiceDrawer}
                onCancel={handleCancelCreateInvoice}
                onCreate={handleCreateNewExpense}
                selectedDate={selectedDate}
                onDateChange={handleChangeSelectedDate}
                expenseName={newExpenseName}
                onChangeName={handleChangeNewExpenseName}
                expenseAmount={newExpenseAmount}
                onChangeAmount={handleChangeNewExpenseAmount}
                sharing={sharing}
                members={members}
                onChangeSharing={handleChangeSharing}
            />
        </View>
    );
}

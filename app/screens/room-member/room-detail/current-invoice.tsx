// import StyledButton from "@/app/components/commons/StyledButton";
import DrawerCreateMonthlyInvoice from "@/app/components/invoices/drawerCreateMonthlyInvoice";
import FixedCosts from "@/app/components/invoices/fixedCosts";
import MonthlyCosts from "@/app/components/invoices/monthlyCosts";
import { FixedInvoice, MonthlyExpense } from "@/app/constants/types";
import React, { useState } from "react";
import { View } from "react-native";

export default function InvoiceTab() {
    const [showCreateInvoiceDrawer, setShowCreateInvoiceDrawer] =
        useState(false);
    const [fixedCosts, setFixedCosts] = useState<FixedInvoice>({
        month: "November 2025",
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
            {
                name: "Rubbish",
                price: 3000,
                quantity: 120,
            },
        ],
    });

    const [monthlyCosts, setMonthlyCosts] = useState<MonthlyExpense[]>([
        {
            name: "Washing Powder",
            date: new Date(),
            amount: 260000,
            sharing: [
                {
                    user: "Member 4",
                    is_confirmed: true,
                },
                {
                    user: "Member 3",
                    is_confirmed: true,
                },
                {
                    user: "Member 1",
                    is_confirmed: false,
                },
            ],
            payer: "Member 1",
            is_confirmed: false,
        },
        {
            name: "Market",
            date: new Date(),
            amount: 120000,
            sharing: [
                {
                    user: "Member 1",
                    is_confirmed: true,
                },
                {
                    user: "Member 4",
                    is_confirmed: true,
                },
            ],
            payer: "Member 2",
            is_confirmed: true,
        },
    ]);

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

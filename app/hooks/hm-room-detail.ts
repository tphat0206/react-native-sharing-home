import { useMemo, useState } from "react";
import { Expense, Member } from "../constants/types";

const useHMRoomDetail = () => {
    const [showModal, setShowModal] = useState(false);
    const [newPhoneNumber, setNewPhoneNumber] = useState<string>("");
    const [showCreateInvoiceDrawer, setShowCreateInvoiceDrawer] =
        useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [defaultExpenses, setDefaultExpenses] = useState<Expense[]>([
        { name: "Room", price: 5000000, quantity: 1 },
        { name: "Electricity", price: 10000000, quantity: 18 },
        { name: "Water", price: 100, quantity: 1 },
    ]);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [members, setMembers] = useState<Member[]>([
        {
            id: 1,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "John Doe",
            phoneNumber: "01234567891",
            role: "Room master",
        },
        {
            id: 2,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Jane Doe",
            phoneNumber: "01234567892",
            role: "Member",
        },
        {
            id: 3,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Jim Beam",
            phoneNumber: "01234567893",
            role: "Member",
        },
    ]);

    // const [members, setMembers] = useState<Member[]>([]);

    const handleCancelAddNewRoomMaster = () => {
        setShowModal(false);
        setNewPhoneNumber("");
    };

    const handleAddRoomMaster = () => {
        setShowModal(true);
    };

    const handleChangePhoneNumber = (phoneNumber: string) => {
        setNewPhoneNumber(phoneNumber);
    };

    const isEmpty = useMemo(() => members.length === 0, [members]);
    const handleAddNewRoomMaster = () => {
        setMembers([
            ...members,
            {
                id: members.length + 1,
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                name: newPhoneNumber,
                phoneNumber: newPhoneNumber,
                role: "Room master",
            },
        ]);
        setNewPhoneNumber("");
        setShowModal(false);
    };

    const handleCreateInvoice = () => {
        setShowCreateInvoiceDrawer(true);
    };

    const handleDeleteRoom = () => {
        console.log("Delete room");
    };

    const handleCancelCreateInvoice = () => {
        setDefaultExpenses([
            { name: "Room", price: 5000000, quantity: 1 },
            { name: "Electricity", price: 10000000, quantity: 18 },
            { name: "Water", price: 100, quantity: 1 },
        ]);
        setExpenses([]);
        setShowCreateInvoiceDrawer(false);
    };

    const handleCreateNewInvoice = () => {
        console.log("Create new invoice");
        setShowCreateInvoiceDrawer(false);
    };

    const handleChangeSelectedDate = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleChangeDefaultExpenses = (
        name: string,
        key: string,
        value: number
    ) => {
        setDefaultExpenses((prevExpenses) =>
            prevExpenses.map((expense) =>
                expense.name === name
                    ? {
                          ...expense,
                          [key]: value,
                          total: expense.price * expense.quantity,
                      }
                    : expense
            )
        );
    };

    const handleAddExpense = () => {
        console.log("Add expense");
        setExpenses((prevExpenses) => [
            ...prevExpenses,
            { name: "", price: 0, quantity: 0 },
        ]);
    };

    const handleRemoveExpense = (index: number) => {
        setExpenses((prevExpenses) =>
            prevExpenses.filter((_, i) => i !== index)
        );
    };

    const handleChangeExpense = (index: number, key: string, value: any) => {
        setExpenses((prevExpenses) =>
            prevExpenses.map((expense, i) =>
                i === index ? { ...expense, [key]: value } : expense
            )
        );
    };

    return {
        showModal,
        newPhoneNumber,
        showCreateInvoiceDrawer,
        selectedDate,
        defaultExpenses,
        expenses,
        members,
        isEmpty,

        handleAddRoomMaster,
        handleChangePhoneNumber,
        handleCancelAddNewRoomMaster,
        handleAddNewRoomMaster,
        handleCreateInvoice,
        handleDeleteRoom,
        handleCancelCreateInvoice,
        handleCreateNewInvoice,
        handleChangeSelectedDate,
        handleChangeDefaultExpenses,
        handleAddExpense,
        handleRemoveExpense,
        handleChangeExpense,
    };
};

export default useHMRoomDetail;

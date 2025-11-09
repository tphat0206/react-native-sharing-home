type Member = {
    id: number;
    avatar?: string;
    name: string;
    phoneNumber: string;
    role: string;
};

type Expense = {
    name: string;
    price: number;
    quantity: number;
};

type FixedInvoice = {
    month: string;
    expenses: Expense[];
};

type Sharing = {
    user: string;
    is_confirmed: boolean;
};

type MonthlyExpense = {
    name: string;
    date: Date;
    amount: number;
    sharing: Sharing[];
    payer: string;
    is_confirmed: boolean;
};

type Tab = {
    id: number;
    name: string;
    path: string;
};

export { Expense, FixedInvoice, Member, MonthlyExpense, Tab };

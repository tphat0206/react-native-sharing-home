import { ROLE } from "./enum";

type HMRoom = {
    id: number;
    name: string;
    memberCount: number;
    debtAmount: number;
    nextInvoiceDate: string;
};

type RMRoom = {
    id: number;
    name: string;
    homeName: string;
    memberCount: number;
    nextInvoiceDate: string;
};

type Member = {
    id: number;
    avatar?: string;
    name: string;
    phoneNumber: string;
    role: ROLE.HOME_MASTER | ROLE.ROOM_MASTER | ROLE.ROOM_MEMBER;
};

type Expense = {
    name: string;
    price: number;
    quantity: number;
};

type FixedInvoice = {
    date: Date;
    expenses: Expense[];
    totalAmount: number;
    eachMemberAmount: number;
};

type Sharing = {
    member: Member;
    is_confirmed: boolean;
};

type PersonalInvoice = {
    fixed_costs: number;
    monthly_costs: number;
    my_share: MemberInvoice;
};

type SummaryInvoice = {
    fixed_costs: number;
    monthly_costs: number;
    members_share: MemberInvoice[];
};

type MemberInvoice = {
    member: Member;
    spent: number;
    budgeted_costs: number;
    actual_costs: number;
};

type ShortPersonalInvoiceHistory = {
    id: number;
    month: string;
    actual_cost: number;
};

type FullPersonalInvoiceHistory = {
    id: number;
    month: string;
    actual_cost: number;
    invoice: PersonalInvoice;
};

type ShortSummaryInvoiceHistory = {
    id: number;
    total_spent: number;
    month: string;
};

type FullSummaryInvoiceHistory = {
    id: number;
    month: string;
    total_spent: number;
    status: string;
    file?: string;
    invoice: SummaryInvoice;
};

type MonthlyInvoice = {
    monthly_expenses: MonthlyExpense[];
};

type MonthlyExpense = {
    name: string;
    date: Date;
    amount: number;
    sharing: Sharing[];
    payer: Member;
    is_confirmed: boolean;
};

type Tab = {
    id: number;
    name: string;
    path: string;
};

type Notification = {
    id: number;
    title: string;
    description: string;
};

export {
    Expense,
    FixedInvoice,
    FullPersonalInvoiceHistory,
    FullSummaryInvoiceHistory,
    HMRoom,
    Member,
    MemberInvoice,
    MonthlyExpense,
    MonthlyInvoice,
    Notification,
    PersonalInvoice,
    RMRoom,
    ShortPersonalInvoiceHistory,
    ShortSummaryInvoiceHistory,
    SummaryInvoice,
    Tab,
};

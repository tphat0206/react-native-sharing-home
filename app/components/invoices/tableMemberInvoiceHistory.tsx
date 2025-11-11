import { PersonalInvoice } from "@/app/constants/types";
import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import MemberShareBox from "./common/memberShareBox";

interface TableMemberInvoiceHistoryProps {
    expense?: PersonalInvoice;
}

const StyledTextHeader = ({ children, ...props }: any) => {
    return (
        <Text className="font-semibold" {...props}>
            {children}
        </Text>
    );
};

const StyledTextAmount = ({ children, ...props }: any) => {
    return (
        <Text size="sm" {...props}>
            {children}
        </Text>
    );
};

export default function TableMemberInvoiceHistory({
    expense,
}: TableMemberInvoiceHistoryProps) {
    return (
        <Grid
            className="px-2 gap-2 gap-x-10 mt-4"
            _extra={{ className: "grid-cols-12" }}
        >
            <GridItem
                className="bg-gray-100 px-4 py-2 rounded-xl"
                _extra={{ className: "col-span-6" }}
            >
                <StyledTextHeader>Fixed Costs</StyledTextHeader>
                <StyledTextAmount>
                    {expense?.fixed_costs.toLocaleString()}
                </StyledTextAmount>
            </GridItem>
            <GridItem
                className="bg-gray-100 px-4 py-2 rounded-xl"
                _extra={{ className: "col-span-6" }}
            >
                <StyledTextHeader>Monthly Costs</StyledTextHeader>
                <StyledTextAmount>
                    {expense?.monthly_costs.toLocaleString()}
                </StyledTextAmount>
            </GridItem>
            <GridItem
                className="bg-gray-100 px-4 py-2 rounded-xl"
                _extra={{ className: "col-span-12" }}
            >
                <MemberShareBox
                    title="My Share"
                    member_share={expense?.my_share}
                />
            </GridItem>
        </Grid>
    );
}

import { MemberInvoice } from "@/app/constants/types";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

interface MemberShareBoxProps {
    title: string;
    member_share?: MemberInvoice;
}

export default function MemberShareBox({
    title,
    member_share,
}: MemberShareBoxProps) {
    return (
        <>
            <View>
                <StyledTextHeader>{title}</StyledTextHeader>
            </View>
            <HStack className="justify-between">
                <View>
                    <StyledTextMySpendTitle>Spent</StyledTextMySpendTitle>
                    <StyledTextAmount>
                        {member_share?.spent.toLocaleString()}
                    </StyledTextAmount>
                </View>
                <View>
                    <StyledTextMySpendTitle className="text-center">
                        Budgeted Costs
                    </StyledTextMySpendTitle>
                    <StyledTextAmount className="text-center">
                        {member_share?.budgeted_costs.toLocaleString()}
                    </StyledTextAmount>
                </View>
                <View>
                    <StyledTextMySpendTitle className="text-right">
                        Actual Costs
                    </StyledTextMySpendTitle>
                    <StyledTextAmount className="text-right">
                        {member_share?.actual_costs.toLocaleString()}
                    </StyledTextAmount>
                </View>
            </HStack>
        </>
    );
}

const StyledTextHeader = ({ children, ...props }: any) => {
    return (
        <Text className="font-semibold" {...props}>
            {children}
        </Text>
    );
};

const StyledTextMySpendTitle = ({ children, ...props }: any) => {
    return (
        <Text size="sm" {...props}>
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

import { FullSummaryInvoiceHistory } from "@/app/constants/types";
import { Grid, GridItem } from "@/components/ui/grid";
import {
    BellIcon,
    CheckIcon,
    ClockIcon,
    DownloadIcon,
} from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import StyledBadge from "../commons/StyledBadge";
import StyledIconButton from "../commons/StyledIconButton";
import MemberShareBox from "./common/memberShareBox";

interface TableRoomMasterInvoiceHistoryProps {
    invoice_history?: FullSummaryInvoiceHistory;
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

export default function TableRoomMasterInvoiceHistory({
    invoice_history,
}: TableRoomMasterInvoiceHistoryProps) {
    const mapStatusToIcon = (status: string) => {
        switch (status) {
            case "paid":
                return CheckIcon;
            case "pending":
                return ClockIcon;
        }
    };

    const mapStatusToAction = (status: string) => {
        switch (status) {
            case "paid":
                return "success";
            case "pending":
                return "warning";
            default:
                return "muted";
        }
    };

    const handleDownloadPDF = () => {
        console.log("Download PDF");
    };

    const handleNotifyMember = () => {
        console.log("Notify members");
    };

    return !invoice_history ? null : (
        <View className="mx-2">
            <View className="w-[50%] my-2">
                <StyledBadge
                    label={invoice_history.status}
                    icon={mapStatusToIcon(invoice_history.status)}
                    action={mapStatusToAction(invoice_history.status)}
                />
            </View>
            {invoice_history.status === "paid" && (
                <View className="flex-row items-center justify-between rounded-2xl">
                    <StyledIconButton
                        buttonText="Download PDF"
                        icon={DownloadIcon}
                        buttonClassName="bg-blue-300 rounded-full py-0 h-8"
                        textClassName="text-blue-900 font-medium text-md"
                        onPress={handleDownloadPDF}
                    />
                </View>
            )}
            {invoice_history.status === "pending" && (
                <View className="flex-row items-center justify-between rounded-2xl">
                    <StyledIconButton
                        buttonText="Notify members"
                        icon={BellIcon}
                        buttonClassName="bg-blue-300 rounded-full py-0 h-8"
                        textClassName="text-blue-900 font-medium text-md"
                        onPress={handleNotifyMember}
                    />
                </View>
            )}
            <Grid
                className="gap-2 gap-x-10 mt-4"
                _extra={{ className: "grid-cols-12" }}
            >
                <GridItem
                    className="bg-gray-100 px-4 py-4 rounded-xl"
                    _extra={{ className: "col-span-6" }}
                >
                    <StyledTextHeader>Fixed Costs</StyledTextHeader>
                    <StyledTextAmount>
                        {invoice_history?.invoice?.fixed_costs.toLocaleString()}
                    </StyledTextAmount>
                </GridItem>
                <GridItem
                    className="bg-gray-100 px-4 py-4 rounded-xl"
                    _extra={{ className: "col-span-6" }}
                >
                    <StyledTextHeader>Monthly Costs</StyledTextHeader>
                    <StyledTextAmount>
                        {invoice_history?.invoice?.monthly_costs.toLocaleString()}
                    </StyledTextAmount>
                </GridItem>
                {invoice_history?.invoice?.members_share.map(
                    (member_share, index) => (
                        <GridItem
                            key={index}
                            className="bg-gray-100 px-4 py-4 rounded-xl"
                            _extra={{ className: "col-span-12" }}
                        >
                            <MemberShareBox
                                member_share={member_share}
                                title={member_share.member.name}
                            />
                        </GridItem>
                    )
                )}
            </Grid>
        </View>
    );
}

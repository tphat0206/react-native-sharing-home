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
import StyledButton from "../commons/StyledButton";
import StyledIconButton from "../commons/StyledIconButton";
import MemberShareBox from "./common/memberShareBox";

interface CurrentInvoiceHistoryProps {
    currentInvoice?: FullSummaryInvoiceHistory;
    handleCalculateSummary: () => void;
    handleCompleteCurrentInvoice: () => void;
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

export default function CurrentInvoiceHistory({
    currentInvoice,
    handleCalculateSummary,
    handleCompleteCurrentInvoice,
}: CurrentInvoiceHistoryProps) {
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

    return currentInvoice === undefined ? (
        <>
            <View>
                <StyledButton
                    buttonText="Calculate summary"
                    buttonClassName="bg-cyan-300 h-10 rounded-full"
                    textClassName="font-normal"
                    onPress={handleCalculateSummary}
                />
            </View>
            <View className="py-20 my-3 bg-white rounded-2xl">
                <Text className="text-center">
                    Click button to calculate summary
                </Text>
            </View>
        </>
    ) : (
        <View className="bg-white my-1 rounded-2xl px-6 py-4">
            <View>
                <Text size="lg" className="font-bold">
                    Current month: {currentInvoice.month}
                </Text>
            </View>
            <View className="w-[50%] my-2">
                <StyledBadge
                    label={currentInvoice.status}
                    icon={mapStatusToIcon(currentInvoice.status)}
                    action={mapStatusToAction(currentInvoice.status)}
                />
            </View>
            {currentInvoice.status === "paid" && (
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
            {currentInvoice.status === "pending" && (
                <Grid _extra={{ className: "grid-cols-12" }} className="mx-2">
                    <GridItem
                        className="items-center justify-between rounded-2xl"
                        _extra={{
                            className: "col-span-6",
                        }}
                    >
                        <StyledIconButton
                            buttonText="Notify members"
                            icon={BellIcon}
                            buttonClassName="bg-blue-300 rounded-full py-0"
                            textClassName="text-blue-900 font-medium text-md"
                            onPress={handleNotifyMember}
                        />
                    </GridItem>
                    <GridItem
                        className="items-center justify-between rounded-2xl"
                        _extra={{
                            className: "col-span-6",
                        }}
                    >
                        <StyledIconButton
                            buttonText="Complete"
                            icon={CheckIcon}
                            buttonClassName="bg-orange-300 rounded-full py-0"
                            textClassName="text-green-900 font-medium text-md"
                            onPress={handleCompleteCurrentInvoice}
                        />
                    </GridItem>
                </Grid>
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
                        {currentInvoice?.invoice?.fixed_costs.toLocaleString()}
                    </StyledTextAmount>
                </GridItem>
                <GridItem
                    className="bg-gray-100 px-4 py-4 rounded-xl"
                    _extra={{ className: "col-span-6" }}
                >
                    <StyledTextHeader>Monthly Costs</StyledTextHeader>
                    <StyledTextAmount>
                        {currentInvoice?.invoice?.monthly_costs.toLocaleString()}
                    </StyledTextAmount>
                </GridItem>
                {currentInvoice?.invoice?.members_share.map(
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

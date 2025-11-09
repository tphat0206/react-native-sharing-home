import StyledTabs from "@/app/components/commons/StyledTabs";
import GroupThreeCards from "@/app/components/groupThreeCards";
import Routes from "@/app/constants/Routes";
import { Tab } from "@/app/constants/types";
import { DrawerLayout } from "@/components/DrawerLayout";
import { Slot, useLocalSearchParams, usePathname } from "expo-router";
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

const tabs: Tab[] = [
    {
        id: 1,
        name: "Members",
        path: Routes.ROOM_MEMBER_ROOM_DETAIL_MEMBERS,
    },
    {
        id: 2,
        name: "Invoice",
        path: Routes.ROOM_MEMBER_ROOM_DETAIL_INVOICE,
    },
    {
        id: 3,
        name: "Invoice History",
        path: Routes.ROOM_MEMBER_ROOM_DETAIL_INVOICE_HISTORY,
    },
];

export default function RoomDetail() {
    const pathname = usePathname();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const [summary, setSummary] = useState({
        spent: 1_500_000,
        budget_cost: 1_000_000,
        actual_cost: 500_000,
    });
    console.log("pathname", pathname);
    const currentTabId = useMemo(
        () => tabs.find((tab) => pathname.includes(tab.path))?.id ?? 1,
        [pathname]
    );
    console.log("currentTabId", currentTabId);
    return (
        <>
            <DrawerLayout title={"Dashboard"} showNotificationIcon={true}>
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                    <GroupThreeCards
                        cards={[
                            {
                                title: "Spent",
                                value: summary.spent.toLocaleString(),
                            },
                            {
                                title: "Budgeted Costs",
                                value: summary.budget_cost.toLocaleString(),
                            },
                            {
                                title: "Actual Costs",
                                value: summary.actual_cost.toLocaleString(),
                            },
                        ]}
                    />
                    <StyledTabs
                        tabs={tabs}
                        currentTabId={currentTabId}
                    />
                    <Slot />
                    <View className="h-20"/>
                </ScrollView>
            </DrawerLayout>
        </>
    );
}

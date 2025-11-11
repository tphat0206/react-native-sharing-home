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
        path: Routes.ROOM_MASTER_ROOM_DETAIL_MEMBERS,
    },
    {
        id: 2,
        name: "Fixed",
        path: Routes.ROOM_MASTER_ROOM_DETAIL_FIXED_INVOICE,
    },
    {
        id: 3,
        name: "Monthly",
        path: Routes.ROOM_MASTER_ROOM_DETAIL_MONTHLY_INVOICE,
    },
    {
        id: 4,
        name: "Summary",
        path: Routes.ROOM_MASTER_ROOM_DETAIL_SUMMARY,
    },
];

export default function RoomMasterRoomDetail() {
    const pathname = usePathname();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const [summary, setSummary] = useState({
        member_count: 4,
        invoice_count: 3,
        total_spent: 5_000_000,
    });

    const currentTabId = useMemo(
        () => tabs.find((tab) => pathname.includes(tab.path))?.id ?? 1,
        [pathname]
    );
    return (
        <>
            <DrawerLayout title={"Dashboard"} showNotificationIcon={true}>
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                    <GroupThreeCards
                        cards={[
                            {
                                title: "Members",
                                value: summary.member_count.toLocaleString(),
                            },
                            {
                                title: "Invoices",
                                value: summary.invoice_count.toLocaleString(),
                            },
                            {
                                title: "Total spent",
                                value: summary.total_spent.toLocaleString(),
                            },
                        ]}
                    />
                    <StyledTabs tabs={tabs} currentTabId={currentTabId} />
                    <Slot />
                    <View className="h-20" />
                </ScrollView>
            </DrawerLayout>
        </>
    );
}

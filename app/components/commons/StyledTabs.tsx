import { Tab } from "@/app/constants/types";
import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

interface StyledTabsProps {
    tabs: Tab[];
    currentTabId: number;
}

export default function StyledTabs({ tabs, currentTabId }: StyledTabsProps) {
    const router = useRouter();
    const onChangeTab = (path: string) => {
        router.replace(path as any);
    };
    return (
        <Grid
            className="bg-black p-1 my-4 justify-between rounded-full items-center"
            _extra={{ className: "grid-cols-12 gap-2" }}
        >
            {tabs.map((tab: Tab) => (
                <GridItem
                    key={tab.id}
                    _extra={{
                        className: `col-span-${String(12 / tabs.length)}`,
                    }}
                    className={
                        currentTabId === tab.id
                            ? "bg-white p-1 rounded-full"
                            : ""
                    }
                >
                    <Pressable onPress={() => onChangeTab(tab.path)}>
                        <Text
                            className={`text-center ${
                                currentTabId === tab.id
                                    ? "text-black"
                                    : "text-white p-2"
                            }`}
                        >
                            {tab.name}
                        </Text>
                    </Pressable>
                </GridItem>
            ))}
        </Grid>
    );
}

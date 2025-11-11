import { FixedInvoice } from "@/app/constants/types";
import { Grid, GridItem } from "@/components/ui/grid";
import { Heading, Text } from "@/components/ui/text";
import { dummy_fixed_costs } from "@/utils/dummy";
import { formatDate } from "@/utils/format_date";
import { useState } from "react";
import { View } from "react-native";
import TableFixedInvoiceHistory from "../../../components/invoices/tableFixedInvoiceHistory";

export default function FixedInvoiceTab() {
    const memberCount = 4;
    const [fixedCosts, setFixedCosts] =
        useState<FixedInvoice>(dummy_fixed_costs);

    return (
        <View className="bg-white my-2 rounded-2xl pb-10 px-4 py-8">
            <Heading size="md">
                {`Date: ${formatDate(fixedCosts.date)}`}
            </Heading>
            <Text>Fixed monthly room fee</Text>
            <TableFixedInvoiceHistory expenses={fixedCosts.expenses} />
            <Grid
                className="gap-2 p-2 border-b border-gray-200 bg-gray-100"
                _extra={{ className: "grid-cols-12" }}
            >
                <GridItem
                    className="justify-center"
                    _extra={{ className: "col-span-6" }}
                >
                    <Text size="md" className="font-medium">
                        Total
                    </Text>
                </GridItem>
                <GridItem
                    className="justify-center"
                    _extra={{ className: "col-span-6" }}
                >
                    <Text size="md" className="font-normal text-right">
                        {fixedCosts?.totalAmount.toLocaleString()}
                    </Text>
                </GridItem>
            </Grid>
            <Grid
                className="gap-2 p-2 border-b border-gray-200 bg-gray-100"
                _extra={{ className: "grid-cols-12" }}
            >
                <GridItem
                    className="justify-center"
                    _extra={{ className: "col-span-6" }}
                >
                    <Text size="md" className="font-medium">
                        Each member
                    </Text>
                </GridItem>
                <GridItem
                    className="justify-center"
                    _extra={{ className: "col-span-6" }}
                >
                    <Text size="md" className="font-normal text-right">
                        {fixedCosts?.eachMemberAmount.toLocaleString()}
                    </Text>
                </GridItem>
            </Grid>
        </View>
    );
}

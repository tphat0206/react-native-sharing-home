import { Grid, GridItem } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";

export default function HeaderTableFixedInvoice() {
    return (
        <Grid
            key={-1}
            className="gap-2 p-2 mx-1 border-b border-gray-200 bg-gray-100"
            _extra={{ className: "grid-cols-12" }}
        >
            <GridItem
                className="justify-center"
                _extra={{ className: "col-span-3" }}
            >
                <Text size="md" className="font-medium">
                    Name
                </Text>
            </GridItem>
            <GridItem
                className="justify-center"
                _extra={{ className: "col-span-4" }}
            >
                <Text size="md" className="font-medium text-right">
                    Price
                </Text>
            </GridItem>
            <GridItem
                className="justify-center"
                _extra={{ className: "col-span-1" }}
            >
                <Text size="md" className="font-medium text-center">
                    Qt.
                </Text>
            </GridItem>
            <GridItem
                className="justify-center"
                _extra={{ className: "col-span-4" }}
            >
                <Text size="md" className="font-medium text-right">
                    Total
                </Text>
            </GridItem>
        </Grid>
    );
}

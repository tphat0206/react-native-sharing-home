import { Grid, GridItem } from "@/components/ui/grid";
import { Heading, Text } from "@/components/ui/text";
import { View } from "react-native";

interface GroupThreeCardsProps {
    cards: {
        title: string;
        value: string;
    }[];
    cardClassName?: string;
    titleClassName?: string;
    titleSize?: "xs" | "sm" | "md" | "lg" | "xl";
    valueClassName?: string;
    valueSize?: "sm" | "md" | "lg" | "xl";
}

export default function GroupThreeCards({
    cards,
    cardClassName,
    titleClassName,
    valueClassName,
    titleSize = "sm",
    valueSize = "sm",
}: GroupThreeCardsProps) {
    return (
        <View className="w-full">
        <Grid
            className="gap-2 mx-1"
            _extra={{ className: "grid-cols-12" }}
        >
            {cards.map((card, index) => (
                <GridItem
                    key={`card-${index}`}
                    _extra={{ className: "col-span-4" }}
                    className={`bg-white py-6 px-2 rounded-2xl shadow-lg ${cardClassName}`}
                >
                    <View className="justify-center items-center">
                        <Text size={titleSize} className={`mb-4 font-medium ${titleClassName}`}>
                                {card.title}
                        </Text>
                        <Heading size={valueSize} className={valueClassName}>
                            {card.value}
                        </Heading>
                    </View>
                </GridItem>
            ))}
        </Grid>
        </View>
    );
}

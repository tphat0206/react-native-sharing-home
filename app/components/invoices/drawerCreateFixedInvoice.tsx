import {
    Drawer,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
} from "@/components/ui/drawer";
import { Grid, GridItem } from "@/components/ui/grid";
import { Icon, TrashIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Pressable, ScrollView, View } from "react-native";
import { Expense } from "../../constants/types";
import StyledButton from "../commons/StyledButton";
import StyledDatePicker from "../commons/StyledDatePicker";
import StyledInput from "../commons/StyledInput";
import HeaderTableFixedInvoiceWithoutTotal from "./headerTableFixedInvoiceWithoutTotal";

interface DrawerCreateFixedInvoiceProps {
    isOpen: boolean;
    onCancel: () => void;
    onCreate: () => void;
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
    defaultExpenses: Expense[];
    onChangeDefaultExpenses: (name: string, key: string, value: number) => void;
    expenses: Expense[];
    onChangeExpenses?: (
        index: number,
        key: string,
        value: number | string
    ) => void;
    onAddExpense: () => void;
    onRemoveExpense: (index: number) => void;
}

export default function DrawerCreateFixedInvoice({
    isOpen,
    onCancel,
    onCreate,
    selectedDate,
    onDateChange,
    defaultExpenses,
    onChangeDefaultExpenses,
    expenses,
    onChangeExpenses,
    onAddExpense,
    onRemoveExpense,
}: DrawerCreateFixedInvoiceProps) {
    return (
        <Drawer
            className="mb-20"
            isOpen={isOpen}
            size="lg"
            anchor="bottom"
            closeOnOverlayClick={false}
        >
            <DrawerBackdrop />
            <DrawerContent>
                <DrawerHeader>
                    <StyledButton
                        variant="outline"
                        onPress={onCancel}
                        buttonText="Cancel"
                    />

                    <StyledButton onPress={onCreate} buttonText="Create" />
                </DrawerHeader>
                <DrawerBody>
                    <ScrollView>
                        <View>
                            <StyledDatePicker
                                label="Date"
                                placeholder="Select date"
                                value={selectedDate}
                                onChange={onDateChange}
                            />
                        </View>
                        <View>
                            <HeaderTableFixedInvoiceWithoutTotal />
                            {defaultExpenses.map((expense, index) => (
                                <Grid
                                    key={`default-${index}`}
                                    className="gap-2 p-2 mx-1 border-b border-gray-200 bg-gray-100"
                                    _extra={{ className: "grid-cols-12" }}
                                >
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-5" }}
                                    >
                                        <Text
                                            size="md"
                                            className="font-medium mb-4"
                                        >
                                            {expense.name}
                                        </Text>
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-4" }}
                                    >
                                        <StyledInput
                                            value={expense.price.toLocaleString()}
                                            onChangeText={(text) =>
                                                onChangeDefaultExpenses(
                                                    expense.name,
                                                    "price",
                                                    Number(text)
                                                )
                                            }
                                        />
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-2" }}
                                    >
                                        <StyledInput
                                            value={String(expense.quantity)}
                                            onChangeText={(text) =>
                                                onChangeDefaultExpenses(
                                                    expense.name,
                                                    "quantity",
                                                    Number(text)
                                                )
                                            }
                                        />
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-1" }}
                                    >
                                        {/* Placeholder for alignment */}
                                    </GridItem>
                                </Grid>
                            ))}
                            {expenses.map((expense, index) => (
                                <Grid
                                    key={`expense-${index}`}
                                    className="gap-2 p-2 mx-1 border-b border-gray-200"
                                    _extra={{ className: "grid-cols-12" }}
                                >
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-5" }}
                                    >
                                        <StyledInput
                                            placeholder="Expense name"
                                            value={expense.name}
                                            onChangeText={(text) =>
                                                onChangeExpenses &&
                                                onChangeExpenses(
                                                    index,
                                                    "name",
                                                    text
                                                )
                                            }
                                        />
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-4" }}
                                    >
                                        <StyledInput
                                            placeholder="Price"
                                            value={expense.price.toLocaleString()}
                                            onChangeText={(text) =>
                                                onChangeExpenses &&
                                                onChangeExpenses(
                                                    index,
                                                    "price",
                                                    Number(text)
                                                )
                                            }
                                        />
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-2" }}
                                    >
                                        <StyledInput
                                            placeholder="Quantity"
                                            value={String(expense.quantity)}
                                            onChangeText={(text) =>
                                                onChangeExpenses &&
                                                onChangeExpenses(
                                                    index,
                                                    "quantity",
                                                    Number(text)
                                                )
                                            }
                                        />
                                    </GridItem>
                                    <GridItem
                                        className="justify-center"
                                        _extra={{ className: "col-span-1" }}
                                    >
                                        <Pressable
                                            onPress={() =>
                                                onRemoveExpense(index)
                                            }
                                        >
                                            <Icon
                                                as={TrashIcon}
                                                className="text-red-500"
                                            />
                                        </Pressable>
                                    </GridItem>
                                </Grid>
                            ))}
                        </View>
                        <StyledButton
                            buttonClassName="my-4"
                            onPress={onAddExpense}
                            buttonText="Add Expense"
                        />
                    </ScrollView>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

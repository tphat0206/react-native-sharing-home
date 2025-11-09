import { DrawerLayout } from "@/components/DrawerLayout";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView } from "react-native";
import StyledInput from "../../components/commons/StyledInput";
import StyledModal from "../../components/commons/StyledModal";
import GroupButtonRoomActive from "../../components/groupButtonRoomActive";
import GroupButtonRoomEmpty from "../../components/groupButtonRoomEmpty";
import DrawerCreateFixedInvoice from "../../components/invoices/drawerCreateFixedInvoice";
import MemberCard from "../../components/memberCard";
import Routes from "../../constants/Routes";
import useHMRoomDetail from "../../hooks/hm-room-detail";

export default function RoomDetailScreen() {
    const router = useRouter();
    const { roomId, roomName } = useLocalSearchParams<{
        roomId: string;
        roomName?: string;
    }>();

    const {
        showModal,
        newPhoneNumber,
        showCreateInvoiceDrawer,
        selectedDate,
        defaultExpenses,
        expenses,
        members,
        isEmpty,

        handleAddRoomMaster,
        handleCancelAddNewRoomMaster,
        handleAddNewRoomMaster,
        handleChangePhoneNumber,
        handleCreateInvoice,
        handleDeleteRoom,
        handleCancelCreateInvoice,
        handleCreateNewInvoice,
        handleChangeSelectedDate,
        handleChangeDefaultExpenses,
        handleAddExpense,
        handleRemoveExpense,
        handleChangeExpense,
    } = useHMRoomDetail();

    const handleViewInvoiceHistory = () => {
        console.log("View invoice history");
        router.push({
            pathname: Routes.HOME_MASTER_INVOICE_HISTORY as any,
            params: {
                roomId: roomId,
                roomName: roomName,
            },
        });
    };

    return (
        <>
            <DrawerLayout
                title={roomName || "Room detail"}
                showNotificationIcon={true}
            >
                <ScrollView className="flex-1 bg-gray-50 px-4 pt-6">
                    {/* Room List */}
                    {members.map((member) => (
                        <MemberCard
                            key={member.id}
                            avatar={member.avatar}
                            memberName={member.name}
                            phoneNumber={member.phoneNumber}
                            role={member.role}
                        />
                    ))}

                    {isEmpty ? (
                        <GroupButtonRoomEmpty
                            onAddRoomMasterPress={handleAddRoomMaster}
                            onDeleteRoomPress={handleDeleteRoom}
                        />
                    ) : (
                        <GroupButtonRoomActive
                            onViewInvoiceHistoryPress={handleViewInvoiceHistory}
                            onCreateInvoicePress={handleCreateInvoice}
                            onDeleteRoomPress={handleDeleteRoom}
                        />
                    )}
                </ScrollView>
            </DrawerLayout>
            <StyledModal
                title="Add room master"
                submitButtonText="Add"
                cancelButtonText="Cancel"
                isOpen={showModal}
                closeOnOverlayClick={false}
                size="md"
                handelSubmit={handleAddNewRoomMaster}
                handelCancel={handleCancelAddNewRoomMaster}
                children={
                    <StyledInput
                        placeholder="Enter phone number"
                        value={newPhoneNumber}
                        onChangeText={handleChangePhoneNumber}
                    />
                }
            />
            <DrawerCreateFixedInvoice
                isOpen={showCreateInvoiceDrawer}
                onCancel={handleCancelCreateInvoice}
                onCreate={handleCreateNewInvoice}
                selectedDate={selectedDate}
                onDateChange={handleChangeSelectedDate}
                defaultExpenses={defaultExpenses}
                onChangeDefaultExpenses={handleChangeDefaultExpenses}
                expenses={expenses}
                onChangeExpenses={handleChangeExpense}
                onAddExpense={handleAddExpense}
                onRemoveExpense={handleRemoveExpense}
            />
        </>
    );
}

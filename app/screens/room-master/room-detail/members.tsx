import StyledButton from "@/app/components/commons/StyledButton";
import StyledInput from "@/app/components/commons/StyledInput";
import StyledModal from "@/app/components/commons/StyledModal";
import MemberCard from "@/app/components/memberCard";
import { ROLE } from "@/app/constants/enum";
import { Member } from "@/app/constants/types";
import { dummy_member_list } from "@/utils/dummy";
import { useState } from "react";
import { View } from "react-native";

export default function MembersTab() {
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [members, setMembers] = useState<Member[]>(dummy_member_list);

    const handlePressAddMember = () => {
        console.log("Add member");
        setShowModal(true);
    };

    const handleChangePhoneNumber = (value: string) => {
        setPhoneNumber(value);
    };

    const handleCancelAddMember = () => {
        setPhoneNumber("");
        setShowModal(false);
    };

    const handleAddNewMember = () => {
        setPhoneNumber("");
        console.log("Add new member");
        setShowModal(false);
    };

    const handleDeleteMember = (index: number) => {
        console.log("Delete member");
        setMembers((prev) => prev.filter((value, i) => i !== index));
    };

    return (
        <View className="items-end">
            <StyledButton
                buttonText="Add member"
                buttonClassName="w-[40%] px-2 mb-4"
                textClassName="font-medium text-sm"
                onPress={handlePressAddMember}
            />
            {members.map((member, index) => (
                <MemberCard
                    key={member.id}
                    avatar={member.avatar}
                    memberName={
                        member.role === ROLE.ROOM_MEMBER
                            ? `${member.name} (Me)`
                            : member.name
                    }
                    phoneNumber={member.phoneNumber}
                    role={member.role}
                    canDelete={member.role !== ROLE.ROOM_MEMBER}
                    onDelete={() => handleDeleteMember(index)}
                />
            ))}
            <StyledModal
                title="Add new member"
                submitButtonText="Add"
                cancelButtonText="Cancel"
                isOpen={showModal}
                closeOnOverlayClick={false}
                size="md"
                handelSubmit={handleAddNewMember}
                handelCancel={handleCancelAddMember}
                children={
                    <StyledInput
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChangeText={handleChangePhoneNumber}
                    />
                }
            />
        </View>
    );
}

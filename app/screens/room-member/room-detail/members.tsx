import MemberCard from "@/app/components/memberCard";
import { Member } from "@/app/constants/types";
import { dummy_member_list } from "@/utils/dummy";
import { useState } from "react";

export default function MembersTab() {
    const [members, setMembers] = useState<Member[]>(dummy_member_list);

    return (
        <>
            {members.map((member) => (
                <MemberCard
                    key={member.id}
                    avatar={member.avatar}
                    memberName={member.name}
                    phoneNumber={member.phoneNumber}
                    role={member.role}
                />
            ))}
        </>
    );
}

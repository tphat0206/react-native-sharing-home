import MemberCard from "@/app/components/memberCard";
import { Member } from "@/app/constants/types";
import { useState } from "react";


export default function MembersTab() {
    const [members, setMembers] = useState<Member[]>([
        {
            id: 1,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "John Doe",
            phoneNumber: "01234567891",
            role: "Room master",
        },
        {
            id: 2,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Jane Doe",
            phoneNumber: "01234567892",
            role: "Member",
        },
        {
            id: 3,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Jim Beam",
            phoneNumber: "01234567893",
            role: "Member",
        },
    ]);

    
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


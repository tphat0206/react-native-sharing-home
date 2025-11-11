import { ROLE } from "@/app/constants/enum";
import { Member } from "@/app/constants/types";

export const MemberFactory = (
    id = 1,
    name = "Member 1",
    role:
        | ROLE.HOME_MASTER
        | ROLE.ROOM_MASTER
        | ROLE.ROOM_MEMBER = ROLE.ROOM_MEMBER,
    phoneNumber = "0123456789",
    avatar = ""
): Member => {
    return {
        id: id,
        avatar: avatar,
        name: name,
        phoneNumber: phoneNumber,
        role: role,
    };
};

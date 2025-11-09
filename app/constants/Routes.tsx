const Routes = {
    ROLE_SELECTION: "screens/role-selection",
    LOGIN: (role?: string) => `screens/login${role ? `?role=${role}` : ""}`,
    SIGNUP: "screens/signup",
    PROFILE: "screens/profile",
    NOTIFICATIONS: "screens/notifications",
    // Home Master Screens
    HOME_MASTER_DASHBOARD: "screens/home-master/dashboard",
    HOME_MASTER_ROOMS: "screens/home-master/rooms",
    HOME_MASTER_ROOM_DETAIL: "screens/home-master/room-detail",
    HOME_MASTER_INVOICE_HISTORY: "screens/home-master/invoice-history",
    // Room Master Screens
    ROOM_MASTER_ROOMS: "screens/room-master/rooms",
    ROOM_MASTER_ROOM_DETAIL: "screens/room-master/room-detail",
    ROOM_MASTER_ROOM_VIEW_SELECTION: "screens/room-master/room-view-selection",
    ROOM_MASTER_MEMBERS: "screens/room-master/members",
    ROOM_MASTER_INVOICES: "screens/room-master/invoices",
    // Room Member Screens
    ROOM_MEMBER_DASHBOARD: "screens/room-member/dashboard",
    ROOM_MEMBER_ROOM_DETAIL_MEMBERS: "screens/room-member/room-detail/members",
    ROOM_MEMBER_ROOM_DETAIL_INVOICE: "screens/room-member/room-detail/current-invoice",
    ROOM_MEMBER_ROOM_DETAIL_INVOICE_HISTORY: "screens/room-member/room-detail/invoice-history",
    ROOM_VIEW_SELECTION: "screens/room-master/room-view-selection",
};

export default Routes;

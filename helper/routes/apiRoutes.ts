const apiRoutes = {
    auth: {
        signup: "/users/Signup",
        getCodeSignup: "/auth/newUser/VerificationCode",
        login: "/auth",
        checkCodeSignup: "/auth/VerificationCode",
        checkCodeLogin: "/auth/login/VerificationCode",
        forgetPass: "/auth/resetPassword",
        me: "/user",
        edit_user: "/user"
    },
    notfication: {
        registerToken: "/Notifications/me/registrationTokens"
    },
    driver: {
        getDriverByCityNumber: "/driver",
        me: "/driver",
        get_userInfo_by_phone: "/drivers/users",
        user_userInfo_by_cardId: "/drivers/users/cards",
        trip: "/trips/driver",
        request_checkout: "/withdrawals",
        history_request_checkout: "/withdrawals/me",
    },
    fare: "/fares",
    user: {
        trip: "/trips/user",
        my_transactions: "/user/transactions",
        me: "/user",
        rate: "/driver",
        my_cards: "/Cards/myCards?skip=0&limit=10",
        deActiveCard: "/Cards/myCards",
        getDetilsByCard: "/cards",
        transferMoney: "/Cards/TransferMoney",
    },
    counter: {
        user_userInfo_by_cardId: "/cards",
        sharge: "/counter/cards/balance",
        get_code: "/counters/users/ActivationCode",
        assign_card_user: "/counters/cards",
        get_balance_by_counter: "/counter/Cards",
        get_user_active_card: "/counters/users",
        deactive_card_user: "/counters/cards",
        me: "/counters/me",
    },
    admin: {
        users: "/admin/users?limit=10",
        drivers: "/admin/drivers?limit=10",
        counters: "/counters?limit=10",
        cards: "/admin/Cards?limit=10",
        withdrawals: "/withdrawals?limit=10",
        transactions: "/admin/transactions?limit=10",
        get_permissionsUsers: "/ac/permissions?resourceName=کاربران&userId=",
        get_permissionsTransactions: "/ac/permissions?resourceName=تراکنش&userId=",
        get_permissionDrivers: "/ac/permissions?resourceName=راننده&userId=",
        get_permissionsCounter: "/ac/permissions?resourceName=باجه&userId=",
        get_permissionsSidebar: "/ac/permissions?resourceName=sidebar&userId=",
        get_permissionCards: "/ac/permissions?resourceName=کارت&userId=",
        get_permissionsRoute: "/ac/permissions?resourceName=مسیر&userId=",
        get_permissionsWithdrawals: "/ac/permissions?resourceName=تسویه&userId=",
        deleteUser: "/admin/users",
        deleteDriver: "/admin/drivers",
        routes: "/routes?limit=10",
        editUser: "/admin/users",
        attribute: {
            add: "/ac/resources",
            delete: "/ac/attributes",
            edit: "/ac/attributes",
        },
        resource: {
            all: "/ac/resources?limit=10",
            add: "/ac/resources",
            delete: "/ac/resources",
            edit: "/ac/resources",
        },
        card: {
            add: "/admin/cards",
            edit: "/admin/cards",
            delete: "/admin/cards"
        },
        route: {
            delete: "/routes",
            add: "/routes",
            edit: "/routes",
        },
        permission: {
            craeteRole: "/ac/roles",
            allUser: "/admin/users?skip=0&limit=10",
            allRole: "/ac/roles?skip=0پپ&limit=10",
            assignRole: "/ac/roles/users",
            craeteAction: "/ac/actions",
            deleteRole: "/ac/roles",
            editRole: "/ac/roles",
            action: "/ac/actions",
            allAttribute: "/ac/attributes",
            allResources: "/ac/resources",
            delete: "/ac/permissions",
            add: "/ac/permissions",
            edit: "/ac/permissions",
        },
    },
};

export default apiRoutes;

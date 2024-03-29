const routes = [
    {
        path: '/auth',
        component: () => import('/src/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                component: () => import('/src/views/auth/Login.vue'),
            },
            {
                path: 'register',
                component: () => import('/src/views/auth/Register.vue'),
            },
            {
                path: 'register2',
                component: () => import('/src/views/auth/Register2.vue'),
            },
            {
                path: 'register3',
                component: () => import('/src/views/auth/Register3.vue'),
            },
            {
                path: 'recover',
                component: () => import('/src/views/auth/Recover.vue'),
            },
            {
                path: 'recover2/:token_id',
                component: () => import('/src/views/auth/Recover2.vue'),
            },
            {
                path: 'confirm_otp',
                component: () => import('/src/views/auth/confirmOTP.vue'),
            },
        ],
    },
    {
        path: '/',
        component: () => import('/src/layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('/src/views/main/mainPage.vue'),
            },
            {
                path: 'listings',
                component: () => import('/src/views/main/Listings.vue'),

            },
            {
                path: 'leaderboard',
                component: () => import('/src/views/main/Leaderboard.vue'),
            },
            {
                path: 'user/listings/:user_id',
                component: () => import('/src/views/main/UserListings.vue'),
            },
            {
                path: 'listings/:id',
                component: () => import('/src/views/main/UserListing.vue'),
            },
            {
                path: 'search/:keyword',
                component: () => import('/src/views/main/SearchResult.vue'),
            },
        ],
    },
    {
        path: '/user',
        component: () => import('/src/layouts/UserLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('/src/views/user/MyPage.vue'),
            },
            {
                path: 'saved-listings',
                component: () => import('/src/views/user/SavedListings.vue'),
            },
            {
                path: 'notifications',
                component: () => import('/src/views/user/Notifications.vue'),
            },
            {
                path: 'my-listings',
                component: () => import('/src/views/user/MyListings.vue'),
            },
            {
                path: 'edit-account',
                component: () => import('/src/views/user/EditAccount.vue'),
            },
            {
                path: 'change-password',
                component: () => import('/src/views/user/ChangePassword.vue'),
            },
        ],
    },
];

export default routes;
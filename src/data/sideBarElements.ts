import { ReactComponent as dashboardIcon } from "../assets/icons/sideBar/dashboard.svg";
import { ReactComponent as chartsIcon } from "../assets/icons/sideBar/charts.svg";
import { ReactComponent as billingIcon } from "../assets/icons/sideBar/billing.svg";
import { ReactComponent as settingsIcon } from "../assets/icons/sideBar/settings.svg";
import { ReactComponent as profileIcon } from "../assets/icons/sideBar/profile.svg";
import { ReactComponent as signInIcon } from "../assets/icons/sideBar/rocket.svg";
import { ReactComponent as signUpIcon } from "../assets/icons/sideBar/rocket.svg";

export const sideBarElements = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Dashboard",
                path: "/dashboard",
                icon: dashboardIcon,
            },
            {
                id: 2,
                title: "Tables",
                path: "/tables",
                icon: chartsIcon,
            },
            {
                id: 3,
                title: "Billing",
                path: "/billing",
                icon: billingIcon,
            },
            {
                id: 4,
                title: "Settings",
                path: "/settings",
                icon: settingsIcon,
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Profile",
                path: "/profile",
                icon: profileIcon,
            },
            {
                id: 2,
                title: "Sign-In",
                path: "/sign-in",
                icon: signInIcon,
            },
            {
                id: 3,
                title: "Sign-Up",
                path: "/sign-up",
                icon: signUpIcon,
            },
        ],
    }
];

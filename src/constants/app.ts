export const APP_CONFIG = {
  COMPANY_NAME: "Sports League",
  COMPANY_LOGO_TEXT: "SL",
  APP_VERSION: "1.0.1",
} as const;

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  MESSAGES: "/messages",
  SETTINGS: "/settings",
  TEAMS: "/teams",
  LEAGUES: "/leagues",
  SCHEDULE: "/schedule",
  LOGIN: "/login",
  REGISTER: "/register",
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "dashboard",
  },
  {
    label: "My Profile",
    href: ROUTES.PROFILE,
    icon: "profile",
  },
  {
    label: "Messages",
    href: ROUTES.MESSAGES,
    icon: "messages",
  },
  {
    label: "Settings",
    href: ROUTES.SETTINGS,
    icon: "settings",
  },
] as const;

export const USER_ROLES = {
  PLAYER: "player",
  CAPTAIN: "captain",
  ADMIN: "admin",
  REFEREE: "referee",
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
} as const;

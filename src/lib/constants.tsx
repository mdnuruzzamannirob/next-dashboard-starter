import {
  BarChart3,
  BedDouble,
  Building2,
  DollarSign,
  FileText,
  FolderOpen,
  LayoutDashboard,
  MessageSquare,
  Settings,
  UserRoundPlus,
  Users,
} from "lucide-react";

export const sidebarLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      href: "/care-homes",
      label: "Care Homes",
      icon: <Building2 size={20} />,
    },
    {
      href: "/rooms-beds",
      label: "Rooms & Beds",
      icon: <BedDouble size={20} />,
    },
    {
      href: "/user-management",
      label: "User Management",
      icon: <Users size={20} />,
    },
    {
      href: "/residents",
      label: "Residents",
      icon: <UserRoundPlus size={20} />,
    },
    {
      href: "/intake-applications",
      label: "Intake Applications",
      icon: <FileText size={20} />,
    },
    {
      href: "/documents",
      label: "Documents",
      icon: <FolderOpen size={20} />,
    },
    {
      href: "/billing-finance",
      label: "Billing & Finance",
      icon: <DollarSign size={20} />,
    },
    {
      href: "/reports",
      label: "Reports",
      icon: <BarChart3 size={20} />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <MessageSquare size={20} />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings size={20} />,
    },
  ];

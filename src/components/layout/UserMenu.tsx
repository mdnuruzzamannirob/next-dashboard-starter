"use client";

import { ChevronDown, LogOut, Settings, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1777335118390-969261251a29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  role: "Administrator",
};

const menuItems = [
  {
    label: "My Profile",
    href: "/user-management",
    icon: UserCircle,
  },
  {
    label: "Account Settings",
    href: "/settings",
    icon: Settings,
  },
];

const logoutItem = {
  label: "Log Out",
  href: "/login",
  icon: LogOut,
};

const UserMenu = () => {
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="group flex cursor-pointer items-center gap-2 rounded-lg"
        >
          <Image
            src={user.avatar}
            alt={user.name}
            width={36}
            height={36}
            className="size-9 shrink-0 rounded-lg object-cover"
          />

          <div className="hidden lg:flex lg:flex-col lg:items-start">
            <p className="text-sm leading-tight font-semibold">{user.name}</p>
            <p className="text-muted-foreground text-xs leading-tight">{user.role}</p>
          </div>

          <ChevronDown className="hidden size-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180 lg:block" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="-mt-1 w-64 overflow-hidden rounded-xl bg-white p-0"
      >
        <div className="p-3">
          <div className="flex items-center gap-3">
            <Image
              src={user.avatar}
              alt={user.name}
              width={48}
              height={48}
              className="size-12 rounded-lg shrink-0 object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <p className="text-muted-foreground truncate text-xs">{user.email}</p>
              <p className="text-primary text-xs font-medium">{user.role}</p>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-100" />

        <div className="space-y-1 p-2">
          {menuItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 [&_svg]:size-4 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-primary/10 hover:text-primary text-muted-foreground"
                }`}
              >
                <Icon />
                {label}
              </Link>
            );
          })}

          <Link
            href={logoutItem.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 [&_svg]:size-4"
          >
            <logoutItem.icon />
            {logoutItem.label}
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenu;

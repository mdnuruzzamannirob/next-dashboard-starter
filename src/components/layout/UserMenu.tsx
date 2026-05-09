"use client";

import { ChevronDown, CreditCard, LogOut, Settings, UserCircle } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserMenu = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1777335118390-969261251a29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Administrator",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-2">
          <Image
            src={user.avatar}
            alt={user.name}
            width={28}
            height={28}
            className="size-9 shrink-0 rounded-lg object-cover"
          />
          <div className="hidden lg:flex lg:flex-col">
            <h3 className="text-sm font-semibold">{user.name}</h3>
            <p className="text-muted-foreground text-xs">{user.role}</p>
          </div>
          <ChevronDown className="hidden size-4 text-gray-500 lg:block" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64 min-w-64 rounded-xl border border-gray-100 bg-white p-2 text-slate-900 shadow-xl ring-gray-200"
      >
        <DropdownMenuLabel className="px-2 py-2">
          <p className="text-sm font-semibold text-slate-900">{user.name}</p>
          <p className="text-xs font-normal text-slate-500">{user.email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="!focus:bg-transparent !focus:text-slate-800 data-highlighted:bg-transparent data-highlighted:text-slate-800">
          <UserCircle />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="!focus:bg-transparent !focus:text-slate-800 data-highlighted:bg-transparent data-highlighted:text-slate-800">
          <Settings />
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuItem className="!focus:bg-transparent !focus:text-slate-800 data-highlighted:bg-transparent data-highlighted:text-slate-800">
          <CreditCard />
          Billing
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          className="data-highlighted:bg-destructive/10 data-highlighted:text-destructive !focus:bg-destructive/10 !focus:text-destructive"
        >
          <LogOut />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

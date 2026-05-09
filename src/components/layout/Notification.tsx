"use client";

import { Bell, Clock3 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      title: "New resident application submitted",
      message: "Room 302 intake form has been completed.",
      time: "2m ago",
    },
    {
      id: 2,
      title: "Payment confirmation received",
      message: "Invoice #INV-2941 was paid successfully.",
      time: "15m ago",
    },
    {
      id: 3,
      title: "Document verification pending",
      message: "Three resident files need your review.",
      time: "1h ago",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-gray-100">
          <Bell size={18} />
          <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-600" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-80 min-w-80 rounded-lg border border-gray-200 bg-white p-2 ring-transparent"
      >
        <DropdownMenuLabel className="flex items-center justify-between px-2 py-1.5">
          <span className="text-foreground text-sm font-semibold">Notifications</span>
          <span className="text-muted-foreground text-xs font-medium">3 new</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {notifications.map((item) => (
          <DropdownMenuItem
            key={item.id}
            className="!focus:bg-transparent !focus:text-slate-800 block rounded-md px-2 py-2 data-highlighted:bg-transparent data-highlighted:text-slate-800"
          >
            <p className="text-foreground text-sm font-medium">{item.title}</p>
            <p className="text-muted-foreground mt-0.5 text-xs">{item.message}</p>
            <p className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
              <Clock3 className="size-3" />
              {item.time}
            </p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem className="!focus:bg-transparent !focus:text-slate-700 text-muted-foreground justify-center py-2 text-sm font-medium data-highlighted:bg-transparent data-highlighted:text-gray-700">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;

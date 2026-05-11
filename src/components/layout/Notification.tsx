"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Bell, Clock3 } from "lucide-react";

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
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="group relative flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-gray-100 transition-colors duration-200 hover:bg-gray-200"
        >
          <Bell size={18} className="text-slate-700" />
          <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-600 shadow-sm" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-96 overflow-hidden rounded-xl -mt-1 bg-white p-0"
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-xl px-4 py-3">
          <h3 className="text-sm font-bold">Notifications</h3>
          <span className="bg-primary/10 text-primary inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-semibold">
            {notifications.length} new
          </span>
        </div>

        <Separator className="m-0 bg-gray-100" />

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          <div className="space-y-0">
            {notifications.map((item, index) => (
              <div key={item.id}>
                <button
                  type="button"
                  className="w-full px-4 py-4 text-left transition-colors duration-150 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-muted-foreground mt-2 text-xs">{item.message}</p>
                  <p className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                    <Clock3 className="size-3" />
                    {item.time}
                  </p>
                </button>
                {index < notifications.length - 1 && <Separator className="m-0 bg-gray-100" />}
              </div>
            ))}
          </div>
        </div>

        <Separator className="m-0 bg-gray-100" />

        {/* Footer */}
        <button
          type="button"
          className="text-primary w-full px-4 py-3 text-center text-xs font-semibold transition-colors duration-150 hover:bg-primary/5 focus:bg-primary/5 focus:outline-none"
        >
          View all notifications
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;

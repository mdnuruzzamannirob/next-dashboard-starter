import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="relative flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-gray-100">
      <Bell size={18} />
      <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-red-600" />
    </div>
  );
};

export default Notification;

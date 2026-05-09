import { MobileSidebar } from "./MobileSidebar";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b bg-white px-4 backdrop-blur-md md:px-6">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        <h3 className="font-semibold">Dashboard Overview</h3>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;

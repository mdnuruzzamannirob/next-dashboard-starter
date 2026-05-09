import CurrentPageLabel from "./CurrentPageLabel";
import { MobileSidebar } from "./MobileSidebar";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b bg-white px-4 backdrop-blur-md lg:px-6">
      <div className="flex items-center gap-3 min-w-0">
        <div className="lg:hidden">
          <MobileSidebar />
        </div>

        <CurrentPageLabel />
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;

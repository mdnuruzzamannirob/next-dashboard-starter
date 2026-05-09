import SidebarContent from "./SidebarContent";

const DesktopSidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 flex-col border-r bg-white md:flex">
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;

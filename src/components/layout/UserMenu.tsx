import Image from "next/image";

const UserMenu = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1777335118390-969261251a29?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Administrator",
  };

  return (
    <div className="flex cursor-pointer items-center gap-2">
      <Image
        src={user.avatar}
        alt={user.name}
        width={28}
        height={28}
        className="size-9 rounded-lg object-cover"
      />
      <div className="hidden md:flex md:flex-col">
        <h3 className="text-sm font-semibold">{user.name}</h3>
        <p className="text-muted-foreground text-xs">{user.role}</p>
      </div>
    </div>
  );
};

export default UserMenu;

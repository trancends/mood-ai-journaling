import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen ">
      <aside className="absolute left-0 top-0 h-full w-[200px] border-r border-black/30">
        Mood
      </aside>
      <div className="ml-[200px] h-full ">
        <header className="border-back/10 h-[60px] border-b">
          <div className="flex h-full w-full items-center justify-end px-6">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

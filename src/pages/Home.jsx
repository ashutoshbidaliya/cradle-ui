import { TopNavigation } from "../components/TopNavigation";
import { Sidebar } from "../components/SideBar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        <Sidebar inShowcase={false} />
        <div className="flex-1 min-w-0">
          <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            <TopNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

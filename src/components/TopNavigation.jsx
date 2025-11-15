import { Bell, Menu, Search, Settings } from "lucide-react";

export const TopNavigation = ({ inShowcase = false }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {!inShowcase && (
            <button
              className="lg:hidden p-2 hover:bg-greay-100 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button>
            <Settings className="w-5 h-5 text-greay-600"></Settings>
          </button>

          <div className="hidden md:flex items-center gap-3 pl-3 border-l">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-semibold text-sm">
              JD
            </div>
            <div className="text-sm font-semibold">John Doe</div>
            <div className="text-xs text-gray-500">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
};

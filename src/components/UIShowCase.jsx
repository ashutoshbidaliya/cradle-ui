import React, { useState } from "react";
import {
  User,
  FileText,
  Briefcase,
  MessageSquare,
  GraduationCap,
  X,
  TrendingUp,
} from "lucide-react";

export const UIShowcase = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("template");
  const [activeSection, setActiveSection] = useState("dashboard");

  const Sidebar = ({ inShowcase = false }) => {
    const getSidebarClasses = () => {
      let classes =
        "w-64 bg-gradient-to-b from-indigo-900 to-indigo-950 text-white overflow-y-auto rounded-2xl";

      if (inShowcase) {
        classes += " relative";
      } else {
        classes +=
          " fixed lg:sticky top-0 left-0 h-screen transform transition-transform duration-300 ease-in-out z-50";
        classes += sidebarOpen
          ? " translate-x-0"
          : " -translate-x-full lg:translate-x-0";
      }

      return classes;
    };

    return (
      <>
        {sidebarOpen && !inShowcase && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className={getSidebarClasses()}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">CREDGE</span>
              </div>
              {!inShowcase && (
                <button
                  className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <nav className="space-y-2">
              {[
                {
                  icon: TrendingUp,
                  label: "Dashboard",
                  id: "dashboard",
                  badge: null,
                },
                { icon: User, label: "Profile", id: "profile", badge: null },
                {
                  icon: FileText,
                  label: "Documents",
                  id: "documents",
                  badge: "12",
                },
                {
                  icon: Briefcase,
                  label: "Projects",
                  id: "projects",
                  badge: "3",
                },
                {
                  icon: MessageSquare,
                  label: "Discussions",
                  id: "discussions",
                  badge: null,
                },
                {
                  icon: GraduationCap,
                  label: "Universities",
                  id: "universities",
                  badge: "8",
                },
              ].map((item) => {
                const isActive = !inShowcase && activeSection === item.id;
                const buttonClass =
                  "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group " +
                  (isActive ? "bg-white/20" : "hover:bg-white/10");

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (!inShowcase) {
                        setActiveSection(item.id);
                        setSidebarOpen(false);
                      }
                    }}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </>
    );
  };
};

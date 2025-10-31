import { useLocation } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import { ProfileCard } from "../components/ProfileCard";
import { ProjectCard } from "../components/ProjectCard";

export default function DashBoard() {
  const location = useLocation();
  const { id, firstName, email } = location.state || {};
  return (
    <div>
      <div>
        <ProfileCard></ProfileCard>
      </div>
      <div>
        <ProjectCard></ProjectCard>
      </div>

      <div className="flex flex-row justify-between h-12 bg-gray-100 border-b-1 border-b-gray-200 shadow-md">
        <div className="text-2xl font-medium text-blue-900 p-1 ">Cradle</div>
        <ProfileBar></ProfileBar>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 w-96">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p className="text-gray-700 mb-4">
            This is your dashboard where you can manage your account.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

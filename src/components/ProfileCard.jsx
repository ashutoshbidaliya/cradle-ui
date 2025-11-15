import { Edit } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="h-24 sm:h-32 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
      <div className="px-4 sm:px-6 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-12 sm:-mt-16 mb-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-indigo-700 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
            JD
          </div>
          <button className="w-full  mb-2 px-4 py-2 text-white rounded-xl hover:bg-indigo-900 transition-colors flex items-center justify-center gap-2 bg-indigo-700">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
          John Doe
        </h3>
        <p className="text-sm sm:text-base text-gray-500 mb-4">
          High School Senior | Aspiring Computer Scientist
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-gray-200">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-indigo-400">
              4.0
            </div>
            <div className="text-xs sm:text-sm text-gray-500">GPA</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-indigo-600">
              5
            </div>
            <div className="text-xs sm:text-sm text-gray-500">Projects</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-indigo-600">
              12
            </div>
            <div className="text-xs sm:text-sm text-gray-500">Documents</div>
          </div>
        </div>
      </div>
    </div>
  );
};

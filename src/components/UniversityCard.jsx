import { Star } from "lucide-react";

export const UniversityCard = ({
  name = "Stanford University",
  program = "Computer Science",
  location = "California, USA",
  acceptance = "4.3%",
  deadline = "Jan 5",
  color = "from-blue-600 to-indigo-700",
}) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div className={"h-32 sm:h-40 bg-gradient-to-br " + color + " relative"}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-4 right-4">
        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
          <Star className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">
        {name}
      </h3>
      <p className="text-sm text-gray-600 mb-4 truncate">
        {program} • {location}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Acceptance Rate</div>
          <div className="text-base sm:text-lg font-bold text-gray-900">
            {acceptance}
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-1">Deadline</div>
          <div className="text-base sm:text-lg font-bold text-gray-900">
            {deadline}
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium text-sm">
          Apply Now
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm">
          Details
        </button>
      </div>
    </div>
  </div>
);

import { Briefcase, Clock, MoreVertical } from "lucide-react";

export const ProjectCard = ({
  title = "AI Research Initiative",
  description = "Developing an AI model to predict student performance based on engagement metrics.",
  progress = 65,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border-gray-100 ">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 ">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              Machine Learning Project
            </p>
          </div>
        </div>
        <button className="p-2" hover:bg-gray-100 rounded-lg flex-shrink-0>
          <MoreVertical className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <p className="text-xs text-gray-600 sm:text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
          AI/ML
        </span>
        <span className="px-2 sm:px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full">
          Research
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm sm:text-sm mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">{progress}%</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: progress + "%" }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-600"
            ></div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <Clock className="w-4 h-4"></Clock>
          <span className="hidden sm:inline">Due in</span>5 days
        </div>
      </div>
    </div>
  );
};

import { Download, Eye, FileText } from "lucide-react";

export const DocumentCard = ({
  name = "Transcript_2024.pdf",
  category = "Academic Records",
  size = "2.4 MB",
  color = "from-red-400 to-orange-500",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-200">
      <div className="flex items-start gap-3 mb-3">
        <div
          className={
            "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br " +
            color +
            " rounded-lg flex items-center justify-center flex-shrink-0"
          }
        >
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-900 text-sm truncate">
            {name}
          </h4>
          <p className="text-xs text-gray-500 truncate">{category}</p>
          <p className="text-xs text-gray-400 mt-1">{size}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-1">
          <Eye className="w-4 h-4 text-gray-600" />
          <span className="text-xs font-medium text-gray-600 hidden sm:inline">
            View
          </span>
        </button>
        <button className="flex-1 p-2 hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center gap-1">
          <Download className="w-4 h-4 text-gray-600" />
          <span className="text-xs font-medium text-gray-600 hidden sm:inline">
            Download
          </span>
        </button>
      </div>
    </div>
  );
};

import { Upload } from "lucide-react";

export const FormComponents = () => (
  <div className="space-y-4 sm:space-y-6">
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
        Full Name
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
      />
    </div>

    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
        Upload Document
      </label>
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 sm:p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer bg-gray-50">
        <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto mb-2 sm:mb-3" />
        <p className="text-xs sm:text-sm font-medium text-gray-700">
          Drop files here or click to upload
        </p>
        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
      </div>
    </div>

    <div>
      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
        Project Description
      </label>
      <textarea
        rows="4"
        placeholder="Describe your project..."
        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
      />
    </div>
  </div>
);

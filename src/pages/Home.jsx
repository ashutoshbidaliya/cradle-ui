export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4">Welcome to Cradle</h2>
        <p className="text-gray-700 mb-4">
          Your gateway to academic excellence. Please log in to continue.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

const ProfileBar = () => {
  return (
    <div className="flex items-end p-1 rounded-2xl bg-grey-100 ">
      <div className="flex flex-row justify-around m-1 ">
        <p className=" m-2 font-medium">Hi User!</p>
        <div className="bg-blue-600 text-white rounded-full p-2">AK</div>
        <div className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;

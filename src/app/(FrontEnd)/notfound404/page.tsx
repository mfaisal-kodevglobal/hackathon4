export default function Error404() {
  return (
    <>
      <div className="font-[sans-serif] h-screen flex items-center justify-center bg-gray-50">
        <div className="lg:w-[70%] w-full bg-white p-8 flex flex-col items-center text-center space-y-6">
          {/* Flex container for image */}
          <div className="flex justify-center w-full">
            <img
              src="img/404notfound.png"
              alt="404 Not Found!"
              className="object-contain max-w-full h-auto"
            />
          </div>

          {/* Message */}
          <p className="text-sm text-[#152970] font-bold">
            Oops! The page you requested was not found!
          </p>

          {/* Button */}
          <button className="px-6 py-2 border rounded text-white bg-[#FB2E86] hover:bg-[#FB2E86]/90">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
}

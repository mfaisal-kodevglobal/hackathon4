export default function Login() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        {/* Top Section */}
        <div className="bg-[#F1F0FF] py-8">
          <div className="container ml-[300px]">
            <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              My Account
            </h2>
            <p className="text-gray-600">
              Home Page. <span className="text-[#FB2E86]">My Account</span>
            </p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="flex items-center justify-center flex-grow bg-gray-50">
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-8 rounded-md shadow-md text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Login</h3>
            <p className="text-sm text-gray-600">
              Please login using account details below.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-[#FB2E86]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-[#FB2E86]"
            />
            <button className="w-full py-2 bg-[#FB2E86] text-white rounded-md hover:bg-[#FB2E86]/90">
              Sign In
            </button>
            <p className="text-sm text-gray-600">
              Donot have an account?{" "}
              <a href="#" className="text-[#FB2E86] hover:underline">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

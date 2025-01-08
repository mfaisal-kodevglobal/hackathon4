export default function Checkout() {
  return (
    <>
      <div className="container mx-auto px-8">
        <div className="mt-10 font-[sans-serif] bg-white">
        <div className="mb-6 text-[#1D3178]">
            <h3 className="text-lg font-bold">Hekto Demo</h3>
            <p className="text-sm ">Cart / Information / Shipping / Payment</p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2">
            
            {/* Left Section - Contact and Shipping Details */}
            <div className="h-max rounded-md p-8 bg-[#F8F8FD]">
              {/* Contact Information */}
              <div className="mb-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#1D3178]">
                    Contact Information
                  </h2>
                  <a href="/login" className="text-blue-600 hover:underline text-sm">
                    Already have an account? Login
                  </a>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Email or Mobile Phone Number"
                    className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                    aria-label="Email or Mobile Phone Number"
                  />
                  <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      className="text-blue-600"
                      id="newsletter"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-gray-600 ml-2 text-sm"
                    >
                      Keep me up to date on news and exclusive offers.
                    </label>
                  </div>
                </div>
              </div>

              {/* Shipping Details */}
              <div>
                <h2 className="text-2xl font-bold text-[#1D3178]">
                  Shipping Details
                </h2>
                <form className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="First Name"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="Last Name"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Address"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="Address"
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Apartment, Floor, etc. (optional)"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="Apartment details"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <input
                      type="text"
                      placeholder="City"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="City"
                    />
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border-b-2 border-gray-400 px-3 py-2 bg-[#F8F8FD] focus:bg-transparent text-gray-800 w-full text-sm focus:outline-none"
                      aria-label="Postal Code"
                    />
                  </div>
                  <div className="mt-8 flex justify-between">
                  <a href="/shopgrid"><button
                      type="button"
                      className="px-4 py-2 border rounded text-white bg-[#FB2E86] hover:bg-[#FB2E86]/90"
                    >
                      Continue Shopping
                    </button></a>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Section - Order Summary */}
            <div className="text-white lg:min-w-[470px] sm:min-w-[300px]">
              <div className="px-4">
               
                <div className="space-y-4">
                  {/* Product Items */}
                  {[1, 2, 3, 4, 5].map((product) => (
                    <div
                      key={product}
                      className="flex items-start gap-4  p-4 border-b-2"
                    >
                      <a href="/productdetail">
                      <img
                        src={`img/checkout${product}.png`}
                        alt={`Product ${product}`}
                        className="w-16 h-16 object-contain bg-[#F4F4FC]"
                      /></a>
                      <div className="flex-grow">
                        <h3 className="text-black font-semibold">
                        <a href="/productdetail">Ut diam consequat</a>
                        </h3>
                        <div className="flex flex-wrap justify-between items-center">
                          <div>
                            <p className="text-gray-600 text-sm">
                              Color: Brown
                            </p>
                            <p className="text-gray-600 text-sm">Size: XL</p>
                          </div>
                          <p className="text-gray-600 text-sm">$32.00</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Pricing Breakdown */}
                  <div className="mb-6">
                   
                   
                    <div className="bg-[#F4F4FC] mb-6 p-4 rounded-md">
                      <ul className="divide-y text-gray-600 bg-[#F4F4FC]">
                        <li className="flex justify-between py-3 text-[#1D3178]">
                          <span className="font-bold text-[#15245E]">Subtotal</span>
                          <span className="font-bold text-[#15245E]">
                            $160.00
                          </span>
                        </li>
                        <li className="flex justify-between py-3 font-bold">
                          <span className="font-bold text-[#15245E]">Total</span>
                          <span>$160.00</span>
                        </li>
                      </ul>
                      <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      className="text-[#19D16F] bg-[#19D16F]"
                      id="newsletter"
                    />
                    <label
                      htmlFor="newsletter"
                      className="text-gray-600 ml-2 text-sm"
                    >
                      Shipping and text calculated at checkout.
                    </label>
                  </div>
                  <a href="/ordercompleted">
                      <button className="w-full mt-6 py-2 bg-[#19D16F] text-white font-semibold rounded hover:bg-[#19D16F]">
                        Proceed to Checkout
                      </button></a>
                    </div>
                  </div>

                  

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

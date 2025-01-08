export default function ProductDetail() {
    return (
      <>
        <div className="font-sans">
          <div className="p-4 lg:max-w-7xl max-w-lg mx-auto">
            {/* Flex container for left and right sidebars in one row */}
            <div className="flex flex-col lg:flex-row gap-6 shadow-lg rounded-lg p-6 bg-white">
              {/* Left Sidebar - Small Images with responsive widths */}
              <div className="w-[80px] sm:w-[100px] lg:w-[80px] flex gap-2 flex-wrap sm:flex-col h-[500px]">
                <img
                  src="https://readymadeui.com/images/product1.webp"
                  alt="Product1"
                  className="w-[70px] h-[70px] cursor-pointer rounded-md outline outline-2 outline-gray-200 hover:outline-blue-500 mb-2"
                />
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product2"
                  className="w-[70px] h-[70px] cursor-pointer rounded-md outline outline-2 outline-gray-200 hover:outline-blue-500 mb-2"
                />
                <img
                  src="https://readymadeui.com/images/product7.webp"
                  alt="Product3"
                  className="w-[70px] h-[70px] cursor-pointer rounded-md outline outline-2 outline-gray-200 hover:outline-blue-500 mb-2"
                />
                <img
                  src="https://readymadeui.com/images/product3.webp"
                  alt="Product4"
                  className="w-[70px] h-[70px] cursor-pointer rounded-md outline outline-2 outline-gray-200 hover:outline-blue-500"
                />
              </div>
  
              {/* Right Sidebar - Flex for Image and Description */}
              <div className="flex-1 flex flex-col lg:flex-row h-[500px]">
                {/* Product Image - Set to responsive width and height */}
                <div className="w-full lg:w-[375px] h-full p-4 flex-shrink-0">
                  <img
                    src="https://readymadeui.com/images/product2.webp"
                    alt="Product"
                    className="w-full object-cover rounded-md"
                  />
                </div>
  
                {/* Product Details - Description beside the image */}
                <div className="flex-1 pl-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Main Title (Product Name) */}
                    <h2 className="text-2xl font-bold text-[#151875]">Adjective Attire | T-shirt</h2>
                    <div className="flex space-x-2 mt-4">
                      {/* Rating stars */}
                      {[...Array(4)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 fill-[#FFC416]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                      ))}
                      <svg
                        className="w-5 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <span className="text-[#151875]">(22)</span>
                    </div>
                    {/* Pricing Information */}
                    <div className="text-[#151875] flex flex-wrap gap-4 mt-4">
                      <p className="text-xl font-bold">$32,000</p>
                      <p className="text-xl text-[#FB2E86]"><s>$32,000</s></p>
                    </div>
  
                    {/* Color selection */}
                    <div className="mt-2">
                      <h3 className="text-xl font-bold text-[#151875]">Color</h3>
                      {/* Add color selection options here */}
                    </div>
  
                    {/* Product Description */}
                    <div className="mt-2">
                      <p className="text-gray-400">
                        Lorem ispm Lorem ispm Lorem ispm Lorem ispm Lorem ispm Lorem
                        ispm Lorem ispm Lorem ispm Lorem ispm Lorem ispm Lorem ispm
                        Lorem ispm Lorem ispm Lorem ispm Lorem ispm Lorem ispm Lorem
                      </p>
                    </div>
  
                    {/* Add to Cart Button and Heart Icon */}
                    <div className="flex items-center space-x-2 mt-8">
                      <button
                        type="button"
                        className="w-full sm:w-auto px-6 py-3 text-[#151875] text-sm font-semibold rounded-md border border-[#151875]"
                      >
                        Add to Cart
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                    </div>
                    <div className="text-[#151875] flex flex-wrap gap-4 mt-4">
                      <p className="text-xl font-bold">Categories:</p>
                    </div>
                    <div className="text-[#151875] flex flex-wrap gap-4 mt-4">
                      <p className="text-xl font-bold">Tags:</p>
                    </div>
                    <div className="text-[#151875] flex flex-wrap gap-4 mt-4">
                      <p className="text-xl font-bold">Share:</p>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
  
          {/* Tabs Section */}
          <div className="bg-[#F1F0FF] py-8">
            <div className="container mx-auto px-4 flex justify-center">
              <div
                className="w-full sm:w-[90%] lg:w-1/2 rounded-md overflow-hidden shadow-sm"
                style={{
                  minHeight: "370px", // Ensure the image container has a minimum height
                }}
              >
                {/* Tabs Navigation */}
                <ul className="flex justify-between items-center space-x-6 border-b pb-4">
                  <li className="text-xl font-semibold cursor-pointer text-[#151875] transition-colors">Description</li>
                  <li className="text-xl font-semibold cursor-pointer text-[#151875]  transition-colors">Additional Info</li>
                  <li className="text-xl font-semibold cursor-pointer text-[#151875]  transition-colors">Reviews</li>
                  <li className="text-xl font-semibold cursor-pointer text-[#151875]  transition-colors">Video</li>
                </ul>
  
                {/* Main Title with #151875 color */}
                <h3 className="mt-6 text-2xl font-bold" style={{ color: "#151875" }}>
                  Varius tempor.
                </h3>
                <div className="mt-4">
                  <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem </p>
                  <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem </p>
                  {/* Add more content */}
                  
                </div>
                <h3 className="mt-6 text-2xl font-bold" style={{ color: "#151875" }}>
                  More Details.
                </h3>
                <div className="mt-4">
                  <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem </p>
                  <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem </p>
                  {/* Add more content */}
                  
                </div>
              </div>
            </div>
          </div>
  
    {/* Related Products Section */}
    <div className="p-4 lg:max-w-7xl max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-[#151875]">Related Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="img/products/rp1.png" alt="Product 1" className="w-full h-40 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">Product Name 1</h4>
                <p className="text-sm text-gray-500">Short description</p>
                <p className="mt-2 font-bold text-[#151875]">$18,000</p>
              </div>
              {/* Product 2 */}
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="img/products/rp2.png" alt="Product 2" className="w-full h-40 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">Product Name 2</h4>
                <p className="text-sm text-gray-500">Short description</p>
                <p className="mt-2 font-bold text-[#151875]">$24,000</p>
              </div>
              {/* Product 3 */}
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="img/products/rp3.png" alt="Product 3" className="w-full h-40 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">Product Name 3</h4>
                <p className="text-sm text-gray-500">Short description</p>
                <p className="mt-2 font-bold text-[#151875]">$22,000</p>
              </div>
              {/* Product 4 */}
              <div className="bg-white p-4 rounded-md shadow-md">
                <img src="img/products/rp4.png" alt="Product 4" className="w-full h-40 object-cover rounded" />
                <h4 className="text-lg font-semibold mt-2">Product Name 4</h4>
                <p className="text-sm text-gray-500">Short description</p>
                <p className="mt-2 font-bold text-[#151875]">$20,000</p>
              </div>
            </div>
          </div>

        </div>
      </>
    );
  }
  
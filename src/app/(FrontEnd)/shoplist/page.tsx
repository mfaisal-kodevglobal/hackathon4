export default function ShopList() {
  return (
    <>
      <div>
        <div className="bg-[#F1F0FF] py-8">
          <div className="container">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md overflow-hidden shadow-sm flex justify-end items-center">
              <h2 className="text-[#101750] text-right text-xl pl-50 sm:text-2xl md:text-3xl lg:text-4xl font-semibold pr-4">
                Shop List
              </h2>
            </div>
          </div>
        </div>

        

        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">

 {/* Title and Info Section */}
 <div className="flex items-center justify-between mt-4 flex-col sm:flex-row">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-base text-[#151875] font-semibold">
                  Ecommerce Accessories and Fashion Items
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  About 9,620 results in (0.6325 seconds)
                </p>
              </div>

              {/* Filter Section */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 text-sm text-[#151875] w-full sm:w-auto mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                  <label htmlFor="perPage" className="whitespace-nowrap">Per Page</label>
                  <input type="number" id="perPage" className="border p-1 rounded-md w-16" />
                </div>
                <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                  <label htmlFor="sortBy" className="whitespace-nowrap">Sort By</label>
                  <select id="sortBy" className="border p-1 rounded-md text-sm">
                    <option value="100">100</option>
                    <option value="50">50</option>
                    <option value="25">25</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <label htmlFor="view" className="whitespace-nowrap">View</label>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5 text-[#151875] cursor-pointer"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v8h10V5H5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5 h-5 text-[#151875] cursor-pointer"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm-6 6h4v4H4v-4zm6 0h4v4h-4v-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input type="number" id="view" className="border p-1 rounded-md w-16" />
                </div>
              </div>
            </div>


            <div className="mt-4">
              {[
                {
                  img: "img/products/slp1.png",
                  title: "Cantilever Chair",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$120",
                },
                {
                  img: "img/products/slp2.png",
                  title: "Modern Sofa",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$960",
                },
                {
                  img: "img/products/slp3.png",
                  title: "Elegant Table",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$370",
                },
                {
                  img: "img/products/slp4.png",
                  title: "Wooden Chair",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$375",
                },
                {
                  img: "img/products/slp5.png",
                  title: "Stylish Bed",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$120",
                },
                {
                  img: "img/products/slp6.png",
                  title: "Office Desk",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$960",
                },
                {
                  img: "img/products/sgddp7.png",
                  title: "Lounge Chair",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$370",
                },
                {
                  img: "img/products/sgddp8.png",
                  title: "Coffee Table",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$375",
                },
                {
                  img: "img/products/sgddp9.png",
                  title: "Book Shelf",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$120",
                },
                {
                  img: "img/products/sgddp10.png",
                  title: "Dining Chair",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$960",
                },
                {
                  img: "img/products/sgddp11.png",
                  title: "Study Table",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$370",
                },
                {
                  img: "img/products/sgddp12.png",
                  title: "Accent Chair",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  price: "$375",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-md shadow-sm p-4 mb-4 hover:shadow-lg transition-all"
                >
                  {/* Left Side: Image */}
                  <div className="w-48 h-48 flex justify-center items-center">
                  <a href="/productdetail">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="object-contain w-full h-full rounded-md"
                    /></a>
                  </div>

                  {/* Right Side: Details */}
                  <div className="ml-6 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-[#FB2E86]">
                    <a href="/productdetail">{product.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {product.description}
                    </p>
                    <h4 className="text-xl text-[#151875] font-bold mt-2">
                      {product.price}
                    </h4>
                    {/* Action Icons */}
                    <div className="flex space-x-4 mt-3 text-[#151875]">
                      {/* Cart Icon */}
                      <button className="p-2 hover:bg-gray-100 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M3 3h2l1.68 10.39a2 2 0 002 1.61h9.64a2 2 0 002-1.61L21 6H7M16 16a2 2 0 11-4 0m4 0a2 2 0 11-4 0" />
                        </svg>
                      </button>
                      {/* Heart Icon */}
                      <button className="p-2 hover:bg-gray-100 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M20.83 4.17a6 6 0 00-8.49 0l-1.05 1.05-1.05-1.05a6 6 0 00-8.49 8.49l1.05 1.05 8.49 8.49 8.49-8.49 1.05-1.05a6 6 0 000-8.49z" />
                        </svg>
                      </button>
                      {/* Search Icon */}
                      <button className="p-2 hover:bg-gray-100 transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M11 4a7 7 0 015.09 11.86l4 4a1 1 0 11-1.41 1.41l-4-4A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

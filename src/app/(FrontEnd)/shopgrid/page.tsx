export default function ShopGrid() {
  return (
    <>
      <div>
        <div className="bg-[#F1F0FF] py-8">
          <div className="container ">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md overflow-hidden shadow-sm flex justify-end items-center">
              <h2 className="text-[#101750] text-right text-xl pl-50 sm:text-2xl md:text-3xl lg:text-4xl font-semibold pr-4">
                Shop Grid Default
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




            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  img: "img/products/sgddp1.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$120",
                  discountPrice: null,
                },
                {
                  img: "img/products/sgddp2.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$960",
                  discountPrice: "$1160",
                },
                {
                  img: "img/products/sgddp3.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$370",
                  discountPrice: "$400",
                },
                {
                  img: "img/products/sgddp4.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$375",
                  discountPrice: null,
                },
                {
                  img: "img/products/sgddp5.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$120",
                  discountPrice: null,
                },
                {
                  img: "img/products/sgddp6.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$960",
                  discountPrice: "$1160",
                },
                {
                  img: "img/products/sgddp7.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$370",
                  discountPrice: "$400",
                },
                {
                  img: "img/products/sgddp8.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$375",
                  discountPrice: null,
                },
                {
                  img: "img/products/sgddp9.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$120",
                  discountPrice: null,
                },
                {
                  img: "img/products/sgddp10.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$960",
                  discountPrice: "$1160",
                },
                {
                  img: "img/products/sgddp11.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$370",
                  discountPrice: "$400",
                },
                {
                  img: "img/products/sgddp12.png",
                  title: "Cantilever chair",
                  colorCode: "-",
                  productCode: "- - - ",
                  price: "$375",
                  discountPrice: null,
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="w-full h-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-center items-center text-center p-4"
                >
                  <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                  <a href="/productdetail">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="h-32 w-auto object-contain"
                    /></a>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-base text-[#FB2E86]"><a href="/productdetail">{product.title}</a></h3>
                    <p className="text-sm text-gray-500">{product.colorCode}</p>
                    <p className="text-sm text-[#151875]">{product.productCode}</p>
                    <h4 className="text-xl text-[#151875] font-bold mt-1">
                      {product.price}
                      {product.discountPrice && (
                        <span className="text-sm text-gray-500 ml-2">
                          <del>{product.discountPrice}</del>
                        </span>
                      )}
                    </h4>
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

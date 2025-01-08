import { clsx } from "clsx";

export default function LatestProducts() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="josefin text-4xl font-extrabold text-[#151875] text-center mb-3">
        Leatest Products
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-10 mb-5">
              <span className="text-[#FB2E86]">New Arival</span>
              <span className="text-[#151875]">Best Seller</span>
              <span className="text-[#151875]">Featured</span>
              <span className="text-[#151875]">Special Offer</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         
          {[
            {
              img: "img/products/lp1.png",
              title: "Cantilever Chair",
              colorCode: "Color: Gray",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp2.png",
              title: "Cantilever Chair",
              colorCode: "Color: Black",
              productCode: "Code: Y523202",
              price: "$26",
              discountPrice: "$36",
            },
            {
              img: "img/products/lp3.png",
              title: "Cantilever Chair",
              colorCode: "Color: Blue",
              productCode: "Code: Y523203",
              price: "$26",
              discountPrice: "$30",
            },
            {
              img: "img/products/lp4.png",
              title: "Cantilever Chair",
              colorCode: "Color: White",
              productCode: "Code: Y523204",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp5.png",
              title: "Cantilever Chair",
              colorCode: "Color: Red",
              productCode: "Code: Y523205",
              price: "$26",
              discountPrice: null,
            },
            {
              img: "img/products/lp6.png",
              title: "Cantilever Chair",
              colorCode: "Color: Green",
              productCode: "Code: Y523206",
              price: "$26",
              discountPrice: null,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white hover:shadow-lg transition-all rounded-md flex flex-col justify-between text-center p-2"

            >
              <div className={clsx(" flex justify-center items-center w-full h-48 rounded-md", { "bg-gray-100": index == 0 }, { "bg-[#FFFFFF]": index == 1 }, { "bg-gray-100": index == 2 }, { "bg-gray-100": index == 3 }, { "bg-gray-100": index == 4 }, { "bg-gray-100": index == 5 })}>
                <a href="/productdetail">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-32 w-full object-contain"
                  />
                </a>
              </div>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-base text-[#151875] ">
                  <a href="/productdetail">
                    {product.title}
                  </a>
                </h3>
                <div className="flex flex-wrap space-x-2">
                  <h4 className="text-lg text-[#151875] ">
                    {product.price}
                  </h4>
                  <h4 className="text-lg text-[#FB2E86] line-through text-[#151875]">
                    $65
                  </h4>
                </div>
                
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

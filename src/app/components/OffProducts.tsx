import clsx from 'clsx';

export default function OffProducts() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              img: "img/op1.png",
              title: "23% Off on all Products",
              more: "Shop Now",
            },
            {
              img: "img/op2.png",
              title: "23% Off on all Products",
              more: "View Collection",
            },
            
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col items-center p-6 text-center"
            >
              {/* Product Image */}
              <div className="p-5 bg-[#EEEFFB]">
                {/* Product Details */}
                <div className="w-full">
                  <h3 className="w-full text-base text-[#151875] text-start font-bold mb-2">
                    {product.title}
                  </h3>
                </div>

                <div className="h-48 rounded-md w-full ">
                  <h4 className="text-sm float-start  text-[#FB2E86] text-start font-semibold w-full">
                    {product.more}
                  </h4>
                  <img
                    src={product.img}
                    alt={product.title}
                    className={clsx("h-full float-end items-end", { "w-[50%]": index === 0 }, { "w-[100%]": index === 1 })}
                  />
                  {/* "h-full w-[50%] float-end items-end" */}
                </div>
              </div>
            </div>
          ))}
          <div  className="w-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col items-center p-6 text-center">
          {/* Vertical list of Products */}
          <div className="h-auto rounded-md">
            <div className="space-y-4"> {/* Adds vertical spacing between each item */}
              {/* Product 1 */}
              <div className="flex items-center justify-start gap-4">
                <img
                  src="img/op1.png"
                  alt=""
                  className="bg-gray-100 h-20 w-auto"
                />
                <h4 className="text-sm text-[#151875] font-semibold">
                  Exclusive Seat Chair
                </h4>
              </div>

              {/* Product 2 */}
              <div className="flex items-center justify-start gap-4">
                <img
                  src="img/op1.png"
                  alt=""
                  className="bg-gray-100 h-20 w-auto"
                />
                <h4 className="text-sm text-[#151875] font-semibold">
                  Exclusive Seat Chair
                </h4>
              </div>

              {/* Product 3 */}
              <div className="flex items-center justify-start gap-4">
                <img
                  src="img/op1.png"
                  alt=""
                  className="bg-gray-100 h-20 w-auto"
                />
                <h4 className="text-sm text-[#151875] font-semibold">
                  Exclusive Seat Chair
                </h4>
              </div>
            </div>
          </div>

            </div>
        </div>
      </div>
    </>
  );
}

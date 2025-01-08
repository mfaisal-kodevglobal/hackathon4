

export default function TopCategories() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-[#151875] text-center">
          Top Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
         
          {[
            {
              img: "img/products/lp1.png",
              title: "Cantilever Chair",
              colorCode: "Color: Gray",
              productCode: "Code: Y523201",
              price: "$56.00",
              discountPrice: null,
            },
            {
              img: "img/products/lp1.png",
              title: "Cantilever Chair",
              colorCode: "Color: Black",
              productCode: "Code: Y523202",
              price: "$56.00",
              discountPrice: "$36",
            },
            {
              img: "img/products/lp3.png",
              title: "Cantilever Chair",
              colorCode: "Color: Blue",
              productCode: "Code: Y523203",
              price: "$56.00",
              discountPrice: "$30",
            },
            {
              img: "img/products/lp4.png",
              title: "Cantilever Chair",
              colorCode: "Color: White",
              productCode: "Code: Y523204",
              price: "$56.00",
              discountPrice: null,
            }
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white hover:shadow-lg transition-all rounded-md flex flex-col justify-between text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center rounded-full w-full h-48 shadow-purple-300">
              <a href="/productdetail">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-32 w-auto object-contain "
                />
                </a>
              </div>

              <div className="items-center justify-between mt-4">
                <h3 className="text-base text-[#151875]">
                  <a href="/productdetail">
                    {product.title}
                  </a>
                </h3>
                <div className="items-center justify-between space-x-2">
                  <h4 className="text-lg text-[#151875]">
                    {product.price}
                  </h4>
                </div>
                
              </div>
              
            </div>
            
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-2">
            <span className="px-1 py-1 rounded-full bg-[#FB2E86] border border-[#FB2E86]"></span>
            <span className="px-1 py-1 rounded-full bg-white border border-[#FB2E86]"></span>
            <span className="px-1 py-1 rounded-full bg-white border border-[#FB2E86]"></span>
        </div>



      </div>
    </>
  );
}

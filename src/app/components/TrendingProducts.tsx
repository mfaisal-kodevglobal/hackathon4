export default function TrendingProducts() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-[#151875] text-center">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              img: "img/products/tp1.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26.00",
              discountPrice: "$42.00",
            },
            {
              img: "img/products/tp2.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26.00",
              discountPrice: "$42.00",
            },
            {
              img: "img/products/tp3.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26.00",
              discountPrice: "$42.00",
            },
            {
              img: "img/products/tp4.png",
              title: "Cantilever chair",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$26.00",
              discountPrice: "$42.00",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="w-[270px] h-[310px] bg-white hover:shadow-lg transition-all rounded-md flex flex-col justify-center items-center text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
              <a href="/productdetail">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-32 w-auto object-contain"
                /></a>
              </div>
              <div className="mt-4">
                <h3 className="text-base font-bold text-[#151875]">
                <a href="/productdetail">{product.title}</a></h3>
                <h4 className="text-xl text-[#151875]  mt-2">
                  {product.price}
                  {product.discountPrice && (
                    <span className="text-sm text-gray-300 ml-2">
                      <del>{product.discountPrice}</del>
                    </span>
                  )}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

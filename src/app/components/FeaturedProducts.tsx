import clsx from 'clsx';

export default function FeaturedProducts() {
  return (
    <div className="font-[sans-serif]  mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
      <h2 className="text-4xl font-extrabold text-[#151875]  text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          {
            img: "img/products/fp1.png",
            title: "Cantilever chair",
            colorCode: "-",
            productCode: "Code: Y523201",
            price: "$120",
            discountPrice: null,
            colors: ['#05E6B7', '#FB2E86', '#00009D']
          },
          {
            img: "img/products/fp2.png",
            title: "Cantilever chair",
            colorCode: "-",
            productCode: "Code: Y523201",
            price: "$960",
            discountPrice: "$1160",
            colors: ['#05E6B7', '#FB2E86', '#00009D']
          },
          {
            img: "img/products/fp3.png",
            title: "Cantilever chair",
            colorCode: "-",
            productCode: "Code: Y523201",
            price: "$370",
            discountPrice: "$400",
            colors: ['#05E6B7', '#FB2E86', '#00009D']
          },
          {
            img: "img/products/fp4.png",
            title: "Cantilever chair",
            colorCode: "-",
            productCode: "Code: Y523201",
            price: "$375",
            discountPrice: null,
            colors: ['#05E6B7', '#FB2E86', '#00009D']
          },
        ].map((product, index) => (
          <div
            key={index}
            className="w-[270px] h-[361px] bg-white hover:shadow-lg transition-all rounded-md flex flex-col justify-center items-center text-center"
          >
            <div className="bg-gray-100 flex justify-center items-center w-[95%] h-48 rounded-md p-0">
              <a href="/productdetail">
              <img
                src={product.img}
                alt={product.title}
                className="h-32 w-auto object-contain"
              />
              </a>
            </div>
            <div className={clsx("mt-4 w-full", { "bg-[#2F1AC4]": index === 1 })}>
              <h3 className="text-base text-[#FB2E86]  mb-2"><a href="/productdetail">{product.title}</a></h3>
              <div className="flex flex-wrap justify-center items-center space-x-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
              <p className="text-xl text-[#151875] mt-2">{product.productCode}</p>
              <h4 className="text-xl text-[#151875] ">
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
      <div className="flex flex-wrap justify-center items-center space-x-2">
                
                  <span className="px-3 py-1 rounded-md bg-[#FB2E86] font-bold" ></span>
                  <span className="px-3 py-1 rounded-md bg-[#FB2E86] backdrop-opacity-30 backdrop-blur-3xl backdrop-brightness-110 backdrop-contrast-200" ></span>
                  <span className="px-3 py-1 rounded-md bg-[#FB2E86] backdrop-opacity-30 backdrop-blur-3xl backdrop-brightness-110 backdrop-contrast-200" ></span>
                  <span className="px-3 py-1 rounded-md bg-[#FB2E86] backdrop-opacity-30 backdrop-blur-3xl backdrop-brightness-110 backdrop-contrast-200" ></span>
      </div>
    </div>
  );
}

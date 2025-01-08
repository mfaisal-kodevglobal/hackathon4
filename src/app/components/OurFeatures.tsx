export default function OurFeatures() {
  return (
    <>
      <div className="font-[sans-serif] px-4 py-8 mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              img: "img/products/so1.png",
              title: "Free Delivery",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$120",
              discountPrice: null,
            },
            {
              img: "img/products/so2.png",
              title: "100% Cash Back",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$960",
              discountPrice: "$1160",
            },
            {
              img: "img/products/so3.png",
              title: "Quality Product",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$370",
              discountPrice: "$400",
            },
            {
              img: "img/products/so4.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$375",
              discountPrice: null,
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer hover:shadow-lg transition-shadow rounded-lg flex flex-col justify-center items-center text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-lg">
                <img
                  src={product.img}
                  alt={product.title}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg text-[#151875] font-bold">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                  necessitatibus eum gravida.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

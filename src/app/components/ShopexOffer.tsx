export default function ShopexOffer() {
  return (
    <>
      <div className="font-[sans-serif] pX-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg ">
        <h2 className="text-4xl font-extrabold text-[#151875] text-center">
          What Shopex Offers!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              img: "img/products/so1.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$120",
              discountPrice: null,
            },
            {
              img: "img/products/so2.png",
              title: "24/7 Support",
              colorCode: "-",
              productCode: "Code: Y523201",
              price: "$960",
              discountPrice: "$1160",
            },
            {
              img: "img/products/so3.png",
              title: "24/7 Support",
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
              className="w-[270px] h-[270px] bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-center items-center text-center px-4"
            >
              <div className="bg-white flex justify-center items-center w-full rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[20%] object-contain"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-base text-[#151875] text-bold-500">{product.title}</h3>
                <p className="text-sm text-[#1A0B5B4D] mt-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam necessitatibus eum gravida. 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

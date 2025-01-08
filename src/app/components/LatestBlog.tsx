import { clsx } from "clsx";
export default function LatestBlog() {
  return (
    <>
      <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
        <h2 className="text-4xl font-extrabold text-[#151875] mb-8 text-center">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[ 
            {
              img: "img/lb1.png",
              title: "Top essential trends in 2021",
              colorCode: "Color: Gray",
              productCode: "Code: Y523201",
              price: "$26",
              discountPrice: null,
              buser:"Saber Ali",
              bdate:"21, August2020"
            },
            {
              img: "img/lb2.png",
              title: "Top essential trends in 2021",
              colorCode: "Color: Black",
              productCode: "Code: Y523202",
              price: "$26",
              discountPrice: "$36",
              buser:"Surfauxion",
              bdate:"21, August2020"
            },
            {
              img: "img/lb3.png",
              title: "Top essential trends in 2021",
              colorCode: "Color: Blue",
              productCode: "Code: Y523203",
              price: "$26",
              discountPrice: "$30",
              buser:"Saber Ali",
              bdate:"21, August2020"
            }
          ].map((product, index) => (
            <div
              key={index}
              className="w-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col justify-between text-center p-4"
            >
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md" // Ensure the image fills the container and is responsive
                />
              </div>
              <div className="mt-4 text-left">
              <div className="flex space-x-8 pb-3">
                <span className="text-[#151875] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="mr-2 text-[#FB2E86]">
                    <path d="M3 17.25V21h3.75L17.81 10.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-2.12 2.12 3.75 3.75 2.12-2.12z"/>
                  </svg>
                  {product.buser}
                </span>
                
                <span className="text-[#151875] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="mr-2 text-[#FFA454]">
                    <path d="M19 3h-2V1h-2v2H9V1H7v2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                  </svg>
                  {product.bdate}
                </span>
              </div>



                <h3 className={clsx( "text-base  font-bold pb-3", {"text-[#151875]" : index == 0}, {"text-[#FB2E86]" : index == 1}, {"text-[#151875]" : index == 2})}>{product.title}</h3>
                <p className="text-sm text-[#1A0B5B4D] font-semibold pb-3">
                More off this less hello samlande lied much
                over tightly circa horse taped mightly
                </p>
                <p className={clsx( "text-sm mt-1 underline", {"text-[#151875]" : index == 0}, {"text-[#FB2E86]" : index == 1}, {"text-[#151875]" : index == 2})}>
                  Read More
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

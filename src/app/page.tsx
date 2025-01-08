import FeaturedProducts from "./components/FeaturedProducts";
import TrendingProducts from "./components/TrendingProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import OffProducts from "./components/OffProducts";
import LatestBlog from "./components/LatestBlog";
import TopCategories from "./components/TopCategories";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Main Banner */}
          <div
            className="flex-grow bg-gray-100 p-4 rounded-md shadow-sm"
            style={{
              minHeight: "550px", // Ensure the image container has a minimum height
              backgroundImage: "url('/img/promotional.png')",
              backgroundSize: "cover",
              backgroundPosition: "top center", // Ensure the image aligns to the top center
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {/* Flash Sales Section */}
        <div className="mt-8">
          <FeaturedProducts />
        </div>

        {/* Best Selling Section */}
        <div className="mt-8">
          <LatestProducts />
        </div>

        {/* Shopex Offer! Section */}
        <div className="mt-8">
          <ShopexOffer />
        </div>

        {/* Promotional Banner 1 */}
        <div className="mt-8">
          <div className="bg-[#F1F0FF] py-8">
            <div className="container mx-auto px-4 flex justify-center">
              <div
                className="w-1/2 rounded-md overflow-hidden shadow-sm"
                style={{
                  minHeight: "370px", // Ensure the image container has a minimum height
                  backgroundImage: "url('/img/promotional1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>  
        </div>
        




        {/* TrendingProducts */}
        <div className="mt-10">
          <TrendingProducts />
        </div>

        {/* New Arrival Section */}
        <div className="">
         <OffProducts />
        </div>

        {/* discountitem */}
        <div className="mt-8">
          <div className="font-[sans-serif] p-4 mx-auto mb-5 lg:max-w-5xl md:max-w-3xl max-w-lg">
            <h2 className="text-4xl font-extrabold text-[#151875] text-center">
            Discount Items
            </h2>
            <div className="flex flex-wrap justify-center items-center space-x-5 mb-5">
                  <span className="text-[#FB2E86]"><span  className="underline">Wood Chair</span> .</span>
                  <span className="text-[#151875]">Plastic Chair</span>
                  <span className="text-[#151875]">Sofa Collecton</span>
            </div>
            <div className="">
              <div
                  className="w-full rounded-md overflow-hidden shadow-sm"
                  style={{
                    minHeight: "370px", // Ensure the image container has a minimum height
                    backgroundImage: "url('/img/discountitem.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
            </div>
          </div>
        </div>  

<TopCategories />

{/* latestupdates */}
<div className="bg-[#F1F0FF] py-8">
  <div className="container mx-auto px-4 flex justify-center">
    <div
      className="w-full rounded-md overflow-hidden shadow-sm"
      style={{
        minHeight: "370px", // Ensure the image container has a minimum height
        backgroundImage: "url('/img/latestupdates.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>
</div>

        {/* Information Icons Section */}
        <div className="mt-3">
          <LatestBlog />
        </div>



      </div>
    </>
  );
}

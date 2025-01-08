import HeaderMenu from "@/app/components/HeaderMenu";

export default function ContactUs() {
  return (
    <>
        {/* <div className="container mx-auto px-4 py-4 w-[1170px]">
          <HeaderMenu/>
        </div> */}
      
        {/* Top Section */}
        <div className="bg-[#F1F0FF] py-8">
          <div className="text-center lg:text-left lg:ml-[120px]">
            <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Contact Us
            </h2>
            <p className="text-sm text-gray-600">
              Home. Pages. <span className="text-[#FB2E86]">Contact Us</span>
            </p>
          </div>
        </div>
      
        <div className="container mx-auto px-4 py-4 w-[1170px]">
          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mt-6">
            {/* Blog Content Section */}
            <div>
              {[1].map((blog, index) => (
                <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-lg text-[#151875] font-bold">
                      Information About Us
                    </h3>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Section */}
            <div className="bg-white shadow-sm rounded-lg p-6 space-y-8">
              <h3 className="text-lg font-bold text-[#151875] mb-4">Contact Way</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { color: "#151875", email: "faisal@gmail.com" },
                  { color: "#FB2E86", email: "faisal@gmail.com" },
                  { color: "#FFB265", email: "faisal@gmail.com" },
                  { color: "#1BE982", email: "faisal@gmail.com" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 w-full sm:w-[48%] p-4 border-b"
                  >
                    <span
                      className={`w-16 h-16 rounded-full`}
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <div className="flex-grow">
                      <p className="text-[#8A8FB9] text-sm">Tel: 3213321</p>
                      <p className="text-[#8A8FB9] text-sm">Email: {item.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="container mx-auto px-4 py-4 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
              <div>
                <h3 className="text-lg text-[#151875] font-bold mb-4">Get in Touch</h3>
                <form>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Write Your Email"
                        className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Write your comments"
                      className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#FB2E86] text-white w-full py-2 rounded-md hover:bg-[#d9216e] transition"
                    >
                      Continue Shipping
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <img
                  src="img/contactus.png"
                  alt="Contact Us"
                  className="w-300 h-auto object-contain"
                />
              </div>
            </div>
          </div>
          
        </div>
    </>
  );
}

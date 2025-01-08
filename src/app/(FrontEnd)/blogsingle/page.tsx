export default function BlogSingle() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="bg-[#F1F0FF] py-8">
          <div className="text-center lg:text-left lg:ml-[300px]">
            <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Blog Page
            </h2>
            <p className="text-sm text-gray-600">
              Home. Pages. <span className="text-[#FB2E86]">Blog Page</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 mt-6">
          {/* Blog Content Section */}
          <div>
            {[1].map((blog, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg p-6 mb-6">
                <div className="space-y-2">
                  <img
                    src={`img/blog${blog}.png`}
                    alt={`Blog ${blog}`}
                    className="w-full h-auto rounded-md bg-[#F4F4FC]"
                  />
                  <div className="  space-y-2">
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <span className="px-4 py-2 bg-[#FFE7F9] text-[#151875] rounded-md">
                        Surf Acution
                      </span>
                      <span className="px-4 py-2 bg-[#FFE7F9] text-[#151875] rounded-md">
                        August 09
                      </span>
                    </div>
                    <h3 className="text-lg text-[#151875]">
                      {index === 0 && "Mauris at orci non vulputate diam tincidunt nec."}
                      {index === 1 && "Aenean vitae in aliquam ultrices lectus. Etiam."}
                      {index === 2 && "Sit nam congue feugiat nisl, mauris amet nisi."}
                    </h3>
                    <p className="text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.
                    </p>
                    <p className="text-[#151875] underline cursor-pointer">Read More.</p>
                  </div>
                </div>
              </div>
            ))}
             <form className="mt-8 w-[70%]">
                <div className="space-y-6">
                  {/* Name, Email, and Phone Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="mt-1 px-3 py-2 border-2 w-full  focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Write Your Email"
                        className="mt-1 px-3 py-2  w-full border-2  focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-600 mb-2">Your Message</label>
                    <textarea
                      rows={5} // Use this format for React components in TSX
                      placeholder="Write your comments"
                      className="mt-1 px-3 py-2  w-full  border-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FB2E86] w-full  text-white px-6 py-2 rounded-sm  transition"
                  >
                    Continue Shipping
                  </button>
                </div>

                
              </form>
          </div>

         

          {/* Sidebar Section */}
          <div className="bg-white shadow-sm rounded-lg p-6 space-y-8">
            {/* Search Section */}
            <div>
              <h3 className="text-lg font-bold text-[#151875] mb-2">Search</h3>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
              />
            </div>

            {/* Categories Section */}
            <div>
              <h3 className="text-lg font-bold text-[#151875] mb-2">Categories</h3>
              <div className="space-y-2">
                <p className="text-[#3F509E] bg-[#F939BF] p-2 rounded-md">
                  Hobbies (14)
                </p>
                <p className="text-[#3F509E]">Women (12)</p>
              </div>
            </div>

            {/* Recent Posts Section */}
            <div>
              <h3 className="text-lg font-bold text-[#151875] mb-2">Recent Posts</h3>
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-4 border-b"
                >
                  <img
                    src={`img/products/brp${item}.png`}
                    alt={`Product ${item}`}
                    className="w-16 h-16 object-contain bg-[#F4F4FC]"
                  />
                  <div className="flex-grow">
                    <h3 className="text-black font-semibold">
                      It is a long established fact
                    </h3>
                    <p className="text-gray-600 text-sm">Aug 09 2020</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sale Products Section */}
            <div>
              <h3 className="text-lg font-bold text-[#151875] mb-2">Sale Products</h3>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-4 border-b"
                >
                  <img
                    src={`img/products/bsp${item}.png`}
                    alt={`Sale Product ${item}`}
                    className="w-16 h-16 object-contain bg-[#F4F4FC]"
                  />
                  <div className="flex-grow">
                    <h3 className="text-black font-semibold">
                      It is a long established fact
                    </h3>
                    <p className="text-gray-600 text-sm">Aug 09 2020</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Offer Products Section */}
            <div>
              <h3 className="text-lg font-bold text-[#151875] mb-2">Offer Products</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="text-center space-y-2">
                    <img
                      src={`img/products/bop${item}.png`}
                      alt={`Offer Product ${item}`}
                      className="w-24 h-24 mx-auto bg-[#F4F4FC]"
                    />
                    <h3 className="text-sm text-[#151875]">Duis lectus est</h3>
                    <p className="text-sm">
                      <span>$2020</span> - <span>$2020</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

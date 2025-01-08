export default function Footer() {
  return (
    <>
      <footer className="font-sans tracking-wide bg-[#EEEFFB] pt-12 pb-4 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          {/* Subscribe Section in the First Column */}
          <div className="space-y-4">
            <h4 className="text-black font-semibold text-lg">Hekto</h4>
            
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
              <button className="bg-[#FB2E86] text-white py-2 px-4 rounded-md">
                SignUp
              </button>
            </div>
            <h3 className="text-black font-semibold text-lg mt-6">Contact Info</h3>
            <p className="text-[#8A8FB9] text-sm">
              17 Princes Road London, Greater London NW1 8JR, UK
            </p>
          </div>

          <div>
            <h4 className="text-black font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-5">
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Laptops & Computers</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Cameras & Photography</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Smart Phones & Tablets</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Video Games & Consoles</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Waterproof Headphones</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold text-lg mb-6">Customer Care</h4>
            <ul className="space-y-5">
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">My Account</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Discount</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Returns</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Order History</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Order Tracking</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-semibold text-lg mb-6">Pages</h4>
            <ul className="space-y-5">
              <li>
                <a href="/blog" className="text-[#8A8FB9] text-[15px] transition-all">Blog</a>
              </li>
              <li>
                <a href="/shopgrid" className="text-[#8A8FB9] text-[15px] transition-all">Browse the Shop</a>
              </li>
              <li>
                <a href="/shopleftsidebar" className="text-[#8A8FB9] text-[15px] transition-all">Category</a>
              </li>
              <li>
                <a href="/about" className="text-[#8A8FB9] text-[15px] transition-all">Pre-Built Pages</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">Visual Composer Elements</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-[#8A8FB9] text-[15px] transition-all">WooCommerce Pages</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
          <div className="flex justify-between items-center">
            {/* Left aligned text */}
            <p className="text-[#8A8FB9] text-[15px] text-left">
              © ReadymadeUI. All rights reserved.
            </p>

            {/* Social Icons on the right */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="bg-[#151875] p-2 rounded-full text-white hover:bg-[#FB2E86]">
                {/* Facebook SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h4v10h5V15h4l1-4h-5V8a1 1 0 0 1 1-1h3V2z"></path>
                </svg>
              </a>
              <a href="https://www.pinterest.com" className="bg-[#151875] p-2 rounded-full text-white hover:bg-[#FB2E86]">
                {/* Pinterest SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.68 3.47 8.59 7.88 9.7-.03-.32-.05-.64-.05-.97 0-2.39 1.37-4.34 3.34-5.01-.38-.16-.78-.3-1.19-.41-.68-.14-1.37-.26-2.05-.35-.34-.1-.66-.25-.98-.42-.73-.36-.63-.36-.85-.42-.35-.08-.67-.23-1-.43-.33-.22-.68-.47-1.03-.72-.68-.48-.55-.34-.59-.26-.29.53-.49.99-.81 1.49-.06-.11-.21-.23-.32-.34-.02-.05-.1-.18-.23-.32-.5-.58-.68-.83-.85-.97-.02-.01-.07-.02-.1-.03-.37-.14-.7-.25-1-.42-.56-.31-.97-.59-.55-.94-.07-.1-.1-.23-.1-.36 0-.51.58-.91.9-.85.62.09 1.19.24 1.77.35-.35.7-.63 1.51-.82 2.34-.06.18-.18.38-.4.48-.63-.46-1.37-.55-2.05-.65.26-.34.63-.52.93-.67-.26-.28-.48-.59-.75-.88-.65-.98-1.72-.7-2.35-.27z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="bg-[#151875] p-2 rounded-full text-white hover:bg-[#FB2E86]">
                {/* Twitter SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.5 10.5 0 0 1-3.15.86A5.27 5.27 0 0 0 22.34 1a10.44 10.44 0 0 1-3.3 1.26A5.28 5.28 0 0 0 16.62 3a5.26 5.26 0 0 0-5.28 5.28c0 .41.05.81.14 1.19A14.97 14.97 0 0 1 1.64 3.35a5.27 5.27 0 0 0-.72 2.65c0 1.83.93 3.43 2.35 4.38a5.22 5.22 0 0 1-2.4-.67c-.06 2.56 1.81 4.72 4.22 5.2a5.23 5.23 0 0 1-2.36.09c.66 2.07 2.59 3.57 4.87 3.61a10.56 10.56 0 0 1-6.54 2.26c-.42 0-.83-.02-1.25-.07a14.98 14.98 0 0 0 8.08 2.37c9.69 0 15.02-8.03 15.02-15.02 0-.23 0-.46-.01-.69A10.55 10.55 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

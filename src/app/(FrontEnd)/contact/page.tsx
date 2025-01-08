
export default function Contact() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Breadcrumb */}
        <label className="mt-14 ml-3 block text-sm">Home / Contact</label>

        <div className="mt-6 font-[sans-serif] bg-white">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg text-white lg:w-1/3">
              {/* Call to Us Section */}
              <div>
                <h3 className="flex items-center text-xl text-black font-semibold">
                  <img src="img/icons-phone.png" alt="Phone Icon" className="w-6 h-6" />
                  <span className="ml-5">Call to Us</span>
                </h3>
                <ul className="mt-4 space-y-2 text-black">
                  <li>We are available 24/7, 7 days a week</li>
                  <li>Phone: +8801911112222</li>
                </ul>
              </div>
              {/* Divider */}
              <div style={{ borderBottom: "1px solid gray", marginTop: "1.5rem" }}></div>

              {/* Write to Us Section */}
              <div className="mt-6">
                <h3 className="flex items-center text-xl text-black font-semibold">
                  <img src="img/icons-mail.png" alt="Mail Icon" className="w-6 h-6" />
                  <span className="ml-5">Write to Us</span>
                </h3>
                <ul className="mt-4 space-y-2 text-black">
                  <li>Fill out our form and we will contact you within 24 hours</li>
                  <li>Email: customer@exclusive.com</li>
                  <li>Email: support@exclusive.com</li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-gray-50 shadow-md rounded-lg p-6 flex-grow">
              <h2 className="text-2xl font-bold text-red-400">Contact Us</h2>
              <form className="mt-8">
                <div className="space-y-6">
                  {/* Name, Email, and Phone Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-600 mb-2">Your Message</label>
                    <textarea
                      rows={5} // Use this format for React components in TSX
                      placeholder="Write your message here..."
                      className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-8 space-x-4">
                  <button
                    type="button"
                    className="bg-gray-200 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

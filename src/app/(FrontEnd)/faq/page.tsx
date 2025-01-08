export default function Faq() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="bg-[#F1F0FF] py-8">
          <div className="text-center lg:text-left lg:ml-[300px]">
            <h2 className="text-[#101750] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              FAQ
            </h2>
            <p className="text-sm text-gray-600">
              Home. Pages. <span className="text-[#FB2E86]">Faq</span>
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#151875] font-bold mb-4">
              General Information
            </h3>
            <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
              {[
                {
                  question: "Eu dictumst cum at sed euismood condimentum?",
                  answer:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.",
                },
                {
                  question: "Magna bibendum est fermentum eros.",
                  answer:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.",
                },
                {
                  question: "Odio muskana hak eris conseekin sceleton?",
                  answer:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.",
                },
                {
                  question: "Elit id blandit sabara boi velit gua mara?",
                  answer:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, repellendus suscipit atque quo voluptas ratione magnam soluta.",
                },
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg text-[#151875] font-bold">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="bg-[#CDCEDC] shadow-sm rounded-lg p-6 space-y-8">
            <h3 className="text-lg font-bold text-[#151875] mb-4">Ask a Question</h3>
            <form>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows={5}
                  placeholder="Write your message"
                  className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#FB2E86] text-white w-full py-2 rounded-md hover:bg-[#d9216e] transition"
                >
                  Send Mail
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

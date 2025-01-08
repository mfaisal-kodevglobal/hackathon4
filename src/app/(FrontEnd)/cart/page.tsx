export default function Cart() {
  return (
    <>
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          {/* Cart Items Section */}
          <div className="bg-white shadow-sm rounded-lg p-4">
            <p className="text-sm text-gray-500">Home / Cart</p>
            <div className="overflow-x-auto">
              <table className="mt-8 w-full border-collapse divide-y">
                <thead className="text-left">
                  <tr>
                    <th className="text-sm font-medium text-gray-600 p-2">Product</th>
                    <th className="text-sm font-medium text-gray-600 p-2">Price</th>
                    <th className="text-sm font-medium text-gray-600 p-2">Quantity</th>
                    <th className="text-sm font-medium text-gray-600 p-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[1, 2].map((item, index) => (
                    <tr key={index}>
                      <td className="px-2 py-4">
                        <div className="flex items-center gap-4">
                        <a href="/productdetail">
                          <img
                            src={`img/products/lp${index + 1}.png`}
                            alt="Product"
                            className="w-12 h-12 object-contain"
                          /></a>
                          <p className="text-sm font-semibold text-gray-800"><a href="/productdetail">Black T-Shirt</a></p>
                        </div>
                      </td>
                      <td className="px-2 py-4">
                        <p className="text-sm font-semibold text-gray-800">$18.5</p>
                      </td>
                      <td className="px-2 py-4">
                        <input
                          type="number"
                          min="1"
                          className="w-16 border text-sm text-gray-900 rounded px-2 py-1"
                          defaultValue={1}
                        />
                      </td>
                      <td className="px-2 py-4">
                        <p className="text-sm font-semibold text-gray-800">$18.5</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="/shopgrid">
              <button className="w-full sm:w-auto px-4 py-2 border rounded text-white bg-[#FB2E86]">
                Return to Shop
              </button>
              </a>
              <a href="/cart">
              <button className="w-full sm:w-auto px-4 py-2 border rounded text-white bg-[#FB2E86]">
                Update Cart
              </button></a>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-white shadow-sm rounded-lg p-4">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#1D3178]">Cart Total</h3>
              <div className=" bg-[#F4F4FC] mb-6 p-10">
              <ul className="divide-y text-gray-600 bg-[#F4F4FC]">
                <li className="flex justify-between py-3 text-[#1D3178]">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#15245E]">$37.00</span>
                </li>
                <li className="flex justify-between py-3 text-[#1D3178]">
                  <span>Shipping</span>
                  <span className="font-bold text-[#15245E]">$4.00</span>
                </li>
                <li className="flex justify-between py-3 font-bold">
                  <span>Total</span>
                  <span>$41.00</span>
                </li>
              </ul>
              <a href="/checkout">
              <button className="w-full mt-6 py-2 bg-[#19D16F] text-white font-semibold rounded hover:bg-[#19D16F]">
                Proceed to Checkout
              </button></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#1D3178] mb-4">Calculate Shipping</h3>
              <div className=" bg-[#F4F4FC] mb-6 p-10">
                <ul className="divide-y text-gray-400 bg-[#F4F4FC]">
                <li className="flex justify-between py-3">
                  <span>Shipping Method</span>
                  <span className="font-bold">Standard</span>
                </li>
                <li className="flex justify-between py-3">
                  <span>Estimate</span>
                  <span className="font-bold">$4.00</span>
                </li>
              </ul>
              <button className="w-full mt-6 py-2 bg-[#FB2E86] text-white font-semibold rounded hover:bg-[#FB2E86]">
                Update Estimate
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

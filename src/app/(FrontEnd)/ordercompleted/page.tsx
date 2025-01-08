export default function OrderCompleted() {
  return (
    <>
      <div className="font-[sans-serif] h-screen flex items-center justify-center bg-gray-50">
        <div className="lg:w-[70%] w-full bg-white p-8 flex flex-col items-center text-center space-y-6">
          {/* Flex container for images */}
          <div className="flex gap-4 w-full">
            {/* First image aligned to the left (start) */}
            <div className="flex justify-start w-1/2">
              <img
                src="img/clock.png"
                alt="Order Completed"
                className="object-contain"
              />
            </div>
            
            {/* Second image centered */}
            <div className="flex justify-center items-center w-1/12">
              <img
                src="img/ordercompleted.png"
                alt="Order Completed"
                className="w-24 h-24 object-contain mr-24"
              />
            </div>
          </div>
          
          {/* Title and Description */}
          <h3 className="text-2xl font-bold text-gray-800">Your Order is Completed</h3>
          <p className="text-sm text-gray-600">
            Thank you for your order! Your order is being processed and will be completed within 3-6<br />
            hours. You will receive an email confirmation when your order is completed.
          </p>
          
          {/* Button */}
          <button className="px-4 py-2 border rounded text-white bg-[#FB2E86] hover:bg-[#FB2E86]/90">
            Return to Shop
          </button>

          {/* Second Flex container to align last image at the end */}
          <div className="flex justify-end w-full gap-4">
            {/* Second image aligned to the end (right) */}
            <div className="flex justify-end w-1/2">
              <img
                src="img/checklist.png"
                alt="Order Completed"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

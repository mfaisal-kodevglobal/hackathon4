export default function OurClientSay() {
  return (
    <>
      <div className="font-[sans-serif] px-4 py-8 mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Our Client Say!
        </h2>
        {/* Images Section */}
        <div className="flex justify-center items-center space-x-0">
          {[
            "img/ocs1.png",
            "img/ocs2.png",
            "img/ocs3.png",
          ].map((imgSrc, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-20 h-20"
            >
              <img
                src={imgSrc}
                alt={`Image ${index + 1}`}
                className="h-12 w-12 object-contain"
              />
            </div>
          ))}
        </div>
        {/* Text Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
            necessitatibus eum, repellendus suscipit atque quo voluptas ratione
            magnam soluta.
          </p>
        </div>
      </div>
    </>
  );
}

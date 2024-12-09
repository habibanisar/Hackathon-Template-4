import Image from "next/image";
const LatestProduct = () => {
    const products = [
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 9.png",
      },
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 15.png",
      },
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 1168.png",
      },
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 23.png",
      },
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 1172.png",
      },
      {
        name: "Comfort Handy Craft",
        price: "$36.00",
        oldPrice: "$46.00",
        image: "/images/image 3.png",
      },
    ];
  
    return (
      <section className="bg-purple-50 py-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-navyblue text-nav">Latest Products</h2>
          <div className="flex justify-center space-x-8 mt-4">
            <button className="text-pink underline font-semibold">New Arrival</button>
            <button className="text-navyblue font-semibold hover:text-sky-500">Best Seller</button>
            <button className="text-navyblue font-semibold hover:text-sky-500">Featured</button>
            <button className="text-navyblue font-semibold hover:text-sky-500">Special Offer</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-105 max-w-[250px] w-full mx-auto"
            >
              <div className="w-full h-64 bg-slate-100 rounded-t-lg overflow-hidden">
                <Image
                  src={product.image} // Image source
                  alt={`Image of ${product.name}`} // Alt text for accessibility
                  className="object-contain"
                  width={500} // Set width as per your design
                  height={256} // Set height as per your design
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navyblue">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-red-600 font-semibold">{product.price}</p>
                  <p className="text-red line-through">{product.oldPrice}</p>
                </div>
              </div>
              <span className="absolute top-2 right-2 bg-pink text-white text-xs font-semibold px-2 py-1 rounded">
                Sale
              </span>
            </div>
          ))}
        </div>

      </section>
    );
  };
  
  export default LatestProduct;
  
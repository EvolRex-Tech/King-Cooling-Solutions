export default function Catalog() {
  const products = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/68a613e57b49ab87c54c78799d08c045761154ec?width=1800",
      title: "Supermarket Display Chillers",
      description: "Efficient Cooling for Fresh Storage",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d5c55c623ce8adb01faa7649f9d1dc316a6b3659?width=1800",
      title: "Frozen Freezer Room Units",
      description: "Low-Temperature Bulk Preservation",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8f75ca5a1723a4ad05114848462035b874c35422?width=1942",
      title: "Pharmaceutical Cold Rooms",
      description: "Accurate and Stable Medical Cooling",
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d419d6f8d3f1bbdb5a23e323a3b94c7270221b17?width=1670",
      title: "Kitchen Cold Storage",
      description: "Reliable Cold Storage for Kitchens",
    },
  ];

  return (
    <section id="catalog" className="py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-darkText mb-4">
            Our Catalog
          </h2>
          <p className="text-base text-brand-grayText">
            World-class cooling hardware optimized for durability and extreme performance environments.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative">
              {/* Product Card */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkText/90 via-brand-darkText/20 to-transparent"></div>
                
                {/* Product Info - Positioned at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/80">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

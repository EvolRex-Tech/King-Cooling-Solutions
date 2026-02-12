export default function Testimonials() {
  const testimonials = [
    {
      quote: "The King Cooling transformed our warehouse efficiency. Their cold storage solutions are top-notch and the response time for AMC is unparalleled.",
      name: "Rajesh Kumar",
      title: "Operations Head, Fresh Logistics",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/78f2f5d6efeadbe9ad45f61d90d984d220df3513?width=96",
    },
    {
      quote: "Professional, punctual, and highly skilled. M.A. Azam's team handled our entire corporate office VRF installation flawlessly.",
      name: "Anita Desai",
      title: "Admin Director, Tech Hub Chennai",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e1cd6d5d8c0914b441ac0efc1764642d55190c42?width=96",
    },
    {
      quote: "Their predictive maintenance saved us from a major breakdown during the peak summer heat. Truly the kings of cooling!",
      name: "Vignesh S.",
      title: "Facility Manager, Marina Towers",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/621d6b5b93eea05b4a5ad3e5235bb12fee6f60c4?width=96",
    },
  ];

  return (
    <section className="relative bg-brand-blue py-24 px-6 overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[64px] -translate-y-1/2"></div>
      
      <div className="relative max-w-[1280px] mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Voices of Satisfaction
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.94756 18.691L12.0101 16.8437L15.0726 18.7153L14.2705 15.2153L16.9684 12.8819L13.4198 12.566L12.0101 9.26042L10.6003 12.5417L7.05173 12.8576L9.74965 15.2153L8.94756 18.691ZM6.00659 22.75L7.58645 15.9201L2.28784 11.3264L9.28784 10.7187L12.0101 4.27778L14.7323 10.7187L21.7323 11.3264L16.4337 15.9201L18.0135 22.75L12.0101 19.1285L6.00659 22.75Z"
                      fill="#FACC15"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-white italic leading-[29.25px] mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-base font-bold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-white/60">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

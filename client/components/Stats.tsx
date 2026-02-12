export default function Stats() {
  const stats = [
    {
      value: "95%",
      label: "Fast Service Response",
    },
    {
      value: "12k+",
      label: "Systems Installed",
    },
    {
      value: "150+",
      label: "Certified Techs",
    },
    {
      value: "50k+",
      label: "Commercial Sites",
    },
  ];

  return (
    <section className="relative bg-brand-blue rounded-3xl overflow-hidden mx-6 my-20">
      {/* Background SVG Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1280 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 82C213.333 54.6667 426.667 54.6667 640 82C853.333 109.333 1066.67 109.333 1280 82V164H0V82Z"
          fill="white"
        />
      </svg>

      <div className="relative max-w-[1280px] mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`space-y-2 ${
                index > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""
              }`}
            >
              <div className="text-4xl font-extrabold text-white leading-10">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-brand-lightBlue uppercase tracking-wide leading-5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

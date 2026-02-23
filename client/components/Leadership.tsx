export default function Leadership() {
  return (
    <section id="leadership" className="py-20 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#DBEAFE] rounded-full">
              <span className="text-sm font-bold tracking-wide text-brand-blue uppercase">
                Our Leadership
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-10">
              <span className="text-brand-darkText">Guided by Decades of </span>
              <span className="text-brand-blue italic">Expertise</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-brand-grayText leading-[29.25px]">
                Under the visionary leadership of{" "}
                <span className="font-bold">M.A. Azam</span>, THE KING COOLING has
                evolved from a local maintenance shop into a regional powerhouse of
                industrial refrigeration.
              </p>
              <p className="text-lg text-brand-grayText leading-[29.25px]">
                We believe that "Cooling is the backbone of modern progress."
                Without it, medicine fails, food spoils, and technology overheats. Our
                mission is to provide the most reliable thermal management solutions
                on the planet.
              </p>
            </div>

            {/* CEO Card */}
            <div className="inline-flex items-center gap-4 px-8 py-8 bg-[#F8FAFC] border border-brand-borderGray rounded-3xl max-w-[600px]">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">MA</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-darkText">
                  M.A. Azam
                </h4>
                <p className="text-base text-brand-mutedText">
                  Founder & CEO, THE KING COOLING
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Rotated Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="w-full max-w-[600px] aspect-square rounded-[48px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
              style={{ transform: "rotate(3deg)" }}
            >
              <img
                src="/profile.jpg.jpeg"
                alt="M.A. Azam, Founder & CEO"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

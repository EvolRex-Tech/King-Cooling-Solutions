export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 md:pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full">
              <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
              <span className="text-xs font-bold tracking-[1.2px] text-brand-blue uppercase">
                Certified HVAC Experts in Chennai
              </span>
            </div>

            {/* Heading with Gradient */}
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-tight tracking-tight">
              <span className="text-brand-darkText">Complete</span>
              <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Refrigeration
              </span>
              <span className="text-brand-darkText"> &</span>
              <br />
              <span className="text-brand-darkText">Air Conditioning</span>
              <br />
              <span className="text-brand-darkText">Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-brand-grayText leading-7 max-w-none md:max-w-[542px]">
              Experience precision cooling and world-class service. From
              industrial refrigeration to smart residential AC solutions, we keep
              your world cool.
            </p>

            {/* CTA Buttons */}
            {/*<div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold text-base rounded-2xl hover:bg-brand-blue/90 transition-colors shadow-lg">
                <span>Request Service</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0156 3H18.9844V2.01562C18.9844 1.45312 18.5625 0.984375 18 0.984375C17.4375 0.984375 17.0156 1.45312 17.0156 2.01562V3H6.98438V2.01562C6.98438 1.45312 6.5625 0.984375 6 0.984375C5.4375 0.984375 5.01562 1.45312 5.01562 2.01562V3H3.98438C2.90625 3 2.01562 3.89062 2.01562 5.01562V21C2.01562 22.0781 2.90625 23.0156 3.98438 23.0156H20.0156C21.0938 23.0156 21.9844 22.0781 21.9844 21V5.01562C21.9844 3.89062 21.0938 3 20.0156 3ZM18.9844 21H5.01562C4.45312 21 3.98438 20.5312 3.98438 20.0156V8.01562H20.0156V20.0156C20.0156 20.5312 19.5469 21 18.9844 21Z" fill="white"/>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-darkText font-bold text-base rounded-2xl border border-brand-borderGray hover:bg-gray-50 transition-colors">
                <span>View Products</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2969 5.71875C13.9219 6.09375 13.9219 6.75 14.2969 7.125L18.1875 11.0156H3C2.4375 11.0156 2.01562 11.4375 2.01562 12C2.01562 12.5625 2.4375 12.9844 3 12.9844H18.1875L14.2969 16.875C13.9219 17.25 13.9219 17.9062 14.2969 18.2812C14.6719 18.7031 15.3281 18.7031 15.7031 18.2812L21.2812 12.7031C21.7031 12.3281 21.7031 11.6719 21.2812 11.2969L15.7031 5.71875C15.3281 5.29688 14.6719 5.29688 14.2969 5.71875Z" fill="#0F172A"/>
                </svg>
              </button>
            </div>*/}
          </div>

          {/* Right Content - Image with Overlay Card */}
          <div className="relative">
            {/* Background Blur Effect */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-brand-blue/20 rounded-full blur-[32px] opacity-30"></div>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b2c6b13378e54fb5222a48cd62ca75a85deb740e?width=1500"
                alt="Modern refrigeration and air conditioning units"
                className="w-full h-auto aspect-[3/2] object-cover"
              />
            </div>

            {/* Energy Savings Card */}
            <div className="lg:absolute relative lg:-bottom-8 lg:-left-8 left-0 lg:w-[249px] w-full lg:h-[98px] h-auto bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.10),0_8px_10px_-6px_rgba(0,0,0,0.10)] p-4 lg:p-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6874 21C10.3124 21 10.0312 20.6719 10.0781 20.3438L11.0156 14.0156H7.49994C6.60931 14.0156 7.17181 13.2656 7.17181 13.2188C8.43744 10.9688 10.3593 7.6875 12.8437 3.28125C12.9374 3.09375 13.1249 3 13.3593 3C13.6874 3 13.9687 3.32812 13.9218 3.65625L13.0312 9.98438H16.4999C16.9218 9.98438 17.1562 10.1719 16.9218 10.6406C13.6406 16.4062 11.7187 19.7344 11.1562 20.7188C11.0624 20.9062 10.8749 21 10.6874 21Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-mutedText uppercase tracking-tight leading-4">
                    Energy Savings
                  </div>
                  <div className="text-lg font-extrabold text-brand-darkText leading-7">
                    Up to 40% OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

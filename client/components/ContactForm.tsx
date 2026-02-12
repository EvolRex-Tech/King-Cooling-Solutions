import { useState } from "react";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show success popup for 3 seconds
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    
    // Submit the form after a short delay
    setTimeout(() => {
      const form = e.currentTarget;
      form.submit();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F1F5F9]">
      <div className="max-w-[1232px] mx-auto">
        <div className="bg-white rounded-[48px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Blue Background with Contact Info */}
            <div className="bg-brand-blue p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-extrabold mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-[#E0F2FE] mb-12 leading-7">
                Contact us today for a free estimate or to book a service appointment.
              </p>

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.2186 15.2816L16.6874 14.9535C16.078 14.9066 15.4686 15.0941 15.0468 15.5629L13.2186 17.391C10.3593 15.9379 8.06238 13.641 6.60926 10.7816L8.48426 8.95349C8.90613 8.53161 9.09363 7.92224 9.04676 7.31286L8.76551 4.78161C8.62488 3.75036 7.78113 3.00036 6.74988 3.00036H5.01551C3.89051 3.00036 2.95301 3.93786 3.04676 5.06286C3.56238 13.641 10.4061 20.4379 18.9374 20.9535C20.0624 21.0472 20.9999 20.1097 20.9999 18.9847V17.2504C20.9999 16.2191 20.2499 15.3754 19.2186 15.2816Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#BAE6FD] mb-1">Call Us</div>
                    <div className="text-xl font-bold">044-47800436</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.0156 3.98438H3.98438C2.90625 3.98438 2.01562 4.92188 2.01562 6V18C2.01562 19.0781 2.90625 20.0156 3.98438 20.0156H20.0156C21.0938 20.0156 21.9844 19.0781 21.9844 18V6C21.9844 4.92188 21.0938 3.98438 20.0156 3.98438ZM19.5938 8.25L12.5156 12.6562C12.1875 12.8906 11.8125 12.8906 11.4844 12.6562L4.40625 8.25C4.17188 8.10938 3.98438 7.82812 3.98438 7.54688C3.98438 6.84375 4.73438 6.46875 5.29688 6.79688L12 11.0156L18.7031 6.79688C19.2656 6.46875 20.0156 6.84375 20.0156 7.54688C20.0156 7.82812 19.8281 8.10938 19.5938 8.25Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#BAE6FD] mb-1">Email Us</div>
                    <div className="text-xl font-bold">thekingcoolingsolutions@gmail.com</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.01562C7.78125 2.01562 3.98438 5.20312 3.98438 10.2188C3.98438 13.3594 6.46875 17.1094 11.3438 21.4219C11.7188 21.75 12.2812 21.75 12.6562 21.4219C17.5312 17.1094 20.0156 13.3594 20.0156 10.2188C20.0156 5.20312 16.2188 2.01562 12 2.01562ZM12 12C10.9219 12 9.98438 11.1094 9.98438 9.98438C9.98438 8.90625 10.9219 8.01562 12 8.01562C13.0781 8.01562 14.0156 8.90625 14.0156 9.98438C14.0156 11.1094 13.0781 12 12 12Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#BAE6FD] mb-1">Visit Us</div>
                    <div className="text-xl font-bold">Arcot Road, Chennai, TN</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-12 lg:p-20">
              <form action="https://formsubmit.co/evolrexx@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden FormSubmit.co fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Request - King Cooling" />
                
                {/* Name and Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-brand-mutedText mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 border border-brand-borderGray rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-brand-mutedText mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98XXX XXXXX"
                      required
                      className="w-full px-6 py-4 border border-brand-borderGray rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-bold text-brand-mutedText mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    required
                    className="w-full px-6 py-4 border border-brand-borderGray rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue appearance-none bg-white"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.2002 9.59961L12.0002 14.3996L16.8002 9.59961' stroke='%236B7280' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                    }}
                  >
                    <option>New Installation</option>
                    <option>AC Repair</option>
                    <option>AMC Service</option>
                    <option>Cold Room Setup</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-brand-mutedText mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    required
                    className="w-full px-6 py-4 border border-brand-borderGray rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-blue text-white font-extrabold text-base px-8 py-5 rounded-2xl shadow-[0_20px_25px_-5px_rgba(30,64,175,0.20),0_8px_10px_-6px_rgba(30,64,175,0.20)] hover:bg-brand-blue/90 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send Request</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.42188 20.3908L20.8594 12.9376C21.6562 12.5626 21.6562 11.4376 20.8594 11.0626L3.42188 3.6095C2.71875 3.32825 2.01562 3.797 2.01562 4.50013V9.14075C2.01562 9.6095 2.39062 10.0314 2.85938 10.1251L17.0156 12.0001L2.85938 13.8751C2.39062 13.9689 2.01562 14.3908 2.01562 14.8595V19.5001C2.01562 20.2033 2.71875 20.672 3.42188 20.3908Z" fill="white"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="bg-white/95 rounded-2xl p-8 shadow-lg flex items-center gap-4 pointer-events-auto animate-scale-in">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-brand-darkText">Your Request has been sent</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

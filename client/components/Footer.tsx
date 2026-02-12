import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-20 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.0156H17.8125L20.3906 8.4375C20.7656 8.0625 20.7656 7.45312 20.3906 7.03125C19.9688 6.65625 19.3594 6.65625 18.9375 7.03125L15 11.0156H12.9844V9L16.9688 5.0625C17.3438 4.64062 17.3438 4.03125 16.9688 3.60938C16.5469 3.23438 15.9375 3.23438 15.5625 3.60938L12.9844 6.1875V3C12.9844 2.4375 12.5625 2.01562 12 2.01562C11.4375 2.01562 11.0156 2.4375 11.0156 3V6.1875L8.4375 3.60938C8.0625 3.23438 7.45312 3.23438 7.03125 3.60938C6.65625 4.03125 6.65625 4.64062 7.03125 5.0625L11.0156 9V11.0156H9L5.0625 7.03125C4.64062 6.65625 4.03125 6.65625 3.60938 7.03125C3.23438 7.45312 3.23438 8.0625 3.60938 8.4375L6.1875 11.0156H3C2.4375 11.0156 2.01562 11.4375 2.01562 12C2.01562 12.5625 2.4375 12.9844 3 12.9844H6.1875L3.60938 15.5625C3.23438 15.9375 3.23438 16.5469 3.60938 16.9688C4.03125 17.3438 4.64062 17.3438 5.0625 16.9688L9 12.9844H11.0156V15L7.03125 18.9375C6.65625 19.3594 6.65625 19.9688 7.03125 20.3906C7.45312 20.7656 8.0625 20.7656 8.4375 20.3906L11.0156 17.8125V21C11.0156 21.5625 11.4375 21.9844 12 21.9844C12.5625 21.9844 12.9844 21.5625 12.9844 21V17.8125L15.5625 20.3906C15.9375 20.7656 16.5469 20.7656 16.9688 20.3906C17.3438 19.9688 17.3438 19.3594 16.9688 18.9375L12.9844 15V12.9844H15L18.9375 16.9688C19.3594 17.3438 19.9688 17.3438 20.3906 16.9688C20.7656 16.5469 20.7656 15.9375 20.3906 15.5625L17.8125 12.9844H21C21.5625 12.9844 21.9844 12.5625 21.9844 12C21.9844 11.4375 21.5625 11.0156 21 11.0156Z" fill="#0EA5E9"/>
              </svg>
              <div className="text-xl font-extrabold tracking-tight">
                <span className="text-white">THE KING </span>
                <span className="text-brand-cyan">COOLING</span>
              </div>
            </div>
            <p className="text-[#94A3B8] text-base leading-6">
              Your premier partner for industrial and residential cooling solutions in Chennai. Keeping you comfortable since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-[#94A3B8] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-[#94A3B8] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#94A3B8] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-[#94A3B8] hover:text-white transition-colors">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-[#94A3B8] transition-colors">
                  Split AC Repair
                </span>
              </li>
              <li>
                <span className="text-[#94A3B8] transition-colors">
                  Chiller Maintenance
                </span>
              </li>
              <li>
                <span className="text-[#94A3B8] transition-colors">
                  Ducting Solutions
                </span>
              </li>
              <li>
                <span className="text-[#94A3B8] transition-colors">
                  Cold Storage
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M12 2.01562C7.78125 2.01562 3.98438 5.20312 3.98438 10.2188C3.98438 13.3594 6.46875 17.1094 11.3438 21.4219C11.7188 21.75 12.2812 21.75 12.6562 21.4219C17.5312 17.1094 20.0156 13.3594 20.0156 10.2188C20.0156 5.20312 16.2188 2.01562 12 2.01562ZM12 12C10.9219 12 9.98438 11.1094 9.98438 9.98438C9.98438 8.90625 10.9219 8.01562 12 8.01562C13.0781 8.01562 14.0156 8.90625 14.0156 9.98438C14.0156 11.1094 13.0781 12 12 12Z" fill="#0EA5E9"/>
                </svg>
                <span className="text-[#94A3B8]">Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-start gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M19.2189 15.2816L16.6876 14.9535C16.0783 14.9066 15.4689 15.0941 15.047 15.5629L13.2189 17.391C10.3595 15.9379 8.06263 13.641 6.6095 10.7816L8.4845 8.95349C8.90638 8.53161 9.09388 7.92224 9.047 7.31286L8.76575 4.78161C8.62513 3.75036 7.78138 3.00036 6.75013 3.00036H5.01575C3.89075 3.00036 2.95325 3.93786 3.047 5.06286C3.56263 13.641 10.4064 20.4379 18.9376 20.9535C20.0626 21.0472 21.0001 20.1097 21.0001 18.9847V17.2504C21.0001 16.2191 20.2501 15.3754 19.2189 15.2816Z" fill="#0EA5E9"/>
                </svg>
                <span className="text-[#94A3B8]">044-47800436</span>
              </li>
              <li className="flex items-start gap-0.5">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M20.0156 3.98438H3.98438C2.90625 3.98438 2.01562 4.92188 2.01562 6V18C2.01562 19.0781 2.90625 20.0156 3.98438 20.0156H20.0156C21.0938 20.0156 21.9844 19.0781 21.9844 18V6C21.9844 4.92188 21.0938 3.98438 20.0156 3.98438ZM19.5938 8.25L12.5156 12.6562C12.1875 12.8906 11.8125 12.8906 11.4844 12.6562L4.40625 8.25C4.17188 8.10938 3.98438 7.82812 3.98438 7.54688C3.98438 6.84375 4.73438 6.46875 5.29688 6.79688L12 11.0156L18.7031 6.79688C19.2656 6.46875 20.0156 6.84375 20.0156 7.54688C20.0156 7.82812 19.8281 8.10938 19.5938 8.25Z" fill="#0EA5E9"/>
                </svg>
                <span className="text-sm text-[#94A3B8]">thekingcoolingsolutions@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#0F172A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-mutedText">
            © 2024 The King Cooling. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9844 12C21.9844 6.46875 17.5312 2.01562 12 2.01562C6.46875 2.01562 2.01562 6.46875 2.01562 12C2.01562 16.8281 5.4375 20.8594 9.98438 21.7969V15H8.01562V12H9.98438V9.51562C9.98438 7.54688 11.5781 6 13.5 6H15.9844V9H14.0156C13.4531 9 12.9844 9.46875 12.9844 9.98438V12H15.9844V15H12.9844V21.9375C18.0469 21.4688 21.9844 17.2031 21.9844 12Z" fill="#64748B"/>
              </svg>
            </a>
            <a
              href="mailto:thekingcoolingsolutions@gmail.com"
              className="w-6 h-6 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.703 2.01562C6.60928 1.59375 1.59366 6.60938 2.01553 12.7031C2.39053 18 7.03116 21.9844 12.328 21.9844H15.9843C16.5468 21.9844 17.0155 21.5625 17.0155 21C17.0155 20.4375 16.5468 20.0156 15.9843 20.0156H12.328C8.57803 20.0156 5.20303 17.5781 4.26553 13.9688C2.76553 8.15625 8.15616 2.76562 13.9687 4.26562C17.578 5.20312 20.0155 8.57812 20.0155 12.3281V13.4531C20.0155 14.2031 19.3124 15 18.5155 15C17.7187 15 17.0155 14.2031 17.0155 13.4531V12.1875C17.0155 9.65625 15.2343 7.40625 12.7499 7.07812C9.32803 6.5625 6.46866 9.51562 7.07803 12.9375C7.40616 14.8594 8.90616 16.4062 10.7812 16.875C12.6562 17.2969 14.3905 16.6875 15.5624 15.5625C16.453 16.7812 18.1874 17.3906 19.828 16.7344C21.1874 16.2188 21.9843 14.8594 21.9843 13.4062V12.3281C21.9843 7.03125 17.9999 2.39062 12.703 2.01562ZM11.9999 15C10.3593 15 8.99991 13.6406 8.99991 12C8.99991 10.3594 10.3593 9 11.9999 9C13.6405 9 14.9999 10.3594 14.9999 12C14.9999 13.6406 13.6405 15 11.9999 15Z" fill="#64748B"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

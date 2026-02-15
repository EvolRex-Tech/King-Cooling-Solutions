import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/20">
      <nav className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M28.7435 15.0767H24.3807L27.9095 11.5479C28.4227 11.0346 28.4227 10.2005 27.9095 9.62309C27.332 9.10981 26.4979 9.10981 25.9205 9.62309L20.5311 15.0767H17.7722V12.3178L23.2258 6.92838C23.7391 6.35094 23.7391 5.51686 23.2258 4.93942C22.6484 4.42614 21.8143 4.42614 21.301 4.93942L17.7722 8.46821V4.10534C17.7722 3.33542 17.1948 2.75798 16.4248 2.75798C15.6549 2.75798 15.0775 3.33542 15.0775 4.10534V8.46821L11.5487 4.93942C11.0354 4.42614 10.2013 4.42614 9.6239 4.93942C9.11062 5.51686 9.11062 6.35094 9.6239 6.92838L15.0775 12.3178V15.0767H12.3186L6.92918 9.62309C6.35174 9.10981 5.51766 9.10981 4.94022 9.62309C4.42695 10.2005 4.42695 11.0346 4.94022 11.5479L8.46902 15.0767H4.10615C3.33623 15.0767 2.75879 15.6541 2.75879 16.424C2.75879 17.194 3.33623 17.7714 4.10615 17.7714H8.46902L4.94022 21.3002C4.42695 21.8135 4.42695 22.6475 4.94022 23.225C5.51766 23.7383 6.35174 23.7383 6.92918 23.225L12.3186 17.7714H15.0775V20.5303L9.6239 25.9197C9.11062 26.4971 9.11062 27.3312 9.6239 27.9087C10.2013 28.4219 11.0354 28.4219 11.5487 27.9087L15.0775 24.3799V28.7427C15.0775 29.5127 15.6549 30.0901 16.4248 30.0901C17.1948 30.0901 17.7722 29.5127 17.7722 28.7427V24.3799L21.301 27.9087C21.8143 28.4219 22.6484 28.4219 23.2258 27.9087C23.7391 27.3312 23.7391 26.4971 23.2258 25.9197L17.7722 20.5303V17.7714H20.5311L25.9205 23.225C26.4979 23.7383 27.332 23.7383 27.9095 23.225C28.4227 22.6475 28.4227 21.8135 27.9095 21.3002L24.3807 17.7714H28.7435C29.5135 17.7714 30.0909 17.194 30.0909 16.424C30.0909 15.6541 29.5135 15.0767 28.7435 15.0767Z"
              fill="#1E40AF"
            />
          </svg>
          <div className="text-[27px] font-extrabold leading-[38px] tracking-tight">
            <span className="text-brand-darkText">THE KING </span>
            <span className="text-brand-blue">COOLING</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Smooth scroll handlers for single-page navigation */}
          <NavLink id="hero" label="Home" />
          <NavLink id="leadership" label="About Us" />
          <NavLink id="services" label="Services" />
          <NavLink id="catalog" label="Products" />
          <NavLink id="faq" label="FAQ" />
          <NavLink id="contact" label="Contact" />
        </div>

        {/* Contact Us Button (scroll to contact form) */}
        <NavLink
          id="contact"
          label="Contact Us"
          className="hidden md:flex items-center justify-center px-6 h-11 bg-brand-blue text-white font-semibold text-base rounded-full shadow-[0_10px_15px_-3px_rgba(30,64,175,0.20),0_4px_6px_-4px_rgba(30,64,175,0.20)] hover:bg-brand-blue/90 transition-colors"
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-darkText"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-3/4 max-w-sm h-screen bg-gradient-to-b from-white via-white to-slate-50 shadow-2xl overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header with Logo and Close Button */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M28.7435 15.0767H24.3807L27.9095 11.5479C28.4227 11.0346 28.4227 10.2005 27.9095 9.62309C27.332 9.10981 26.4979 9.10981 25.9205 9.62309L20.5311 15.0767H17.7722V12.3178L23.2258 6.92838C23.7391 6.35094 23.7391 5.51686 23.2258 4.93942C22.6484 4.42614 21.8143 4.42614 21.301 4.93942L17.7722 8.46821V4.10534C17.7722 3.33542 17.1948 2.75798 16.4248 2.75798C15.6549 2.75798 15.0775 3.33542 15.0775 4.10534V8.46821L11.5487 4.93942C11.0354 4.42614 10.2013 4.42614 9.6239 4.93942C9.11062 5.51686 9.11062 6.35094 9.6239 6.92838L15.0775 12.3178V15.0767H12.3186L6.92918 9.62309C6.35174 9.10981 5.51766 9.10981 4.94022 9.62309C4.42695 10.2005 4.42695 11.0346 4.94022 11.5479L8.46902 15.0767H4.10615C3.33623 15.0767 2.75879 15.6541 2.75879 16.424C2.75879 17.194 3.33623 17.7714 4.10615 17.7714H8.46902L4.94022 21.3002C4.42695 21.8135 4.42695 22.6475 4.94022 23.225C5.51766 23.7383 6.35174 23.7383 6.92918 23.225L12.3186 17.7714H15.0775V20.5303L9.6239 25.9197C9.11062 26.4971 9.11062 27.3312 9.6239 27.9087C10.2013 28.4219 11.0354 28.4219 11.5487 27.9087L15.0775 24.3799V28.7427C15.0775 29.5127 15.6549 30.0901 16.4248 30.0901C17.1948 30.0901 17.7722 29.5127 17.7722 28.7427V24.3799L21.301 27.9087C21.8143 28.4219 22.6484 28.4219 23.2258 27.9087C23.7391 27.3312 23.7391 26.4971 23.2258 25.9197L17.7722 20.5303V17.7714H20.5311L25.9205 23.225C26.4979 23.7383 27.332 23.7383 27.9095 23.225C28.4227 22.6475 28.4227 21.8135 27.9095 21.3002L24.3807 17.7714H28.7435C29.5135 17.7714 30.0909 17.194 30.0909 16.424C30.0909 15.6541 29.5135 15.0767 28.7435 15.0767Z" fill="#1E40AF"/>
                </svg>
                <span className="text-sm font-semibold text-brand-darkText">THE KING COOLING</span>
              </Link>
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-lg font-semibold text-slate-500 hover:text-slate-700">
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6 flex flex-col gap-1">
              <MobileNavLink id="hero" label="Home" onNavigate={() => setMenuOpen(false)} />
              <MobileNavLink id="leadership" label="About Us" onNavigate={() => setMenuOpen(false)} />
              <MobileNavLink id="services" label="Services" onNavigate={() => setMenuOpen(false)} />
              <MobileNavLink id="catalog" label="Products" onNavigate={() => setMenuOpen(false)} />
              <MobileNavLink id="faq" label="FAQ" onNavigate={() => setMenuOpen(false)} />
              <MobileNavLink id="contact" label="Contact" onNavigate={() => setMenuOpen(false)} />
            </nav>

            {/* Divider */}
            <div className="mx-4 border-t border-slate-200"></div>

            {/* CTA Button */}
            <div className="px-4 py-6">
              <MobileNavLink id="contact" label="Contact Us" className="w-full inline-flex items-center justify-center px-6 h-12 bg-brand-blue text-white font-bold text-base rounded-lg hover:bg-brand-blue/90 transition-colors shadow-md" onNavigate={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ id, label, className }: { id: string; label: string; className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (delay = 0) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector("header");
        const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (delay) setTimeout(scroll, delay);
    else scroll();
  };

  const handleClick = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
      // allow route to change and layout to render
      setTimeout(() => scrollToId(0), 160);
    } else {
      scrollToId(0);
    }
  }, [id, navigate, location.pathname]);

  const base = "text-sm font-semibold text-brand-darkText hover:text-brand-blue transition-colors";

  return (
    <button onClick={handleClick} className={`${base} ${className ?? ""}`.trim()}>
      {label}
    </button>
  );
}

function MobileNavLink({ id, label, className, onNavigate }: { id: string; label: string; className?: string; onNavigate?: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = (delay = 0) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const header = document.querySelector("header");
        const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    if (delay) setTimeout(scroll, delay);
    else scroll();
  };

  const handle = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToId(0);
        onNavigate && onNavigate();
      }, 160);
    } else {
      scrollToId(0);
      onNavigate && onNavigate();
    }
  };

  const base = "block w-full text-left px-4 py-3 text-base font-semibold text-brand-darkText hover:bg-brand-blue/8 hover:text-brand-blue rounded-lg transition-all duration-200";

  return (
    <button onClick={handle} className={`${base} ${className ?? ""}`.trim()}>
      {label}
    </button>
  );
}

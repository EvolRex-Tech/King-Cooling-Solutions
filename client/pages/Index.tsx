import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Leadership from "@/components/Leadership";
import Catalog from "@/components/Catalog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Leadership />
      <Services />
      <Catalog />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-darkText mb-6">
            {pageName} Page
          </h1>
          <p className="text-lg text-brand-grayText mb-8 max-w-2xl mx-auto">
            This page is currently under construction. Continue prompting to add content to this page or return to the homepage.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold text-base rounded-2xl hover:bg-brand-blue/90 transition-colors shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

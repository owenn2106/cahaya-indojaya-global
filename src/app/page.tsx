import About from "@/components/about";
import BrandPartners from "@/components/brand-partners";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Photos from "@/components/photos";
import Products from "@/components/products";
import Statistics from "@/components/statistics";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Statistics />
      <Products />
      <BrandPartners />
      <About />
      <Photos />
      <FAQ />

      <section id="contact" className="flex justify-center scroll-m-36">
        <div className="max-w-6xl min-h-72 w-full flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-blue text-center">
            What are you waiting for?
          </h3>
          <h3 className="text-3xl font-bold text-blue text-center mb-4">
            Get your quote now!
          </h3>
          <a
            href="https://wa.me/6282295231468"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Get a Quote</Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Navbar from "@/app/components/landingPage/Navbar";
import Hero from "@/app/components/landingPage/Hero";
import TrendingEvents from "@/app/components/landingPage/TrendingEvents";
import Categories from "@/app/components/landingPage/Categories";
import FeaturedEvent from "@/app/components/landingPage/FeaturedEvent";
import PromoCountdown from "@/app/components/landingPage/PromoCountdown";
import ArtistSection from "@/app/components/landingPage/ArtistSection";
import WhyChoose from "@/app/components/landingPage/WhyChoose";
import Testimonial from "@/app/components/landingPage/Testimonial";
import FAQ from "@/app/components/landingPage/FAQ";
import Newsletter from "@/app/components/landingPage/Newsletter";
import Footer from "@/app/components/landingPage/Footer";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />

      <Hero />
      <TrendingEvents />
      <Categories />
      <FeaturedEvent />
      <PromoCountdown />
      <ArtistSection />
      <WhyChoose />
      <Testimonial />
      <FAQ />
      <Newsletter />

      <Footer />
    </main>
  );
}
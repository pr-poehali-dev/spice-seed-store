import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScovilleScale from "@/components/ScovilleScale";
import CatalogSection from "@/components/CatalogSection";
import BlogSection from "@/components/BlogSection";
import ReviewsSection from "@/components/ReviewsSection";
import GrowingGuide from "@/components/GrowingGuide";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import { PepperVariety } from "@/data/peppers";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (pepper: PepperVariety) => {
    setCartCount((prev) => prev + 1);
    console.log("Added to cart:", pepper.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <Header cartCount={cartCount} />
      <HeroSection />
      <ScovilleScale />
      <CatalogSection onAddToCart={handleAddToCart} />
      <BlogSection />
      <ReviewsSection />
      <GrowingGuide />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;

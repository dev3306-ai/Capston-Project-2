import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
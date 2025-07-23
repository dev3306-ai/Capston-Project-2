import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Testimonials from "./components/Testimonials";
import PopularSubjects from "./components/PopularSubjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <PopularSubjects />
      <Testimonials />
      <Footer />
    </div>
  );
}

import Contact from "./contact";
import Differentials from "./differentials";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Problems from "./problems";
import Process from "./process";
import Services from "./services";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Services />
        <Process />
        <Differentials />
        <Contact />
      </main>
        <Footer />
    </div>
  );
}

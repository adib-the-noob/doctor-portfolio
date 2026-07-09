import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
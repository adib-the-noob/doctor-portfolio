import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeSection from "@/components/PracticeSection";
import Specializations from "@/components/Specializations";
import Credentials from "@/components/Credentials";
import Patients from "@/components/Patients";
import Journal from "@/components/Journal";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeSection />
        <Specializations />
        <Credentials />
        <Patients />
        <Journal />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
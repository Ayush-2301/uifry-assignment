import Advantages from "@/components/advantages";
import Download from "@/components/download";
import FAQs from "@/components/faqs";
import Footer from "@/components/footer";
import Gradient from "@/components/gradient";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Star from "@/components/star";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      {/* <Star className=" absolute top-[50px] right-[5px] rotate-45" /> */}
      <Gradient className=" overflow-hidden z-[-20] absolute right-0 md:left-[10%] top-[10%] dark:top-[40%]" />
      <Hero />
      <Section />
      <Advantages />
      <Testimonials />
      <FAQs />
      <Download />
      <Footer />
    </div>
  );
}

import ContentHome from "../components/Home/Content";
import Jumbotron from "../components/Home/Jumbotron";
import Testimonial from "../components/Home/Testimonial";
import WhyChoseUs from "../components/Home/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <ContentHome />
      <WhyChoseUs />
      <Testimonial />
    </>
  )
};

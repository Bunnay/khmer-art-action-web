import SlideShow from "../components/Home/SlideShow";
import Purposes from "../components/Home/Purposes";
import Testimonials from "../components/Home/Testimonials";
import Sponsors from "../components/Home/Sponsors";
import Guest from "../components/Layouts/Guest";

export default function Home() {
  return (
    <>
      <Guest>
        <SlideShow></SlideShow>
        <Purposes></Purposes>
        <Testimonials></Testimonials>
        <Sponsors></Sponsors>
      </Guest>
    </>
  );
}

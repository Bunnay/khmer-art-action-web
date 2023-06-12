import History from "../components/AboutUs/History";
import Teams from "../components/AboutUs/Teams";
import Guest from "../components/Layouts/Guest";

export default function AboutUs() {
  return (
    <>
      <Guest>
        <History></History>
        <Teams></Teams>
      </Guest>
    </>
  );
}

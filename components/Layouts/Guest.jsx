import Navbar from "./../Navbar";
import Footer from "./../Footer";

export default function Guest({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;

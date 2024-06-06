import Image from "next/image";
import Header from "./components/header";
import Main from "./components/home";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

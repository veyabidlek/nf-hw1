import Footer from "../components/footer";
import Team from "../components/about";
import Header from "../components/header";
export const metadata = {
  title: "About",
  description: "About",
};
export default function About() {
  return (
    <div>
      <Header />
      <Team />
      <Footer />
    </div>
  );
}

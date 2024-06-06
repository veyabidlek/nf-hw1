import Card from "../components/posts";
import Footer from "../components/footer";
import Header from "../components/header";
export const metadata = {
  title: "Blog",
  description: "Blog",
};
export default function Blog() {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

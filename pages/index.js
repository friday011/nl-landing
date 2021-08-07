import About from "../components/About";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import Reports from "../components/Reports";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Gallery />
      <Reports />
      <Testimonials />
      <Newsletter />
    </Layout>
  );
};

export default Home;

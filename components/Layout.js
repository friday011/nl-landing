import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ title, children, keywords, description }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};
// #CB313E

Layout.defaultProps = {
  title: "The Media Rumble",
  description: "News what it can be.",
  keywords: "The Media Rumble, TMR, Newslaundry",
};

export default Layout;

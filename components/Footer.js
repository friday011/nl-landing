import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full flex-shrink-0 mt-20">
      <div className="w-full h-full max-w-7xl mx-auto">
        <main className="h-full p-4 flex flex-col-reverse sm:flex-row gap-8">
          <div className="w-full">
            <p className="font-medium text-center sm:text-left">
              &copy; Copyright 2017 - {new Date().getFullYear()} by Newslaundry
              and Teamwork Arts.
            </p>
          </div>
          <div className="w-full flex items-center justify-center sm:justify-end space-x-4">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://themediarumble.com/"
              target="_blank"
            >
              <FaFacebookF className="h-5 w-5" color="#4869A7" />
            </a>
            <a
              href="https://twitter.com/intent/tweet?url=https://themediarumble.com/&text=Home%20-%20The%20Media%20Rumble&hashtags="
              target="_blank"
            >
              <FaTwitter className="h-5 w-5" color="#5EAADA" />
            </a>
            <a
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://themediarumble.com/&title=Home%20-%20The%20Media%20Rumble&summary=&source="
              target="_blank"
            >
              <FaLinkedinIn className="h-5 w-5" color="#0779B2" />
            </a>
            <a
              href="https://plus.google.com/share?url=https://themediarumble.com/"
              target="_blank"
            >
              <FaGooglePlusG className="h-5 w-5" color="#DC5047" />
            </a>
            <a
              href="mailto:someone@example.com%20?&subject=Home%20-%20The%20Media%20Rumble&body=https://themediarumble.com/"
              target="_blank"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/?text=https://themediarumble.com/"
              target="_blank"
            >
              <FaWhatsapp className="h-5 w-5" color="#63F780" />
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Footer;

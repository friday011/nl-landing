const testimonials = [
  {
    name: "Vivian Schiller",
    designation: "CEO, The Civil Foundation, New York",
    image: "./images/vivian-schiller.png",
    message:
      "What a fantastic conference! I had an incredible experience. So many interesting insights and fascinating people. Thank you so much for having me. I hope that I was able to contribute even just a little.",
    footer: "SPEAKER 2019",
  },
  {
    name: "Milind Khandekar",
    designation: "Digital Editor, India BBC",
    image: "./images/milind-khandekar.png",
    message:
      "I got lots of insights about media trends through various sessions. The only suggestion I would like to make is to increase the sessions on Indian languages.",
    footer: "SPEAKER 2019",
  },
  {
    name: "Sreenivasan Jain",
    designation: "Journalist and Anchor, NDTV",
    image: "./images/sreenivasan-jain.png",
    message:
      "It is always great to talk to others on a panel and get a perspective from different countries. These are very important conversations that the media needs to be having at this time, and The Media Rumble certainly seems to be having them…it is a good chance to ventilate a lot of the stuff that I guess people feel in their newsroom and organization and perhaps can’t talk about.",
    footer: "TMR SPEAKER 2018",
  },
];

const Testimonials = () => {
  return (
    <section className="sub-section">
      <div className="container">
        <main className="h-full px-4 flex flex-col gap-8">
          <h2 className="section-sub-heading">What they say.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {testimonials.map((item, i) => (
              <div key={i} className="flex flex-col space-y-4">
                <div className="w-full h-60 p-4 rounded shadow bg-white flex flex-col justify-between space-y-2">
                  <div id="testimonials-card" className="h-full overflow-auto">
                    <article className="pr-1">
                      <span className="font-bold text-primary text-lg">“</span>
                      {item.message}
                      <span className="font-bold text-primary text-lg">“</span>
                    </article>
                  </div>
                  <p className="text-center font-medium">{item.footer}</p>
                </div>
                <div className="w-full flex items-center justify-start lg:justify-center space-x-2">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 sm:h-16 sm:w-16 shadow rounded-full overflow-hidden"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <p className="font-medium text-sm">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Testimonials;

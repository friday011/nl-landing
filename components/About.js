const About = () => {
  return (
    <section className="sub-section">
      <div className="container">
        <main className="h-full px-4 flex flex-col justify-center gap-8">
          <h2 className="section-sub-heading">About Us.</h2>
          <div className="flex-shrink-0 h-full flex flex-col lg:flex-row justify-center space-y-4">
            <div className="flex-1 flex-shrink-0 h-full flex flex-col space-y-4">
              <article className="font-medium sm:text-lg text-center lg:text-left">
                Started in 2017, TMR has grown into South Asia's largest media
                forum. It brings together leading news professionals, tech
                innovators, policymakers, filmmakers, and investors from across
                the world to discuss the future of news, tech and policy.
              </article>
              <article className="font-medium sm:text-lg text-center lg:text-left">
                Newslaundry & Teamwork Arts come together to present the fourth
                edition of TMR. Titled TMR@Online, this edition of the forum
                will be entirely digital and is slated for September 2020. Stay
                tuned for more details.
              </article>
            </div>
            <div className="flex-1 flex-shrink-0 h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/wd0VKUYN_m4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default About;

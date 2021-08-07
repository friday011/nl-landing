const Hero = () => {
  return (
    <section className="w-full flex-shrink-0 h-screen -mt-16">
      <div className="container">
        <main className="h-full px-4 flex flex-col sm:flex-row justify-center gap-8">
          <div className="flex-1 flex-shrink-0 h-full flex flex-col justify-center items-start space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight">
              Coming Soon!
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
              <span className="text-primary">TMR</span>@Online 2021
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight">
              The Media Rumble in an all new virtual avatar.
            </p>
            <button className="btn-primary">Watch Sessions from 2020</button>
          </div>
          <div className="flex-1 flex-shrink-0 h-full flex items-center justify-center">
            <img src="./images/newspaper.svg" alt="hero-bg-image" />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Hero;

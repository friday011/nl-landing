const Newsletter = () => {
  return (
    <section className="sub-section">
      <div className="container">
        <main className="h-full px-4 flex flex-col md:flex-row gap-8">
          <div className="w-full flex flex-col space-y-4">
            <h2 className="section-sub-heading">Want more news and updates?</h2>
            <p className="text-lg text-center sm:text-left sm:text-xl md:text-2xl font-bold leading-tight tracking-tight">
              Subscribe to our mailing list to stay tuned on our updates.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center">
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
              <input
                type="text"
                className="w-full px-4 py-3 font-medium rounded shadow outline-none focus:outline-none"
                placeholder="Enter your email."
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Newsletter;

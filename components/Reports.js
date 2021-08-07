const Reports = () => {
  return (
    <section className="sub-section">
      <div className="container">
        <main className="h-full px-4 flex flex-col gap-8">
          <h2 className="section-sub-heading">
            <span className="text-primary">TMR</span> Reports.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-2 items-center justify-center">
              <img
                src="./images/report1.jpg"
                alt="report1"
                className="link-img"
              />
              <p className="font-bold text-lg sm:text-xl">
                <span className="text-primary">TMR</span> Gender Report 2020
              </p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <img
                src="./images/report2.jpg"
                alt="report2"
                className="link-img"
              />
              <p className="font-bold text-lg sm:text-xl">
                <span className="text-primary">TMR</span> Gender Report 2019
              </p>
            </div>
            <div className="flex flex-col space-y-2 items-center justify-center">
              <img
                src="./images/report3.jpg"
                alt="report3"
                className="link-img"
              />
              <p className="font-bold text-lg sm:text-xl">
                <span className="text-primary">TMR</span> Caste Report 2019
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Reports;

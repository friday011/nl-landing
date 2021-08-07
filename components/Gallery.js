const Gallery = () => {
  return (
    <section className="sub-section">
      <div className="container">
        <main className="h-full px-4 flex flex-col gap-8">
          <h2 className="section-sub-heading">Gallery.</h2>
          <div className="grid-4-cols">
            <a
              href="https://youtu.be/pqlQvsGucyE"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="./images/gallery1.jpg"
                alt="gallery1"
                className="w-full h-full cursor-pointer rounded shadow object-cover"
              />
            </a>
            <a
              href="https://youtu.be/2fwMHLA1juI"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="./images/gallery2.jpg"
                alt="gallery2"
                className="link-img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=-DLNRyWxoqI"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="./images/gallery3.jpg"
                alt="gallery3"
                className="link-img"
              />
            </a>
            <a
              href="https://www.youtube.com/watch?v=WSoj70EROgs"
              target="_blank"
              className="flex items-center justify-center"
            >
              <img
                src="./images/gallery4.jpg"
                alt="gallery4"
                className="link-img"
              />
            </a>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Gallery;

const defaultVideos = [
  {
    title: "This is a title",
    description:
      "Eurolit consulted and constructed the floor for this 35,000m2 Jointless SFRC Logistics center in 2008. The floor flatness meets the DIN 15185 specification, suitable for VNA operation. The high degree in automation implemented by this facility lead to the European supply chain excellence award in 2009.",
    src: "https://www.youtube.com/embed/8PZP4pWdwN0?si=_3bXM24yZ9dhEY_u",
  },
  {
    title: "This is a title",
    description:
      "Eurolit consulted and constructed the floor for this 35,000m2 Jointless SFRC Logistics center in 2008. The floor flatness meets the DIN 15185 specification, suitable for VNA operation. The high degree in automation implemented by this facility lead to the European supply chain excellence award in 2009.",
    src: "https://www.youtube.com/embed/8PZP4pWdwN0?si=_3bXM24yZ9dhEY_u",
  },
  {
    title: "This is a title",
    description:
      "Eurolit consulted and constructed the floor for this 35,000m2 Jointless SFRC Logistics center in 2008. The floor flatness meets the DIN 15185 specification, suitable for VNA operation. The high degree in automation implemented by this facility lead to the European supply chain excellence award in 2009.",
    src: "https://www.youtube.com/embed/8PZP4pWdwN0?si=_3bXM24yZ9dhEY_u",
  },
  {
    title: "This is a title",
    description:
      "Eurolit consulted and constructed the floor for this 35,000m2 Jointless SFRC Logistics center in 2008. The floor flatness meets the DIN 15185 specification, suitable for VNA operation. The high degree in automation implemented by this facility lead to the European supply chain excellence award in 2009.",
    src: "https://www.youtube.com/embed/8PZP4pWdwN0?si=_3bXM24yZ9dhEY_u",
  },
  {
    title: "This is a title",
    description:
      "Eurolit consulted and constructed the floor for this 35,000m2 Jointless SFRC Logistics center in 2008. The floor flatness meets the DIN 15185 specification, suitable for VNA operation. The high degree in automation implemented by this facility lead to the European supply chain excellence award in 2009.",
    src: "https://www.youtube.com/embed/8PZP4pWdwN0?si=_3bXM24yZ9dhEY_u",
  },
];

export default function VideosSection({ videos = defaultVideos }) {
  return (
    <div className="container my-7 flex flex-col gap-y-32">
      {/** video card */}
      {videos.map((video) => {
        return <Video key={crypto.randomUUID()} video={video} />;
      })}
    </div>
  );
}

function Video({ video }) {
  const { title, description, src } = video;
  return (
    <div className="flex flex-col md:flex-row gap-8 group">
      {/**video */}
      <div className="w-full">
        <iframe
          className="w-full aspect-video"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/** description */}
      <div className="w-full md:group-even:-order-1">
        <h2 className="text-3xl text-secondary mb-5">{title}</h2>
        <p className="text-gray-800 text-justify">{description}</p>
      </div>
    </div>
  );
}

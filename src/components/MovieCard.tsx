import "../index.css";

interface MovieCardProps {
  title: string;
  img: string;
  desc: string;
  nr: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, img, desc, nr }) => {
  // remove html tags
  desc = desc.replace(/<[^>]*>/g, "");

  // shotren text if longer than 100 chars
  if (desc.length > 100) {
    desc = desc.substring(0, 100) + "...";
  }

  return (
    <div className={nr !== 1 ? "image-container inv-res" : "image-container"}>
      <img
        src={img}
        alt={title}
      />
      <p className="description">{desc}</p>
    </div>
  );
};

export default MovieCard;

import type { IShowcase } from "../interfaces/IShowcase";

const ShowcaseCard = ({ title, image_Thumbnail }: IShowcase) => {
  return (
    <article className="relative group shadow-lg rounded overflow-hidden cursor-pointer">
      <img
        src={"/images/" + image_Thumbnail}
        alt={title}
        className="w-full h-[260px] object-cover"
      />
      <div className="absolute inset-0 bg-marble/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-xl font-semibold">{title}</span>
      </div>
    </article>
  );
};

export default ShowcaseCard;

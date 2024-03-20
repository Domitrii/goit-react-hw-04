import css from "./ImageCard.module.css";

const ImageCard = ({ data, onSelect }) => {
  return (
    <div
      onClick={() =>
        onSelect(true, {
          src: data.urls.regular,
          description: data.description,
        })
      }
    >
      <img
        className={css.imgItem}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default ImageCard;
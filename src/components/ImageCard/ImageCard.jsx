import css from "./ImageCard.module.css";

const ImageCard = ({ data, onSelect }) => {
  return (
    <div>
      <img
      onClick={() =>
        onSelect(true, {
          src: data.urls.regular,
          description: data.description,
        })
      }
        className={css.imgItem}
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default ImageCard;
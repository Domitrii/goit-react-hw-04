import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

function ImageGallery({items, onSelect}) {
  return (
    <ul className={css.list}>
        {items.map(item => {
            return (
                <li key={item.id}>
                    <ImageCard data={item} onSelect={onSelect} />
                </li>
            )
        })}
    </ul>
  )
}

export default ImageGallery
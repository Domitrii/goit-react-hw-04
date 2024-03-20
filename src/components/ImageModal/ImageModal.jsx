import Modal from "react-modal";
import css from './ImageModal.module.css'

Modal.setAppElement(document.getElementById("root"));
function ImageModal({closeModal, isOpen = false, photo }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={() => closeModal(false)}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    preventScroll={true}
    className={css.modalStyle}>
      <img src={photo.src} alt={photo.description} className={css.modalImg} />
      <p className={css.photoAlt}>{photo.description}</p>
    </Modal>
  )
}

export default ImageModal
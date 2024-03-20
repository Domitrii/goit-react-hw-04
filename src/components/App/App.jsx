import { useEffect, useState } from 'react'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import ApiService from '../APIServices/photos'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageGallery from '../ImageGallery/ImageGallery'
import ImageModal from '../ImageModal/ImageModal'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'

function App() {
  const [photo, setPhoto] = useState('')
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [BtnLoadMore, setBtnLoadMore] = useState(false)
  const [error, setError] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState({
    src: "",
    desription: "",
  });

  const searchPhoto = (value) => {
    setQuery(value);
    setBtnLoadMore(false);
    setPage(1);
    setPhoto([]);
    setError(false);
  };

  useEffect(() => {
    async function fetchData() {
      try{
        const { results, total_pages } = await ApiService(query, page);
        setLoaderVisible(true)
          setBtnLoadMore(total_pages > page)
          setPhoto((prevPhoto) => {
            return [...prevPhoto, ...results];
          });
              if(results.length === 0){
                toast.error('not find')
              } 
        } catch(error){
          console.log(error)
        } finally {
          setLoaderVisible(false)
        }
      }

      fetchData()
  }, [query, page])

  function openModal(state, photo) {
    setModalIsOpen(true);
    if (state) setSelectedPhoto(photo);
  }

  function closeModal () {
    setModalIsOpen(false)
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
  }

return (
      <>
      <Toaster position='top-center' />
       <SearchBar SearchWord={searchPhoto}  />
       {error && <ErrorMessage />}
       {loaderVisible && <Loader />}
       {photo.length > 0 && <ImageGallery items={photo} onSelect={openModal} />}
       {BtnLoadMore && <LoadMoreBtn loadMore={loadMore} />}
       <ImageModal closeModal={closeModal} isOpen={modalIsOpen} photo={selectedPhoto} />
      </>
  )
}

export default App

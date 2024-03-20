import { Formik, Form, Field } from 'formik'
import toast from 'react-hot-toast'
import css from './SearchBar.module.css'

function SearchBar({SearchWord}) {
    const handleSubmit= (value) => {
         
        if(!value.query.trim()){
            return toast.error('write something pls')
        }
        SearchWord(value.query)
        console.log(value.query)
        value.query = ''
        console.log(value.query)
    }

  return (
    <Formik initialValues={{query: ''}} onSubmit={handleSubmit} >
          <Form className={css.form}>
            <Field 
            type="text"
            name="query" 
            className={css.input}
            placeholder="Search a photo"></Field>
            <button type='submit' className={css.searchButton}>Submit</button>
          </Form>
      </Formik>
  )
}

export default SearchBar
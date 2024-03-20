import css from './LoadMoreButton.module.css';

function LoadMoreBtn({loadMore}) {
  return (
    <div className={css.container}>
    <button className={css.button} type="button" onClick={loadMore}>
        LoadMoreBtn
    </button>
    </div>
  )
}

export default LoadMoreBtn
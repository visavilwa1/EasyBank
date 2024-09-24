/* eslint-disable react/prop-types */
import styles from './Article.module.css'

function Article({image, creator, title, text}) {
    return (
        <div className={styles.article}>
            <img src={image} alt="" />
            <div className={styles.articleContent}>
            <p className={styles.articleCreator}>By {creator}</p>
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </div>
    )
}

export default Article

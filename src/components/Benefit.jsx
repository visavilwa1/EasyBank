import styles from './Benefit.module.css'

function Benefit({image, title, children}) {
    return (
        <div className={styles.benefit}>
            <img src={image} alt="" /> 
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default Benefit

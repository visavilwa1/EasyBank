import Article from './Article'
import styles from './Articles.module.css'

function Articles() {
    return (
        <div className={styles.articles}>
            <h2>Latest Articles</h2>

<div className={styles.articlesContent}>
            <Article image='./images/image-currency.jpg' creator='Claire Robinson' title='Receive money in any currency with no fees' text='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …' />

            <Article image='./images/image-restaurant.jpg' creator='Wilson Hutton' title='Treat yourself without worrying about money' text='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …' />

            <Article image='./images/image-plane.jpg' creator='Wilson Hutton' title='Take your Easybank card wherever you go' text='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …' />
            
            <Article image='./images/image-confetti.jpg' creator='Claire Robinson' title='Our invite-only Beta accounts are now live!' text='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...' />
        </div>
        </div>
    )
}

export default Articles

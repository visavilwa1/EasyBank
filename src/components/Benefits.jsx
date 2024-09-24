import Benefit from './Benefit'
import styles from './Benefits.module.css'

function Benefits() {
    return (
        <div className={styles.benefits}>
            <div>
            <h2>Why choose Easybank?</h2>
            <p className={styles.benefitsDesc}>We leverage Open Banking to turn your bank account into your financial hub.<br></br> Control your finances like never before.</p>
            </div>
            <div className={styles.benefitsContainer}>
            <Benefit image='./images/icon-online.svg' title='Online Banking' >Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</Benefit>
            <Benefit image='./images/icon-budgeting.svg' title='Simple Budgeting' >See exactly where your money goes each month. Receive notifications when you&apos;re close to hitting your limits.</Benefit>
            <Benefit image='./images/icon-onboarding.svg' title='Fast Onboarding' >We don&apos;t do branches. Open your account in minutes online and start taking control of your finances right away.</Benefit>
            <Benefit image='./images/icon-api.svg' title='Open API' >Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</Benefit>
            </div>
        </div>
    )
}

export default Benefits

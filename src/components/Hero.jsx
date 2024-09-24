import Button from "./Button";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      {/* <img src="./images/bg-intro-desktop.svg" alt="" /> */}
      <img src="./images/image-mockups.png" alt="" />
      <div className={styles.heroContent}>
      <h1>Next generation digital banking</h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spendings, saving, budgeting, investing, and much
        more.
      </p>
      <Button>Request Invite</Button>
      </div>
    </div>
  );
}

export default Hero;

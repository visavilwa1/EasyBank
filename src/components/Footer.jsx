import Button from "./Button";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.fullFooter}>
        <div className={styles.socialsLogo}>
      <img src="./images/logo__white.png" alt="" />
      <div className={styles.socials}>
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-youtube.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
        <img src="./images/icon-pinterest.svg" alt="" />
        <img src="./images/icon-instagram.svg" alt="" />
      </div>
      </div>

      <div className={styles.links}>
        <div>
        <div>About us</div>
        <div>Contact</div>
        <div>blog</div>
        </div>
        <div>
        <div>careers</div>
        <div>support</div>
        <div>privacy policy</div>
        </div>
      </div>
      </div>

<div>
      <Button>Request Invite</Button>
      <p>©Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

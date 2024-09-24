import { useState } from "react";
import { useBank } from "../contexts/EasyBankProvider";
import Button from "./Button";
import styles from "./Navigation.module.css";

function NavigationMobile() {
  const { isMobile } = useBank();
  const [imageUrl, setImageUrl] = useState('./images/icon-hamburger.svg')
  const isOpen = imageUrl === './images/icon-close.svg'

    function handleOpenNav() {
        setImageUrl(url => url === './images/icon-hamburger.svg' ? './images/icon-close.svg' : './images/icon-hamburger.svg')
    }

  return (
    <>
      {isMobile ? (
        <header className={styles.headerMobile}>
          <img src="./images/logo.svg" alt="" />
          <img src={imageUrl} alt="" onClick={handleOpenNav} />
          <ul className={isOpen ? styles.mobileUlOpen : ''}>
          <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>blog</li>
            <li>careers</li>
          </ul>
        </header>
      ) : (
        <header className={styles.headerDesktop}>
          <img src="./images/logo.svg" alt="" />
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>blog</li>
            <li>careers</li>
          </ul>
          <Button>Request Invite</Button>
        </header>
      )}
    </>
  );
}

export default NavigationMobile;

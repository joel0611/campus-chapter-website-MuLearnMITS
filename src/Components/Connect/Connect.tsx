import styles from "./Connect.module.css";
import image from './assets/image.svg'
import { Discord,Whatsapp } from "./assets/svg";

const Connect = () => {
  return (
    <div className={styles.ConnectWrapper}>
      <h1>Connect With Us</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.innerContent}>
          <div>
            <h2>Join µLearn CCE Discord server!</h2>
            <p>
              Do join our campus community discord server, so you don’t miss out
              any of the updates.
            </p>
          </div>
          <div className={styles.socialMedia}>
            <a href="" className={styles.discord}>
              <Discord />
              Join Discord
            </a>
            <a href="" className={styles.Whatsapp}>
              <Whatsapp />
              Join Whatsapp
            </a>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Connect;

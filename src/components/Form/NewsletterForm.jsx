import { ReactComponent as Success } from "../../assets/images/icon-success.svg";
import SuccessMessage from "./SuccessMessage";
import styles from "./NewsletterForm.module.css";
import Button from "../ui/button";

const NewsletterFrom = () => {
    return <div>
        <div className={styles.bg} />
        <form className={styles.form}>
            <h2 className={styles.title}>
                Stay updated!
            </h2>
            <p className={styles.desc}>
                Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Success aria-hidden={true} focusable={false} />
                    <p>Product discovery and building what matters</p>
                </li>
                <li className={styles.item}>
                    <Success aria-hidden={true} focusable={false} />
                    <p>Measuring to ensure updates are a success</p>
                </li>
                <li className={styles.item}>
                    <Success aria-hidden={true} focusable={false} />
                    <p>And much more!</p>
                </li>
            </ul>
            <div className={styles["email-container"]}>
                <label className={styles["email-label"]}>Email address</label>
                <input className={styles["email-input"]} type="email" placeholder="email@company.com" />
            </div>
            <div className={styles.submit}>
                <Button>
                    Subscribe to monthly newsletter
                </Button>
            </div>
            <button>

            </button>
        </form>
        <SuccessMessage />
    </div>
}

export default NewsletterFrom;
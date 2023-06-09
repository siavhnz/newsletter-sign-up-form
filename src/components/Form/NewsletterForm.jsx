import { ReactComponent as Success } from "../../assets/images/icon-success.svg";
import SuccessMessage from "./SuccessMessage";
import styles from "./NewsletterForm.module.css";
import Button from "../ui/Button";
import { useRef, useState } from "react";

const NewsletterFrom = () => {

    const [state, setState] = useState({
        openModal: false,
        isEmailValid: false,
        hasFormError: false,
    })
    const emailInput = useRef();

    const handleModalOpen = () => {
        setState((prevState) => {
            return {
                ...prevState,
                openModal: true
            }
        });
    };

    const handleModalClose = () => {
        setState((prevState) => {
            return {
                ...prevState,
                openModal: false
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(emailInput.current.value)
        if (isEmailValid) {
            setState({ openModal: true, isEmailValid: true, hasFormError: false });
        } else {
            setState({ openModal: false, isEmailValid: false, hasFormError: true });
        }
    }

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const emailInputClass = (state.hasFormError && !state.isEmailValid) ?
        `${styles["email-input"]} ${styles["input-error"]}` :
        styles["email-input"]

    return <div className={styles.container}>
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
                <div className={styles["label-container"]}>
                    <label className={styles["email-label"]}>Email address</label>
                    {
                        state.hasFormError && !state.isEmailValid && <label className={styles.error}>
                            Valid email required
                        </label>
                    }
                </div>

                <input ref={emailInput} className={emailInputClass} type="email" placeholder="email@company.com" />
            </div>
            <div className={styles.submit}>
                <Button onClick={handleSubmit}>
                    Subscribe to monthly newsletter
                </Button>
            </div>
            <button>

            </button>
        </form>
        <SuccessMessage isOpen={state.openModal} handleOpen={handleModalOpen} handleClose={handleModalClose} />
    </div>
}

export default NewsletterFrom;
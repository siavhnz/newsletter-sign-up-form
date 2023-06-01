import { Modal } from "@mui/material";
import { ReactComponent as Success } from "../../assets/images/icon-success.svg";
import { useState } from "react";
import styles from "./SuccessMessage.module.css";
import Button from "../ui/button";

const SuccessMessage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return <Modal open={true} onClose={handleClose}>
        <div className={styles.box}>
            <div className={styles.icon}>
                <Success aria-hidden={true} focusable={false} />
            </div>
            <h2 className={styles.title}>
                Thanks for subscribing!
            </h2>
            <p className={styles.desc}>
                A confirmation email has been sent to <a className={styles.link}>ash@loremcompany.com.</a> Please open it and click the button inside to confirm your subscription.
            </p>
            <div className={styles.submit}>
                <Button onClose={handleClose}>Dismiss message</Button>
            </div>
        </div>
    </Modal>
}

export default SuccessMessage;
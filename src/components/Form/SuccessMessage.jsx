import { Modal } from "@mui/material";
import { ReactComponent as Success } from "../../assets/images/icon-success.svg";
import styles from "./SuccessMessage.module.css";
import Button from "../ui/button";

const SuccessMessage = ({ isOpen, handleOpen, handleClose }) => {

    return <Modal componentsProps={{ backdrop: { style: { backgroundColor: "hsl(235, 18%, 26%)" } } }}
        open={isOpen}
        onClose={handleClose}>
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
                <Button onClick={handleClose}>Dismiss message</Button>
            </div>
        </div>
    </Modal>
}

export default SuccessMessage;
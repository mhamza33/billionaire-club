import styles from "../styles/Layout.module.css";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftside}>
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={styles.buttons}>
          <Button
            sx={{
              color: "#B5B5B5",
              textTransform: "none",
            }}
          >
            Terms of Service
          </Button>
          <Button
            sx={{
              color: "#B5B5B5",
              textTransform: "none",
            }}
            style={{ marginLeft: "20px" }}
          >
            Privacy Policy
          </Button>
        </div>
      </div>
      <div>
        <img src="/socialmedia.svg" alt="Sorry!" />
      </div>
    </div>
  );
};

export default Footer;

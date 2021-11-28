import styles from "../styles/Layout.module.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <Typography
        variant="h1"
        style={{ fontSize: "3em" }}
        className={styles.text}
      >
        Get Aped With Us
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h2"
          style={{
            marginTop: "30px",
            fontSize: "1.5em",
            width: "24%",
            textAlign: "center",
            padding: "0.3em",
            borderBottom: "3px solid #4801FF",
            //   borderTop: "3px",
            //   borderRight: "3px",
            //   borderBottom: "3px",
          }}
        >
          Sign up for our newsletter
          <img src="/cursor.svg" alt="Sorry!" style={{ width: "30px" }} />
        </Typography>
      </div>
    </div>
  );
};

export default NewsLetter;

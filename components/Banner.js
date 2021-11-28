import { Typography } from "@mui/material";
import styles from "../styles/Layout.module.css";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerDetails}>
        <Typography
          variant="h1"
          style={{ color: "#E2C668", fontSize: "4em", marginBottom: "20px" }}
        >
          The Golden Guests
        </Typography>
        <Typography variant="h3" style={{ marginBottom: "20px" }}>
          The Golden Guests edition by the Billionaire Club are the rarest NFTs.
          They are all hand drawn and have no element in common with the regular
          collection.
        </Typography>
        <Button
          variant="h2"
          style={{
            marginTop: "20px",
            padding: "2em",
            color: "white",
            fontSize: "18px",
            borderRadius: "0px",
            textTransform: "none",
            marginLeft: "17px",
            background: "linear-gradient(to right, #7918F2, #4801FF)",
            padding: "0.5em -1em 0.5em 0.5em ",
            boxShadow: "-12px -12px black",
          }}
        >
          Join us to register for the Presale
        </Button>
      </div>
      <div className={styles.bannerImage}>
        <img src="/ticket.svg" alt="Sorry!" />
      </div>
    </div>
  );
};

export default Banner;

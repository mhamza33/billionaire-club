import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styles from "../styles/Layout.module.css";

const Landing = () => {
  return (
    <div className={styles.landing} color="secondary">
      <div className={styles.dollar}>
        <img
          src="/dollar-monkey.svg"
          alt="Dollor-Monkey!"
          style={{
            width: "55vw",
          }}
        />
      </div>
      <div className={styles.markups}>
        <div className={styles.heading}>
          <Typography variant="h1">
            EXCLUSIVE{" "}
            <img
              src="bars.svg"
              alt="Sorry!"
              style={{ width: "40px", marginBottom: "50px" }}
            />
          </Typography>
          <Typography
            className={styles.text}
            style={{ marginLeft: "6em", marginBottom: "2.2em" }}
            variant="h4"
          >
            newest NFT release
          </Typography>
        </div>
        <div className={styles.heading}>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            The{" "}
            <span style={{ color: "white", fontWeight: "600" }}>
              BILLIONAIRE CLUB
            </span>{" "}
            is a private collection of 10 000 billionaire apes NFTs—unique
            digital collectibles. The apes are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS. <br />
            <span
              style={{
                color: "#7918F2",
                display: "flex",
                justifyContent: "right",
              }}
            >
              Reveal on October 20th.
            </span>
          </Typography>
        </div>
        <div className={styles.register}>
          <input
            type="email"
            placeholder="your@email.com|"
            style={{
              border: "2px solid #7918F2",
              outline: "none",
              textAlign: "center",
              padding: "17px 60px",
              fontSize: "16px",
            }}
          />
          <Button
            variant="contained"
            size="small"
            style={{
              borderRadius: "0px",
              marginLeft: "8px",
              padding: "8px 34px",
              backgroundImage:
                "linear-gradient(to right, #AC32E4, #7918F2, #4801FF)",
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

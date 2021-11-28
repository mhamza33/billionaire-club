import { Typography } from "@mui/material";
import React from "react";
import styles from "../styles/Layout.module.css";
import Card from "./Card";

const Cards = (props) => {
  return (
    <div className={styles.mainCollection}>
      <div className={styles.name}>
        <Typography variant="h1" className={styles.topHeading}>
          Collection
        </Typography>
        <Typography
          variant="h3"
          style={{ color: "#fgfgfg", padding: "0 8em 0 0", margin: "1.5em 0" }}
        >
          With more than 180+ hand drawn traits, each NFT is unique and comes
          with a membership to an exclusive group of successful investors. Join
          an ambitious ever-growing community with multiple benefits and
          utilities.
        </Typography>
      </div>
      <div className={styles.collection}>
        <div>
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person1.svg"
            image="/card-monkey1.svg"
          />
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person2.svg"
            image="/card-monkey2.svg"
          />
        </div>
        <div>
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person3.svg"
            image="/card-monkey3.svg"
          />
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person1.svg"
            image="/card-monkey4.svg"
          />
        </div>
        <div>
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person2.svg"
            image="/card-monkey5.svg"
          />
          <Card
            title="@knight"
            rating="5.0 (843)"
            typography="I can write podcast for your next show...!"
            avatar="/person3.svg"
            image="/card-monkey6.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;

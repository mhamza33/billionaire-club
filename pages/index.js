import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/Header";
import Landing from "../components/Landing";
import Cards from "../components/Cards";
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7918F2",
      // main: "linear-gradient(to right, #AC32E4, #7918F2, #4801FF)",
      dark: "#121212",
    },
    secondary: {
      main: "#000000",
      light: "#18A1E8",
      dark: "#3D60A7",
      contrastText: "#3F3F3F",
    },
    text: {
      primary: "#242424",
      secondary: "#3F3F3F",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "5em",
      fontWeight: "700",
      color: "#FBFBFB",
    },
    h2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "30px",
      fontWeight: "500",
      color: "#fbfbfb",
    },
    h3: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "24px",
      fontWeight: "100",
      color: "#fbfbfb",
    },
    h4: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "22px",
      fontWeight: "500",
      color: "#075A5D",
    },
    h5: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "18px",
      fontWeight: "500",
      color: "#075A5D",
    },
    h6: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      color: "#075A5D",
    },
    title1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "48px",
      fontWeight: "500",
      color: "#242424",
    },
    title2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "42px",
      fontWeight: "100",
      color: "#242424",
    },
    subtitle1: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "15px",
      color: "#FBFBFB",
    },
    subtitle2: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "14px",
      color: "#242424",
    },
  },
  overrides: {
    "@global": {
      ul: {
        color: "red",
      },
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <Header />
        <Landing />
        <Cards />
        <Banner />
        <NewsLetter />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

import React from "react";
import clsx from "clsx";
import { emphasize, makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CardHeader from "@mui/material/CardHeader";
import StarIcon from "@mui/icons-material/Star";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormatItalic, MicNone } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40,
    maxWidth: 360,
    textAlign: "left",
    color: "white",
    background:
      "radial-gradient(145.1% 102.55% at 0% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) )",
    borderRadius: 0,
    borderStyle: "solid",
    borderImage: "linear-gradient(to right, grey, white )",
  },
  media: {
    height: 250,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    "&:hover": {
      background: "none",
    },
    marginTop: -35,
    marginRight: 5,
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  subtitle: {
    color: "#F3C92A",
    fontWeight: 500,
  },
  star: {
    color: "#F3C92A",
  },
  rating: {
    fontSize: 16,
    color: "#F3C92A",
    marginLeft: 5,
    fontWeight: 600,
  },
  keyHeading: {
    "&:hover": {
      fontFamily: "Times New Roman",
      color: "rgb(26, 146, 109)",
      fontStyle: "italic",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
  },
  button: {
    marginTop: -15,
    marginLeft: 5,
    textTransform: "none",
    background: "rgb(8, 129, 129)",
    marginBottom: 20,
    "&:hover": {
      background: "rgb(8, 129, 129)",
    },
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));

export default function RecipeReviewCard({
  image,
  title,
  avatar,
  typography,
  rating,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            alt="sorry-avatar!"
            src={avatar}
          />
        }
        title={title}
      />
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography variant="subtitle1" component="h4">
          Current Bid
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          sx={{
            color: "#B5B5B5",
            textTransform: "none",
          }}
          disableRipple
          //   className={classes.button}
        >
          0.54 ETH
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          //   onClick={handleExpandClick}
          //   aria-expanded={expanded}
          //   aria-label="show more"
        >
          Ending In <br /> 12 Hr 55m 2s
        </IconButton>
      </CardActions>
    </Card>
  );
}

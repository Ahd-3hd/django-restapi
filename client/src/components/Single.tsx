import { useState, useEffect } from "react";
import axiosInstance from "../axios";
import { useParams } from "react-router-dom";
//MaterialUI
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { IPost } from "../types";

interface ParamTypes {
  slug: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function Post() {
  const { slug } = useParams<ParamTypes>();
  const classes = useStyles();

  const [data, setData] = useState<{ post: IPost }>({
    post: {
      id: 0,
      title: "",
      author: "",
      excerpt: "",
      content: "",
      status: "",
      slug: "",
    },
  });
  useEffect(() => {
    console.log(slug);
    axiosInstance.get(slug).then((res) => {
      setData({ post: res.data });
      console.log(res.data);
    });
  }, [setData]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}></div>
      <div>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {data.post.title}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {data.post.excerpt}
          </Typography>
        </Container>
      </div>
    </Container>
  );
}

import PostsLoading from "./PostsLoading";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { IPost } from "../types";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

export default function Posts({
  posts,
  isLoading,
}: {
  posts: IPost[];
  isLoading: boolean;
}) {
  const classes = useStyles();

  if (isLoading) return <PostsLoading />;
  return (
    <>
      <Container maxWidth="md" component="main" style={{ marginTop: "2rem" }}>
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => {
            return (
              <Grid item key={post.id} xs={12} md={4}>
                <Card>
                  <Link to={`post/${post.slug}`}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.postTitle}
                    >
                      {post.title.substr(0, 50)}...
                    </Typography>
                    <div className={classes.postText}>
                      <Typography
                        component="p"
                        color="textPrimary"
                      ></Typography>
                      <Typography variant="subtitle2" color="textSecondary">
                        {post.excerpt.substr(0, 60)}...
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

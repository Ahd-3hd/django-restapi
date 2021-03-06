import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="default"
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

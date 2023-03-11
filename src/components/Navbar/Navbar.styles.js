import { makeStyles } from "@mui/styles";
const drawerWidth = "240px";

export default makeStyles((theme) => ({
  toolbar: {
    height: "80px",
    marginLeft: "240px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  menuBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  linkBtn: {
    "&:hover": {
      color: "white !important",
      textDecoration: "none",
    },
  },
}));

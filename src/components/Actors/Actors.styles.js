import { makeStyles } from "@mui/styles";
//styles
export default makeStyles((theme) => ({
  image: {
    maxWidth: "90%",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
  },
  // for btn
  btns: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "space-around",
  },
}));

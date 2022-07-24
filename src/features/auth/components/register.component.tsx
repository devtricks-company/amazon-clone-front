import { FC, FormEvent } from "react";
import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { width } from "@mui/system";
import { Link } from "react-router-dom";

const RegisterComponent: FC = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <Box
      sx={{
        border: 1,
        padding: 2,
        borderColor: "#ccc",
        width: "350px",
        marginTop: 2,
      }}
    >
      <form onSubmit={onSubmitHandler}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">
            Create Account
          </Typography>
          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="name"
          >
            Your Name
          </InputLabel>
          <TextField
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField
            type="email"
            name="email"
            id="email"
            variant="outlined"
            size="small"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <TextField
            type="password"
            name="password"
            id="password"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 chracters is required"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000" }}
            htmlFor="confirmpassword"
          >
            Confirm Password
          </InputLabel>
          <TextField
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 chracters is required"
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              marginTop: "16px",
              height: "31px",
              backgroundColor: "#f0c14b",
              color: "black",
              borderColor: "#a88734 #9c7e31 #846a29",
              transform: "none",
            }}
          >
            Register
          </Button>
        </Grid>
      </form>
      <div style={{ marginTop: "20px" }}>
        <small>by creating an account you agree with</small>
      </div>
      <div>
        <small>
          <a href="#">Conditions and Terms</a>
        </small>
      </div>

      <Divider />
      <div style={{ marginTop: "20px" }}>
        <small>
          Already I have an account:
          <Link
            to="/signin"
            style={{ textDecoration: "none", marginLeft: "5px" }}
          >
            Sign-In
          </Link>
        </small>
      </div>

      <div>
        <small>
          Buy for work:
          <a href="#" style={{ textDecoration: "none", marginLeft: "5px" }}>
            Create a free business account
          </a>
        </small>
      </div>
    </Box>
  );
};

export default RegisterComponent;

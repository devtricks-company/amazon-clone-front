import { Grid } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="amazon.logo.png" alt="amazon logo" height="105px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;

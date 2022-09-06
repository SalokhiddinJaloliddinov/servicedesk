import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "white",
        boxShadow:
          "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
        "&:hover": {
          backgroundColor: "white",
        },
      },
    },
  },
});

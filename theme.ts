import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: "#a30041",
    },
    secondary: {
      main: "#fffff",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#a30041",
        color: "white",
        boxShadow:
          "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%)",
        "&:hover": {
          backgroundColor: "#a30041",
          boxShadow:
            "0 1px 1px rgb(0 0 0 / 18%), 0 4px 7px rgb(0 0 0 / 8%), 0 -1px 0 rgb(0 0 0 / 8%), -1px 0 0 rgb(0 0 0 / 8%), 1px 0 0 rgb(0 0 0 / 15%)",
        },
      },
      root: {
        borderRadius: "8px",
        textTransform: "inherit",
        fontSize: 16,
        transition: "none",
        "&:active": {
          boxShadow:
            "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
          transform: "translateY(1px)",
        },
      },
      containedPrimary: {
        backgroundColor: "#4683d9",
        "&:hover": {
          backgroundColor: "#437CCE",
        },
      },
    },
    MuiPaper: {
      elevation0: {
        backgroundColor: "transparent",
      },
    },
  },
});

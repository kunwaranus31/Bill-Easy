// src/global/theme.jsx
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    typography: {
        fontFamily: "ClashGrotesk-Medium, Arial, sans-serif",
        h1: {
            fontSize: "3rem",
            fontWeight: 500,
            lineHeight: 1.2,
        },
        h2: {
            fontSize: "2.25rem",
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.4rem",
            fontWeight: 500,
        },
        h4: {
            fontSize: "1.25rem",
            fontWeight: 500,
        },
        h5: {
            fontFamily: "Satoshi",
            fontSize: "1.1rem",
            fontWeight: 300,
        },
        body: {
            fontFamily: "Satoshi",
            fontSize: "1rem",
        },
        
    },
    palette: {
        primary: {
            main: "#0C71E0", 
        },
        secondary:{
            main:"#073E7A",
        }
    },
    components: {



        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "100px",
              padding:"8px 10px 8px 20px",
              textTransform: "none",
              fontWeight: 400,
              fontFamily:"Satoshi",
              fontSize:"1rem"
            },
            outlinedPrimary:{
              borderWidth: 2,

            }
          }
        }


    }
});

theme = responsiveFontSizes(theme);

export default theme;

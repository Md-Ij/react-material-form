// import Auth from "./Auth";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Form from "./Form";
function App() {
const themeDark = createTheme({
  palette: {
    background: {
      default: "#023047",
    },
    primary: {
      main:'#4a4e69'
    },

  },
});
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <CssBaseline/>
        {/* <Auth /> */}
        <Form/>
        </ThemeProvider>
    </>
  );
}

export default App;

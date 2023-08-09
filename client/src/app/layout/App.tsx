import { useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePages";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/catalog" Component={Catalog}></Route>
        <Route path="/catalog/:id" Component={ProductDetails}></Route>
        <Route path="/about" Component={AboutPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

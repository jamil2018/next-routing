import { Container, CssBaseline } from "@mui/material";
import SearchBar from "../search/SearchBar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <SearchBar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;

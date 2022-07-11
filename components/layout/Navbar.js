import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Navbar = () => {
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              ":hover": { cursor: "pointer" },
              mr: theme.spacing(2),
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <EmojiEventsIcon />
            </Link>
          </Box>
          <Link href="/events">
            <Button variant="text" color="inherit">
              All Events
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import Link from "next/link";

const NotFound = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        height: "80vh",
      }}
      alignItems="center"
    >
      <Alert
        severity="error"
        sx={{
          width: theme.breakpoints.values.sm,
          mx: "auto",
        }}
      >
        <AlertTitle>Error</AlertTitle>
        Could not find the requested event. <br />
        <Link href="/">
          <Button
            sx={{ marginLeft: "-0.3rem", marginTop: theme.spacing(2) }}
            size="small"
            variant="text"
            color="primary"
          >
            Back to featured events
          </Button>
        </Link>
      </Alert>
    </Grid>
  );
};

export default NotFound;

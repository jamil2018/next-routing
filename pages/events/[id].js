import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import { Box, useTheme } from "@mui/system";
import { useRouter } from "next/router";
import NotFound from "../../components/eventDetails/NotFound";
import { getEventById } from "../../data/request";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MetaInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const EventDetailsPage = () => {
  const router = useRouter();
  const theme = useTheme();

  const { id } = router.query;

  const event = getEventById(id);
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (!event) {
    return <NotFound />;
  }

  return (
    <>
      <Box>
        <Link href="/">
          <Button
            sx={{
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(4),
            }}
            size="small"
            variant="text"
            color="primary"
          >
            Back to featured events
          </Button>
        </Link>
        <Card>
          <CardMedia
            component="img"
            height={theme.spacing(50)}
            image={`../${event.image}`}
            alt={event.title}
          />
          <CardContent>
            <Typography variant="h3" component="h1" gutterBottom>
              {event.title}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ marginBottom: "4rem" }}
            >
              {event.description}
            </Typography>
            <Grid
              container
              justifyContent="flex-start"
              alignItems="flex-end"
              sx={{ marginBottom: "0.5rem" }}
            >
              <NavigationIcon color="action" />
              <MetaInfo variant="subtitle2" component="p">
                {event.location}
              </MetaInfo>
            </Grid>
            <Grid container justifyContent="flex-start" alignItems="flex-end">
              <CalendarMonthIcon color="action" />
              <MetaInfo variant="subtitle2" component="p">
                {formattedDate}
              </MetaInfo>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default EventDetailsPage;

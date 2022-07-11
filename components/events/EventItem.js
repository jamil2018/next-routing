import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import NavigationIcon from "@mui/icons-material/Navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MetaInfo = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const EventItem = ({ event }) => {
  const exploreLink = `/events/${event.id}`;
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const shortenedDescription = `${event.description.substring(0, 100)}...`;
  return (
    <Card sx={{ maxWidth: "400px", marginRight: "2rem", marginBottom: "2rem" }}>
      <CardMedia
        component="img"
        height="200px"
        image={event.image}
        alt="event pic"
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {event.title}
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: "2rem" }}>
          {shortenedDescription}
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
      <CardActions>
        <Link href={exploreLink}>
          <Button
            size="small"
            color="primary"
            variant="text"
            sx={{
              marginLeft: "0.5rem",
            }}
          >
            Explore Event
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default EventItem;

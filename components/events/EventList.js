import { Grid, Typography } from "@mui/material";
import { memo } from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  if (events.length === 0) {
    return (
      <Grid container>
        <Typography variant="body1" color="GrayText">
          No posts available.
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid
      container
      justifyContent="flex-start"
      sx={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      {events.map((event) => (
        <EventItem event={event} key={event.id} />
      ))}
    </Grid>
  );
};

export default memo(EventList);

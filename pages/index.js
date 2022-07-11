import { Divider } from "@mui/material";
import EventList from "../components/events/EventList";
import PageHeading from "../components/headings/PageHeading";
import { getFeaturedEvents } from "../data/request";

const FeaturedEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <PageHeading variant="h3" component="h1" gutterBottom>
        Featured Events
      </PageHeading>
      <Divider sx={{ marginBottom: "1rem" }} />
      <EventList events={featuredEvents} />
    </>
  );
};

export default FeaturedEventsPage;

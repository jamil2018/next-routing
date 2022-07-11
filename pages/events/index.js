import { Divider } from "@mui/material";
import EventList from "../../components/events/EventList";
import PageHeading from "../../components/headings/PageHeading";
import { getAllEvents } from "../../data/request";

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <>
      <PageHeading variant="h3" component="h1" gutterBottom>
        All Events
      </PageHeading>
      <Divider sx={{ marginBottom: "1rem" }} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;

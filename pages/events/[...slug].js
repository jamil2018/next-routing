import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import EventList from "../../components/events/EventList";
import PageHeading from "../../components/headings/PageHeading";
import { getFilteredEvents } from "../../data/request";

const FilteredEventsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [month, year] = slug;

  const filteredEvents = getFilteredEvents(month, year);
  return (
    <>
      <PageHeading variant="h3" component="h1" gutterBottom>
        Filtered Events
      </PageHeading>
      <EventList events={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;

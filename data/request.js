import { dummyData } from "./dummyData";

export const getFeaturedEvents = () =>
  dummyData.filter((data) => data.isFeatured === true);

export const getAllEvents = () => dummyData;

export const getFilteredEvents = (month, year) => {
  const filteredData = dummyData.filter((data) => {
    const date = new Date(data.date);
    if (date.getMonth() === month - 1 && date.getFullYear() === Number(year)) {
      return data;
    }
  });
  return filteredData;
};

export const getEventById = (id) =>
  dummyData.find((data) => data.id === Number(id));

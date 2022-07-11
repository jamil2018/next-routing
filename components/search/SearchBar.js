import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const months = [
  { label: "Jan", id: 1 },
  { label: "Feb", id: 2 },
  { label: "Mar", id: 3 },
  { label: "Apr", id: 4 },
  { label: "May", id: 5 },
  { label: "Jun", id: 6 },
  { label: "Jul", id: 7 },
  { label: "Aug", id: 8 },
  { label: "Sep", id: 9 },
  { label: "Oct", id: 10 },
  { label: "Nov", id: 11 },
  { label: "Dec", id: 12 },
];

const years = [
  { label: "1990", id: 1990 },
  { label: "1991", id: 1991 },
  { label: "1992", id: 1992 },
  { label: "1993", id: 1993 },
  { label: "1994", id: 1994 },
  { label: "1995", id: 1995 },
  { label: "1996", id: 1996 },
  { label: "1997", id: 1997 },
  { label: "1998", id: 1998 },
  { label: "1999", id: 1999 },
  { label: "2000", id: 2000 },
  { label: "2001", id: 2001 },
  { label: "2002", id: 2002 },
  { label: "2003", id: 2003 },
  { label: "2004", id: 2004 },
  { label: "2005", id: 2005 },
  { label: "2006", id: 2006 },
  { label: "2007", id: 2007 },
  { label: "2008", id: 2008 },
  { label: "2009", id: 2009 },
  { label: "2010", id: 2010 },
  { label: "2011", id: 2011 },
  { label: "2012", id: 2012 },
  { label: "2013", id: 2013 },
  { label: "2014", id: 2014 },
  { label: "2015", id: 2015 },
  { label: "2016", id: 2016 },
  { label: "2017", id: 2017 },
  { label: "2018", id: 2018 },
  { label: "2019", id: 2019 },
  { label: "2020", id: 2020 },
  { label: "2021", id: 2021 },
  { label: "2022", id: 2022 },
  { label: "2023", id: 2023 },
  { label: "2024", id: 2024 },
  { label: "2025", id: 2025 },
  { label: "2026", id: 2026 },
  { label: "2027", id: 2027 },
  { label: "2028", id: 2028 },
  { label: "2029", id: 2029 },
  { label: "2030", id: 2030 },
];

const changeTypes = {
  month: "MONTH",
  year: "YEAR",
};

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    month: "",
    year: "",
  });
  const [disableSearchBtn, setDisableSearchBtn] = useState(true);
  const theme = useTheme();
  const router = useRouter();

  const handleQueryParamsChange = (type, value) => {
    if (value === undefined) value = "";
    if (type === changeTypes.month) {
      setSearchParams({ ...searchParams, month: value });
    }
    if (type === changeTypes.year) {
      setSearchParams({ ...searchParams, year: value });
    }
  };
  useEffect(() => {
    if (searchParams.month === "" || searchParams.year === "")
      setDisableSearchBtn(true);
    else setDisableSearchBtn(false);
  }, [searchParams]);
  const handleSearchQuerySubmit = () => {
    router.push(`/events/${searchParams.month}/${searchParams.year}`);
  };
  return (
    <Container maxWidth="xl" sx={{ my: theme.spacing(4) }}>
      <Card
        variant="outlined"
        sx={{ width: "max-content", mx: "auto", px: theme.spacing(6) }}
      >
        <CardContent>
          <Typography variant="body1" gutterBottom color="GrayText">
            Search
          </Typography>
          <Grid
            container
            alignItems="center"
            columnGap={theme.spacing(3)}
            sx={{ mt: theme.spacing(2) }}
          >
            <Autocomplete
              disablePortal
              id="months"
              options={months}
              sx={{ width: 150 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Month" />}
              onChange={(_, newValue) =>
                handleQueryParamsChange(changeTypes.month, newValue?.id)
              }
            />
            <Autocomplete
              disablePortal
              id="years"
              options={years}
              sx={{ width: 150 }}
              size="small"
              renderInput={(params) => <TextField {...params} label="Year" />}
              onChange={(_, newValue) =>
                handleQueryParamsChange(changeTypes.year, newValue?.id)
              }
            />
            <Button
              disabled={disableSearchBtn}
              onClick={handleSearchQuerySubmit}
              variant="contained"
            >
              Search
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchBar;

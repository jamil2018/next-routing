import { styled, Typography } from "@mui/material";

const PageHeading = styled(Typography)(({ theme }) => ({
  letterSpacing: theme.spacing(0.1),
  color: theme.palette.grey,
  fontWeight: theme.typography.fontWeightLight,
}));

export default PageHeading;

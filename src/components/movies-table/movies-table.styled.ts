import { Box, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)({
  height: 630,
  width: "100%",
  "& .MuiDataGrid-row": {
    cursor: "pointer",
  },
});

export const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

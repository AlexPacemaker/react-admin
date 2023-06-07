import React from "react";
import { Box } from "@mui/material";
import Header from "../../Components/Header";
import GeographyChart from "../../Components/GeographyChart";

const Geography = () => {
  return (
    <Box m='20px'>
      <Header title='Geography Chart' subtitle='Simple Geography Chart' />
      <Box height='75vh'>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;

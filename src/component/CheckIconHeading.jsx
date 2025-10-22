  import React from 'react';
import { Box, Typography } from '@mui/material';
import FlexBox from './FlexBox';
import { checkIcon } from '../assets';

const CheckIconHeading = ({ items }) => {
  return (
    <Box >
      {items.map((item, index) => (
        <Box key={index} sx={{ 
            display:"flex",
            alignItems: 'center', 
            gap: 1, 
            mb: 1,
            }}>
          <Box>
            <Box component="img" src={checkIcon} sx={{ width: 20, mt: 0.7 }} />
          </Box>
          <Box>
            <Typography variant="h5" >
              {item.heading}
            </Typography>

          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CheckIconHeading;

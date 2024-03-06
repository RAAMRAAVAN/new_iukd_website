
// ImageSlider.jsx
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ArupKumarNath } from './ArupKumarNath';
import { Grid } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const boxes = [<ArupKumarNath name="0"/>, <ArupKumarNath name="8"/>,<ArupKumarNath name="1"/>, <ArupKumarNath name="2"/>, <ArupKumarNath name="3"/>,<ArupKumarNath name="4"/>, <ArupKumarNath name="5"/>,  <ArupKumarNath name="6"/>];

function ImageSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = boxes.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={2000}
      >
        {boxes.map((step, index) => (
          <div key={index}>
            <Grid container spacing={5} paddingX={5}>
              {[1,2,3,4].map((value, innerindex)=>(<Grid key={index} item lg={3} >
                  <Box
                    sx={{
                      // height: '70vh',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.main',
                      color: 'white',
                      backgroundColor: 'white',
                      fontSize: '24px',
                      width:"100%"
                    }}
                  >
                    {boxes[((index+innerindex)%boxes.length)]}
                  </Box>
                </Grid>))}
            </Grid>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );}

export default ImageSlider;

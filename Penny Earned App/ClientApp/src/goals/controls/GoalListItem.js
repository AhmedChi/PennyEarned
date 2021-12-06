import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import CircularProgressWithLabel from './CircularProgressWithLabel';

const GoalListItem = ({ goal }) => {
  const imageItem = {
    img: "/piggy-bank.png",
    title: "Penney Earned Logo"
  }

    var progress = (goal.amountTowardGoal / goal.goalAmount) * 100;
  
  return (
    <Card sx={{ display: 'flex', minHeight: "150px" }} variant="outlined">
        <Grid container spacing={2}>
            <Grid item xs={8} sx={{marginTop: "15px"}}>
                <CardContent>
                    <Typography component="div" variant="h5">
                        {goal.title}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {goal.description}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "35px"}}>
                <CardContent>
                    <CircularProgressWithLabel value={progress} />
                </CardContent>
            </Grid>
        </Grid>
    </Card>
)}
;

export default GoalListItem;
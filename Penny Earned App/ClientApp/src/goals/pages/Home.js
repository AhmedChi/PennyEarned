import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Chart from "react-google-charts";
import _ from "lodash";

import GoalsList from '../controls/GoalsList';
import { loadGoalsPieData } from '../thunks';

const Home = ({ pieData = [], loadingPieData }) => {
    useEffect(() => {
        loadingPieData();
    }, []);
    
    const content = (
        <Stack direction="column" spacing={3}>

            <Typography component="div" variant="h4">
                Your Current Savings
            </Typography>

            { !pieData || _.isEmpty(pieData) ? 
            
                <Skeleton variant="rectangular" width="100%" height={300} /> :

                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading data...</div>}
                    data={pieData}
                    options={{
                        title: 'Your Current Savings Pie Chart 2022',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            }

            <Typography component="div" variant="h4">
                Your Current Goals
            </Typography>

            <GoalsList />
        </Stack>
    );
    return content;
};

const mapStateToProps = state => ({
    goals: state.goals,
    pieData: state.goalsPieData
});

const mapDispatchToProps = dispatch => ({
    loadingPieData: () => dispatch(loadGoalsPieData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
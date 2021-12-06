import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

import { loadGoals } from '../thunks';
import GoalListItem from './GoalListItem';


const GoalsList = ({ goals = [], isLoading, startLoadingGoals }) => {
    useEffect(() => {
        startLoadingGoals();
    }, []);
    
    const isLoadingContent = (
        <>
            <Grid direction="column" alignItems="stretch" spacing={1}>
                <Grid item xs={4}><Skeleton variant="text"/></Grid>
                <Grid item xs={4}><Skeleton variant="text"/></Grid>
                <Grid item xs={4}><Skeleton variant="text"/></Grid>
            </Grid>
        </>
    );

    const content = (
        <>
            <Grid container spacing={1} sx={{paddingBottom: "20px"}}>
                {goals.map(goal => (
                    <Grid item xs={12} md={4}>
                        <GoalListItem key={goal.id} goal={goal}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
    return isLoading || goals.length === 0 ? isLoadingContent : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoadingGoals,
    goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
    startLoadingGoals: () => dispatch(loadGoals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList);
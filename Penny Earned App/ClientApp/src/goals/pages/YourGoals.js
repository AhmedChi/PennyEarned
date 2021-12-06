import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GoalsList from '../controls/GoalsList';

const YourGoals = ({ goals = [] }) => {
    useEffect(() => {
        // Watch
    }, []);
    
    const content = (
        <div className="content-wrapper">
            <GoalsList />
        </div>
    );
    return content;
};

const mapStateToProps = state => ({
    goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(YourGoals);
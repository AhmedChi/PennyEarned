import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const AddGoal = ({ goals = [] }) => {
    useEffect(() => {
        // Watch
    }, []);
    
    const content = (
        <div>Add Goal Form: Construction Pending</div>
    );
    return content;
};

const mapStateToProps = state => ({
    goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGoal);
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const AddSavings = ({ goals = [] }) => {
    useEffect(() => {
        // Watch
    }, []);
    
    const content = (
        <div className="content-wrapper">
            Add Savings: Construction Pending
        </div>
    );
    return content;
};

const mapStateToProps = state => ({
    goals: state.goals,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSavings);
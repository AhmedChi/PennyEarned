import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const About = () => {
    useEffect(() => {
        // Watch
    }, []);
    
    const content = (
        <div className="content-wrapper">
            About Page: Construction Pending
        </div>
    );
    return content;
};

const mapStateToProps = state => ({
    
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
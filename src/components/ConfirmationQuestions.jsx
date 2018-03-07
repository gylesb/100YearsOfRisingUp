import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
    return (
        <div>
            <p>Are you sure you would like to Insert a new club?</p>
            <button onClick = {props.onNewClubConfirmation}>Yes</button>
        </div>
    );
}

ConfirmationQuestions.propTypes = {
    onNewClubConfirmation: PropTypes.func
};

export default ConfirmationQuestions;

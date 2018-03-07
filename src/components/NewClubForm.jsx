import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewClubForm(props) {
    let _name = null;
    let _years = null;
    let _about = null;

    function handleNewClubFormSubmission(event) {
        event.preventDefault();

        props.onNewClubCreation({
            name: _name.value,
            years: _years.value,
            about: _about.value,
            id: v4()
        });
        _name.value = '';
        _years.value = '';
        _about.value = '';
    }

    return (
        <div>
            <form onSubmit = {handleNewClubFormSubmission}>
                <input
                    type = 'text'
                    id = 'name'
                    placeholder = "Name of Club"
                    ref = {(input) => {_name = input;}}/>
                <input
                    type = 'text'
                    id = 'years'
                    placeholder = "Years the club was active"
                    ref = {(input) => {_years = input;}}/>
                <input
                    type = 'textarea'
                    id = 'about'
                    placeholder = "About the club"
                    ref = {(input) => {_about = input;}}/>
                <button type = 'submit'>Insert New Club</button>
            </form>
        </div>
    );
}

NewClubForm.propTypes = {
    onNewClubCreation: PropTypes.func
};

export default NewClubForm;

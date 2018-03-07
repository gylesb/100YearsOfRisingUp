import React from 'react';
import NewClubForm from './NewClubForm';
import PropTypes from 'prop-types';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewClubControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleNewClubConfirmation = this.handleNewClubConfirmation.bind(this);
    }

    handleNewClubConfirmation() {
        this.setState({formVisibleOnPage: true});
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewClubForm onNewClubCreation = {this.props.onNewClubCreation}/>;
        } else { currentlyVisibleContent = <ConfirmationQuestions onNewClubConfirmation =    {this.handleNewClubConfirmation}/>;
        }

        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewClubControl.propTypes = {
    onNewClubCreation: PropTypes.func
};

export default NewClubControl;

import React from 'react';
import Club from './Club';
import PropTypes from 'prop-types';

function ClubList(props) {
    return (
        <div style = {{padding: '15px'}}>
            <hr/>
            <h2 style = {{color: '#206040'}}>Clubs</h2>
            <div className = "row">
                {props.masterList.map((club) =>
                    <Club name = {club.name}
                        years = {club.years}
                        about = {club.about}
                        key = {club.id}/>
                )}
            </div>
        </div>

    );
}

export default ClubList;

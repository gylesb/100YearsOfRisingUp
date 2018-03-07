import React from 'react';


function NavBar(){
    return (
        <div className="row" style={{
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#3CC6FF',
            borderRadius: '20px'
        }}>
            <div className="col-md-4">
                <a href='/#/'>Home</a>
            </div>
            <div className="col-md-4">
                <a href='/#/newclub'>Add Club</a>
            </div>
            <div className="col-md-4">
                <a href='/#/about'>About</a>
            </div>
        </div>
    );
}

export default NavBar;

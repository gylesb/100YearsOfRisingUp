import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import ClubList from './ClubList';
import Error404 from './Error404';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import NewClubControl from './NewClubControl';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterList: [
                {
                    name: 'FASA sa UW',
                    years: '1917 - Present',
                    about: 'The Flipino American Student Association at the University of Washington',
                },
                {
                    name: 'OPO',
                    years: '1995 - 2005',
                    about: 'The Brotherhood of Omega Phi Omega',
                },
                {
                    name: 'PNI',
                    years: '2005 - Present',
                    about: 'The Sisterhood of Pi Nu Iota',
                },
                {
                    name: 'Sayaw sa UW',
                    years: '1980 - Present',
                    about: 'The Sayaw Traditional Filipino Dance Troupe',
                }
            ]
        };
        this.handleAddingNewClubToList = this.handleAddingNewClubToList.bind(this);
    }

    handleAddingNewClubToList(newClub) {
        var newMasterList = this.state.masterList.slice();
        newMasterList.push(newClub);
        console.log(newMasterList);
        this.setState({masterList: newMasterList});
    }
    render(){
        return (
            <div className="container">
                <style jsx global>{`
            body {
              font-family: Trebuchet MS;
              padding: 30px;
              background-color: #80DAFF;
            }
            `}</style>
                <NavBar/>
                <Header/>
                <Switch>
                    <Route exact path = '/' render = {() => <ClubList masterList = {this.state.masterList} />} />
                    <Route path = '/newclub' render = {() => <NewClubControl onNewClubCreation = {this.handleAddingNewClubToList} />} />
                    <Route path = '/about' component = {About} />
                    <Route component = {Error404} />
                </Switch>
            </div>
        );
    }
}



export default App;

import React from 'react';
import Body from './body';
import NavBar from './navbar';

class Home extends React.Component {
    render() { 
        return (
            <div id="page">
                <NavBar />
                <Body />
            </div>
        );
    }
}
 
export default Home;
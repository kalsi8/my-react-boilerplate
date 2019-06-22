import React from 'react';
import { connect } from 'react-redux';
import'./DCLandingPage.scss';
import { NavBar } from '../../component';


class DCLandingPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>   
           </div>
        );
    }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(DCLandingPage);

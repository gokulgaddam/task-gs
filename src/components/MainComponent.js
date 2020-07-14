import React from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import Signup from '../components/SignUp';
import Home from '../components/Home';
import Login from '../components/Login';
import Movie from '../components/Movie';
import {Navbar,NavbarBrand,NavLink,Nav,NavItem,Modal,ModalHeader,ModalBody,Button} from 'reactstrap';
class Main extends React.Component{
constructor(props){
    super(props)
    this.state={
        authenticated: false,
        isModalOpen:false
    };
    this.toggleModal = this.toggleModal.bind(this);

}

authenticate = ()=>{

return this.setState({
    ...this.state,
    authenticated: true
})
}

toggleModal(){
    this.setState({
        ...this.state,
        isModalOpen: !this.state.isModalOpen
    })
}




render(){

/*    if(this.state.authenticated){
        return(
            <Redirect to="/movieList" />
        )
    }*/
    return(
        <>
        <Navbar light color='light' expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    Geek Synergy
                </NavbarBrand>
                <Nav navbar>
                    <NavItem className="mr-5">
                        <NavLink href="/movieList">
                            Movies
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <Button outline onClick={this.toggleModal}>
                                Contact Us
                           </Button>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
        <Switch>
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/signup" component={()=><Signup />} />
        <Route  exact path="/login" component={()=> <Login authenticated={this.state.authenticated} authenticate={this.authenticate}/> } />
        <Route  exact path="/movieList" component={()=> <Movie authenticated={this.state.authenticated} /> } />
        
        <Redirect  to ="/home" />
    </Switch>
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.toggleModal}>Contact Us</ModalHeader>
                 <ModalBody>
                     <ul>
                         <li>
                             Company: Geeksynergy Technologies pvt Ltd
                         </li>
                         <li>
                             Address: Sanjayanagar,Bengaluru-56
                         </li>
                         <li>
                            Phone: 99999 99999
                         </li>
                         <li>
                             Email: goklewfs@gmail.com
                         </li>
                     </ul>
                 </ModalBody>
    </Modal>
    </>

    )
}

 /*  */




}

export default withRouter(Main);
import React from 'react';
import {Form,FormGroup, Input,Label,Col,Button} from 'reactstrap';
import {withRouter,Redirect} from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props)
   
        this.state ={
            username:'',
            password: '',
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        //  console.log('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault()  
       
          let users = this.getUsers();
          let userFound=null;
          let passMatched=null;
          users.forEach(user => {
              if(this.state.username===user.username){
                  userFound = user.username;
                  if(this.state.password===user.password){
                      passMatched= 1;
                  }

              }
              
          });

          if(userFound && passMatched){
              
              return this.props.authenticate();
              
              
          
          }
          else if(userFound){
              alert('You have entered the wrong password ' + userFound +',please try one more time!');
                return(window.location.reload());
                
          }
          else{
            alert('Entered credentials not found!!please try signup');
            return(window.location.reload());
          }
          
              
          

        
         
      }
    
    
getUsers(){
    let users
    if(localStorage.getItem('users')===null){
         users = [];

    }
    else{
        users = JSON.parse(localStorage.getItem('users'));
    }

    return users;
}

    render(){
        if(this.props.authenticated){
            return(
            <Redirect to="/movieList" />
            )
        }
        else {
            return(
                <div className="row row-content mt-3">
                <div className="col-12">
                    <h3>
                        Enter Your details to Login
                    </h3>
                </div>
                <div className="col-12 col-md-9 mt-5">
                        <Form onSubmit={this.handleSubmit}>
                           
                           <FormGroup row>
                               <div className="col-2 offset-2">
                               <Label htmlFor="username" >User Name  </Label>
                               </div>
                                       
                                       <div className="col-8">
                                           <Input type="text" id="username" name="username"
                                               placeholder="Username"
                                               value={this.state.username}
                                               onChange={this.handleInputChange} required/>
                                       </div>
                            </FormGroup>
                            <FormGroup row>
                               <div className="col-2 offset-2">
                               <Label htmlFor="Password" >Password  </Label>
                               </div>
                                       
                                       <div className="col-8">
                                           <Input type="password" id="password" name="password"
                                               placeholder="password"
                                               value={this.state.password}
                                               onChange={this.handleInputChange} required/>
                                       </div>
                            </FormGroup>
                            <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </FormGroup>
                                
                        </Form>
                </div>
                </div>
            )
           
        }
       
    }

}

export default withRouter(Login);
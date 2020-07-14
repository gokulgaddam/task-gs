import React from 'react';
import {Form,FormGroup, Input,Label,Col,Button} from 'reactstrap';
import  { withRouter,Redirect } from 'react-router-dom';

class Signup extends React.Component{

constructor(props){

    super(props);
    this.state={
        username:'',
        password:'',
        email:'',
        prof:'teacher',
        signedin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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


addUser(){
    let newUser = this.state;
    
    const users = this.getUsers();
    users.forEach(user=> {
      
        if (this.state.username === user.username){
           
            
            newUser= null;

        }
       
    })
    if(newUser){
        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users));
        return newUser;
    }
    else{
        return newUser;
    }
    
 



}
handleSubmit(event) {
  //  console.log('Current State is: ' + JSON.stringify(this.state));
   // alert('Current State is: ' + JSON.stringify(this.state));
   event.preventDefault();
    let user = this.addUser()
    if(user===null){
        alert('User Name already exists please try another user name');
        window.location.reload();
    }else{
        alert(user.username + ',you have been successfully added to the storage' );
        return this.setState({...this.state,signedin:true})
     
    };
    
    
}

redirectLogin(user){
    if(user){
        alert('you are being redirected to login page');


    }
    
}

    render(){
if(this.state.signedin){
return <Redirect to="/login" />
}
    else {
        return(
            
            <>
           
            <div className="row row-content mt-3">
                <div className="col-12">
                    <h3>
                        Enter Your details to signup
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
                       <div className="col-2 offset-2">
                       <Label htmlFor="email" >Email  </Label>
                       </div>
                               
                               <div className="col-8">
                                   <Input type="email" id="email" name="email"
                                       placeholder="Email"
                                       value={this.state.email}
                                       onChange={this.handleInputChange} />
                               </div>
                           </FormGroup>
                           <FormGroup row>
                       <div className="col-2 offset-2">
                       <Label htmlFor="prof" >Profession  </Label>
                       </div>
                               
                               <div className="col-8">
                               <Input type="select" name="prof"
                                            value={this.state.prof}
                                            onChange={this.handleInputChange}>
                                        <option>Teacher</option>
                                        <option>Lawyer</option>
                                        <option>Engineer</option>
                                        <option>Accountant</option>
                                        <option>Physician</option>
                                    </Input>
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
                    
                    
               
               
            </>
        )
    }
    }
}


export default withRouter(Signup);
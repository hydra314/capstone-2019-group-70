import React from "react";
import { withFirebase } from "../../contexts/Firebase";

import {
    Form, 
    FormGroup, 
    Input, 
    InputGroupAddon, 
    InputGroupText, 
    InputGroup,
    Button
} from "reactstrap";

// Define initial form fields as empty 
const INITIAL_STATE = {
    password: '', 
    new_password: '',
    confirm_new_password: '',
    error: null
};


class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE} ;
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        const { password, new_password } = this.state;
        
        // Attempt to sign in 
        this.props.firebase
            .doPassWordUpdate(password, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({ error });
            });
            
        event.preventDefault();
    };
    
    render() {
        const { email, password, error} = this.state
        
        // Check if input fields have been filled 
        const isInvalid = email === '' ||
                          password === '';

        return(
            <>
                <Form onSubmit={this.onSubmit}>
                    {/* Email */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="ni ni-email-83" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input 
                                name="email"
                                value={email}
                                placeholder="Email" 
                                type="text" 
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </FormGroup>
                    
                    {/* Password */}
                    <FormGroup>
                        <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              name="password"
                              value={password}
                              placeholder="Password" 
                              type="password" 
                              onChange={this.onChange}
                              autoComplete="off"
                            />
                        </InputGroup>
                    </FormGroup>
                    
                    {/* Submit Form */}
                    <Button disabled={isInvalid} className="mt-4" color="primary" type="submit">
                        Login
                    </Button>

                    {/* Error message */}
                    {error && <p>{error.message}</p>}
                </Form>  
            </>
        );
    }
}

// Export with Firebase Context 
export default withFirebase(SignInForm);
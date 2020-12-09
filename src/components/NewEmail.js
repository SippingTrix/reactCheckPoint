import React from 'react';


// handleRegisterSubmission = (event) => {
//     event.preventDefault();
//     const tempfirstName = event.target.firstName.value;
//     const templastName = event.target.lastName.value;
//     const tempemailAddress = event.target.emailAddress.value;
//     const tempexpLevel = event.target.expLevel.value;
//   }

const NewEmail = () => {
    
    
    
    
        return (
          
            <div>
              <h2>Send</h2>
              <form>
              <label>First Name:
                <input type="text" name="firstName" placeholder="First name"></input>
              </label>
              <label>Last Name:
                <input type="text" name="lastName" placeholder="Last Name"></input>
              </label>
              <label>Email Address:
                <input type="email" name="emailAddress" placeholder="E-mail"></input>
              </label>
              
              <button type='Submit'>REGISTER</button>
            </form>
            </div>
    
       
         
        )
      }
    


export default NewEmail


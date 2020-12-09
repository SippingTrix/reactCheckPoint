import React from 'react';
import { useParams } from 'react-router-dom'




const Inbox = ({ data }) => {
    const { emailId } = useParams()

    const email = data.find(email => email.id === Number(emailId))

    const emailInfo = email ?
    (
        <div>
            <h3>
                From: { email.sender }<br/>
                To: { email.recipient }<br/>
                Subject: { email.subject }<br/>
                Date: { email.date }
            </h3>
            <p>
                { email.message }
            </p>
        </div>
    ) :
    <h2>Your email inbox is empty because no one loves you!</h2>
    
        
    return(
        <>
        <article>
        <h1>{ emailInfo }</h1>
         </article>
       
    </>
    )


}


export default Inbox


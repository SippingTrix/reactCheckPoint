const axios = require('axios');

const SendEmail = ( email ) => {
    axios.post('http://localhost:3001/emails', {
        id: 500,
        sender: `${email.sender}`,
        recipient:`${email.recipient}`,
        subject: `${email.subject}`,
        message: `${email.message}`,
        date: null
    })
    .then(resp => {
            console.log(resp.data);
    })
    .catch(error => {
    console.log(error);
});   
}





export default SendEmail
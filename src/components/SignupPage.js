import { useState } from "react";
let isFilled= false;

function SignupPage(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('en')
    const [user, setUser] = useState([])
    const handleSubmit=(event) => {
        event.preventDefault();
        isFilled= true;
        setUser({
            email: email,
            password: password,
            nationality: nationality,
        })
        // PrintUser();
        // console.log(email, password, nationality)
        setEmail('')
        setPassword('')
        setNationality('')
    }
    const handleEmail= (event) => {
        setEmail(event.target.value);
    }
    const handlePassword= (event) => {
        setPassword(event.target.value);
    }
    const handleNationality= (event) => {
        setNationality(event.target.value);
    }
    const hi= (nationality)=> {
        if(nationality==='de'){
            return 'Hallo';
        }else if(nationality==='fr'){
            return 'Bonjour';
        }else {
            return 'Hello';
        }
    }
    const PrintUser=(user) =>{
        // console.log(email, password , nationality)
        return ( 
        <div>
            <p>{hi(user.nationality)}</p>
            <p>Your email address is: {user.email}</p>
            <p>Your email address is {isCorrect(user.email)}</p>
        </div>
    );
    }
    const isCorrect= (email) => {
        if(email.length>6 && email.includes('@') && email.includes('.')){
            return 'correct'
        }
        return 'incorrect'
    }
    return (
        <div style={{margin:'1rem'}}>
            <form onSubmit={handleSubmit}>
                <label>Email: <input type='text' name='email' value={email} onChange={handleEmail}/></label>
                <label>Password: <input type='text' name='password' value={password} onChange={handlePassword}/></label>
                <select name='nationality' onChange={handleNationality}>
                    <option value='en'>English</option>
                    <option value='de'>German</option>
                    <option value='fr'>French</option>
                </select>
                <button>Sign Up</button>
            </form>
            {isFilled && PrintUser(user)}
        </div>
    );
}

export default SignupPage
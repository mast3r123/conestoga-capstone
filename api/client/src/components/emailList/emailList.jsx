import "./emailList.css";

const EmailList = ()=>{
    return(
    <div className="eMail">
        <h1 className="emailTitle">Save time, save money!</h1>
        <span className="emailDesc">Sign up and we will send you the best deal to you</span>
        <div className="emailContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
    </div>
    )}

export default EmailList
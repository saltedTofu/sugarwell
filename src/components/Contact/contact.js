import Form from '../../form.png';
import Yang from '../../yang.jpg';
import './contact.css';
function Contact(){
    return(
        <div id="contactSection">
            <h1 className="sectionTitle" id="contactTitle">Contact Us</h1>
            <div id="contactContent">
                <form name="contact" method="POST" data-netlify="true" id="contactForm">
                    <img src={Form} alt="clipboard"/>
                    <h2>Request a Free Quote</h2>
                    <input type="hidden" name="form-name" value="contact" />
                    <p>Name </p>
                    <input type="text" name="name" required/>
                    <p>Email</p>
                    <input type="email" name="email" required/>
                    <p>Phone Number</p>
                    <input type="text" name="phoneNumber" />
                    <p>What Products/Services are you interested in?</p>
                    <textarea rows="4" cols="50" required name="message"/>
                    <br></br>
                    <button type="submit" className="button" id="submitForm">Send</button>
                </form>
                <div id="contactUs">
                    <h2>Contact Me Directly</h2>
                    <img src={Yang} alt="owner and founder" />
                    <p>10600 Bellaire Blvd. Ste 140</p>
                    <p>Houston</p>
                    <p>Texas</p>
                    <p>77072</p>
                    <p>Store: 281-888-1283</p>
                    <p>Cell: 832-867-9662</p>
                    <p>Email: email here</p>
                    <p>Ask for Joseph</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import media_logo from './img/react-page-media-logo.png'
import location_icon from './img/location.png'
import phone_icon from './img/phone.png'
import mail_icon from './img/mail.png'
import fb_icon from './img/fb.png'
import twitter_icon from './img/twitter.png'
import ig_icon from './img/ig.png'

function App() {
  return (
    <div className="App container">
      <div className="row">
            <form action="" className="col-md-6 p-5 pt-5 pb-5">
                <h1>Let's talk</h1>
                <p className="description mt-3 mb-3">
                    To request a quote or want to meet up for coffee, contact us directly or fill out the form and we
                    will get back to you promptly.
                </p>

                <label htmlFor="name">Your Name</label><br />
                <input type="text" />

                <label htmlFor="email">Your Email</label><br />
                <input type="text" />

                <label htmlFor="name">Your Message</label><br />
                <textarea name="" id="" rows="5"></textarea>

                <button className="submit mt-5">Send Message</button>
            </form>

            <div className="col-md-6 contact p-5">
                <center>
                    <img src={media_logo} alt="" id="media-image" />
                </center>
                <div className="info-section ml-5">
                    <div className="row mt-2">
                        <span className="col-2">
                            <img src={location_icon} alt="" className="icon" />
                        </span>
                        <span className="col-10">
                            151 New Park Ave, Hartford, CT 06106 United States
                        </span>
                    </div>

                    <div className="row mt-2">
                        <span className="col-2">
                            <img src={phone_icon} alt="" className="icon" />
                        </span>
                        <span className="col-10">+1 (203) 302-9545</span>
                    </div>

                    <div className="row mt-2">
                        <span className="col-2">
                            <img src={mail_icon} alt="" className="icon" />
                        </span>
                        <span className="col-10">contactus@inveritasoft.com</span>
                    </div>

                </div>
                <div className="media-links mt-5">
                    <img src={fb_icon} alt="" className="media-logo" />
                    <img src={twitter_icon} alt="" className="media-logo" /> 
                    <img src={ig_icon} alt="" className="media-logo" />
                </div>
            </div>

        </div>

      
    </div>
  );
}

export default App;

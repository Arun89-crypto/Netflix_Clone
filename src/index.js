import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import netflixLogo from "./images/netflix-tv-logo-png-9.png";
import doneLogo from './images/done.png';

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <Divider />
      <TvSection />
      <Divider />
      <MobileSection />
      <Divider />
      <MacSection />
      <Divider />
      <FaqSection />
      <Divider />
      <Footer />
    </React.Fragment>
  );
}
const Header = () => {
  return (
    <div className="header">
      <div className="upper">
        <img src={netflixLogo} alt="" />
        <div className="upper-buttons">
          <select>
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
          <button>Sign In</button>
        </div>
      </div>
      <div className="main-header">
        <h1>Unlimited movies, TV</h1>
        <h1> shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div>
          <input placeholder="Email Address"></input>
          <button>Get Started &#x3e;</button>
        </div>
      </div>
    </div>
  );
}

const Divider = () => {
  return (
    <React.Fragment>
      <div className="divider"></div>
    </React.Fragment>
  )
}

const TvSection = () => {
  return (
    <React.Fragment>
      <div className="tv-section">
        <div className="left-tv">
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
        </div>
        <div className="right-tv">
          <div className="tv-image">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" id="tv-image" />
          </div>
          <video autoPlay playsInline muted loop id="video">
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </React.Fragment>
  );
}

const MobileSection = () => {
  return (
    <React.Fragment>
      <div className="mobile-section">
        <div className="left-mobile">
          <h1>Download your shows to watch offline.</h1>
          <h2>Save your favourites easily and always have something to watch.</h2>
        </div>
        <div className="right-mobile">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" id="mobile-image" />
          <div className="download-div">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            <div>
              <h3>Stranger Things</h3>
              <p>Downloading...</p>
            </div>
            <img src={doneLogo} alt="" id="done-logo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

const MacSection = () => {
  return (
    <React.Fragment>
      <div className="mac-section">
        <div className="left-mac">
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="right-mac">
          <div className="mac-image">
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" id="mac-image" />
          </div>
          <video autoPlay playsInline muted loop id="video-mac">
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
          </video>
        </div>
      </div>
    </React.Fragment>
  );
}

const FaqSection = () => {
  return (
    <React.Fragment>
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <ul className="query-list">
          <li className="query-list-item">
            <button className="full-qes" onClick={DisplayElement}>
              <h3>What is Netflix?</h3>
              <h2>+</h2>
            </button>
            <div className="answer">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
          </li>
          <li className="query-list-item">
            <button className="full-qes" onClick={DisplayElement}>
              <h3>How much does Netflix cost?</h3>
              <h2>+</h2>
            </button>
            <div className="answer">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</div>
          </li>
          <li className="query-list-item">
            <button className="full-qes" onClick={DisplayElement}>
              <h3>Where can I watch?</h3>
              <h2>+</h2>
            </button>
            <div className="answer">Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</div>
          </li>
          <li className="query-list-item">
            <button className="full-qes" onClick={DisplayElement}>
              <h3>How do I cancel?</h3>
              <h2>+</h2>
            </button>
            <div className="answer">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
          </li>
          <li className="query-list-item">
            <button className="full-qes" onClick={DisplayElement}>
              <h3>What can I watch on Netflix?</h3>
              <h2>+</h2>
            </button>
            <div className="answer">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
          </li>
        </ul>
        <h3 className="form-head">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="form">
          <input placeholder="Email Address"></input>
          <button>Get Started &#x3e;</button>
        </div>
      </div>
    </React.Fragment >
  );
}

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <p>Questions? Call 000-800-040-4015</p>
        <div className="grid">
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Account</p>
          <p>Media Centre</p>
          <p>Invester Relations</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Cookie Prefrences</p>
          <p>Corporate Information</p>
          <p>Contact Us</p>
          <p>Speed Test</p>
          <p>Legal Notices</p>
          <p>Netflix Originals</p>
        </div>
        <div className="upper-buttons">
          <select>
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
        </div>
        <p style={{ marginTop: 15 + 'px' }}>Netflix India</p>
      </div>
    </React.Fragment>
  );
}

function DisplayElement(e) {
  console.log('clicked');
  let sign = e.target.parentElement.parentElement.childNodes[0].querySelector('h2');
  sign.classList.toggle('rotate');
  let ele = e.target.parentElement.parentElement.childNodes[1];
  ele.classList.toggle('display-ans');
}

ReactDOM.render(<Main />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import css from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      policyNum: '',
      dob: '',
      foodWater: '',
      foodWaterCount: '',
      shelter: '',
      shelterCount: '',
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div>
        <div>
            <div className="signup_banner">
                <img className="nationwide_logo" src="https://image4.owler.com/logo/nationwide-insurance_owler_20160223_115330_original.png"></img>
            </div>
            <div className="top_register">
                <h3>The Nationwide Buddy System</h3>
                <p>
                    The strength of a community lies in its people. When diasters strike, the<br/>
                    Nationwide community is ready to help each other recover and rebuild.
                </p>
                <button className="initial_register">Register</button>
            </div>
            <div className="summary">
                <p className="summary_contents">
                    Our Buddy System is an opt-in network of Nationwide members,<br/>
                    "buddies", who are prepared and ready to help their neighbors in<br/>
                    times of emergency. If you're impacted by a natural disaster, we will<br/>
                    connect you with your buddy - someone who can provide you with<br/>
                    food, shelter, and a helping hand.
                </p>
                <img className="summary_img" src="https://bit.ly/2IB9TiR"></img>
            </div>
            <div className="explanation_detail">
                <h3>How it Works</h3>
                <div className="cards">
                    <div className="img_card">
                        <a className="img_container"><img className="explanation_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh6MkuR7Hr1xiLMYT5YLRgs7zYmSarL9MS7E89QFX1nujn9DVsPg"></img></a>
                        <p className="card_description">
                            When a disaster strikes, our<br/>
                            Buddy System is triggered to<br/>
                            text Nationwide Buddies in the<br/>
                            impacted area.
                        </p>
                    </div>
                    <div className="img_card">
                        <a className="img_container"><img className="explanation_img" src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=959228001844e0370bcb348f9d1e000a&auto=format&fit=crop&w=1050&q=80"></img></a>
                        <p className="card_description">
                            Our text will provide you with your<br/>
                            Buddy's phone number, along with<br/>
                            information on the resources they can<br/>
                            provide to you and your family.
                        </p>
                    </div>
                    <div className="img_card">
                        <a className="img_container"><img className="explanation_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkODEPmxpPxPPnuuuwkoJahMvhsa45bo_uAFHZPg4QDxninaU"></img></a>
                        <p className="card_description">
                            We will also text your Buddy, alerting<br/>
                            them that a disaster has impacted you<br/>
                            and your family and providing them with<br/>
                            a phone number to reach you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="buddy_explanation">
                <div className="buddy_text">
                    <h3>What does it mean to be a Buddy?</h3>
                    <p>
                        Nationwide Buddies, at a minimum, need to provide food and water for their buddy and<br/>
                        the buddy's family in times of emergencies. Other resources that are especially helpful<br/>
                        during these times include shelter, transportation, and basic necessities. You'll be able to<br/>
                        select the resources you can provide during registration.
                    </p>
                </div>
                <div className="buddy_card_section">
                    <div className="buddy_card">
                        <div className="buddy_icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thumbs_up_font_awesome.svg/2000px-Thumbs_up_font_awesome.svg.png"></img>
                        </div>
                        <p>Food and Water</p>
                    </div>
                    <div className="buddy_card">
                        <div className="buddy_icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thumbs_up_font_awesome.svg/2000px-Thumbs_up_font_awesome.svg.png"></img>
                        </div>
                        <p>Shelter</p>
                    </div>
                    <div className="buddy_card">
                        <div className="buddy_icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thumbs_up_font_awesome.svg/2000px-Thumbs_up_font_awesome.svg.png"></img>
                        </div>
                        <p>Transportation</p>
                    </div>
                    <div className="buddy_card">
                        <div className="buddy_icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thumbs_up_font_awesome.svg/2000px-Thumbs_up_font_awesome.svg.png"></img>
                        </div>
                        <p>Basic Necessities</p>
                    </div>
                </div>
            </div>
        </div>
        Testing: form page
        <form>
        
          <label>First Name</label>
          <input type="text" name="firstName" />
          <br/>
          
          <label>Last Name</label>
          <input type="text" name="lastName" />
          <br/>

          <label>Nationwide Policy Number</label>
          <input type="text" name="policyNum" />
          <br/>

          <label>Date of Birth</label>
          <input type="date" name="dob" />
          <br/>

          <label>Can you provide food and water?</label>
          <input type="radio" name="foodWater" value="yes" /> Yes
          <input type="radio" name="foodWater" value="no" /> No
          <br/>

          <label>If so, how many people can you provide for?</label>
          <input type="number" name="foodWaterCount" />
          <br/>

          <label>Can you provide shelter?</label>
          <input type="radio" name="shelter" value="yes" /> Yes
          <input type="radio" name="shelter" value="no" /> No
          <br/>

          <label>If so, how many people can you provide for?</label>
          <input type="number" name="shelterCount" />
          <br/>
          
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
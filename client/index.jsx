import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile.jsx'
import Banner from './components/Banner.jsx';

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
      foodWaterCount: 0,
      shelter: '',
      shelterCount: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var key = event.target.name;
    var val = event.target.value;
    console.log(val);
    if (val === 'yes') {
      this.setState({ [key]: true });
    } else if (val === 'no') {
      this.setState({ [key]: false });
    } else if (val === '1' || val === '2'|| val === '3' || val === '4') {
      this.setState({ [key]: parseInt(val) });
    } else {
      this.setState({ [key]: val });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var obj = this.state;
  }

  render() {
    return (
      <div>
        <div>
            <Banner />
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
        <div className="sign_up">
            <div className="sign_up_blurb">
                <h2>Our Commitment to You</h2>
                <p>
                    At Nationwide, our mission is to protect you and prepare for what might happen tomorrow. We<br/>
                    strive to not only provide the best experience after a disaster has happened, but also taking<br/>
                    measures to protect our members and their communities prior.
                </p>
            </div>
            <div className="sign_section" id="register_form">
                <h1>Register for the Nationwide Buddy System</h1>
                <form className="signup_form">
                    <div className="form">
                        <div className="left_column">
                            <div className="text_input">
                                <label>First Name <font color="red">*</font></label>
                                <input className="name_input" type="text" value={this.state.firstName} onChange={this.handleChange} name="firstName" />
                            </div>
                            <div className="text_input">
                                <label>Nationwide Policy Number <font color="red">*</font></label>
                                <input type="text" value={this.state.policyNum} onChange={this.handleChange} name="policyNum" />
                            </div>
                            <div className="provide_bool additional_text">
                                <label>At a minimum, you will need to provide food and water. How many people can you provide for? <font color="red">*</font></label>
                            </div>
                            <div className="provide_bool">
                                <label>Can you provide shelter? <font color="red">*</font></label>
                                <a className="bool">
                                    <span className="true"><input type="radio" name="shelter" value="yes" onChange={this.handleChange} checked={this.state.shelter === true} />Yes</span>
                                    <span className="false"><input type="radio" name="shelter" value="no" onChange={this.handleChange} checked={this.state.shelter === false} />No</span>
                                </a>
                            </div>
                            <div className="provide_bool">
                                <label>Can you provide transportation? <font color="red">*</font></label>
                                <a className="bool">
                                    <span className="true"><input type="radio" name="transport" value="yes" onChange={this.handleChange} checked={this.state.transport === true} />Yes</span>
                                    <span className="false"><input type="radio" name="transport" value="no" onChange={this.handleChange} checked={this.state.transport === false} />No</span>
                                </a>
                            </div>
                        </div>
                        <div className="right_column">
                            <div className="text_input">
                                <label>Last Name <font color="red">*</font></label>
                                <input className="name_input" type="text" value={this.state.lastName} onChange={this.handleChange} name="lastName" />
                            </div>
                            <div className="text_input">
                                <label>Date of Birth <font color="red">*</font></label>
                                <input type="date" value={this.state.dob} onChange={this.handleChange} name="dob" />
                            </div>
                            <div className="provide_food_quantity provide">
                                <select name="foodWaterCount" onChange={this.handleChange} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="provide_shelter_quantity provide">
                                <label>If so, how many people can you provide for?</label>
                                <select name="shelterCount" onChange={this.handleChange} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div className="provide_transport_quantity provide">
                                <label>If so, how many people can you provide for?</label>
                                <select name="transportCount" onChange={this.handleChange} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <input className="click_submit" type="submit" value="Next" onClick={this.handleSubmit} />
                </form>
            </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

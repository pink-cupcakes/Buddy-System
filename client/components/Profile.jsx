import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return (
        <div>
            <div className="banner_img">
                <div className="quote">
                    <p>This is going to be a really cool quote</p>
                </div>
            </div>
        </div>
    )
  }
}

export default Profile;
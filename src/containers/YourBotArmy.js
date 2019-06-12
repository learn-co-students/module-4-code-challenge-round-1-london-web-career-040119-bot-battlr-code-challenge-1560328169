import React from "react";
import BotArmyCard from "../components/BotArmyCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.usersBots.map((bot, index) => <BotArmyCard key={index} bot={bot} removeBot={this.props.removeBot}/>)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;

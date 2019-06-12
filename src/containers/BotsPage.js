import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"


class BotsPage extends React.Component {
  constructor(props) {
		super(props)
	
		this.state = {
			 bots: [],
			 usersBots: [] 
		}
	}

	componentDidMount = () => {
		return fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
		.then(response => response.json())
  	.then(data => {this.setState({bots: data})})
	}

	addBot = bot => {
    if (!(this.state.usersBots.includes(bot))) {
    this.setState({usersBots: [...this.state.usersBots, bot]})
    }
  }
  
  removeBot = bot => {
    this.setState({usersBots: this.state.usersBots.filter(b => !(b === bot))})
  }

  render() {
    return (
      <div>
        <YourBotArmy usersBots={this.state.usersBots} removeBot={this.removeBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot} /> 
      </div>
    );
  }

}

export default BotsPage;

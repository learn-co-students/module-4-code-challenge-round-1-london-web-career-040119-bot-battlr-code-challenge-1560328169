import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    enlistedBots: []
  }

  componentDidMount = () => {
    fetch(botsURL)
    .then(resp => resp.json())
    .then(bots => this.setState({ bots }))
  }

  enlistBot = bot => {
    if (this.state.enlistedBots.includes(bot)) return

    this.setState({ enlistedBots: [...this.state.enlistedBots, bot] })
  }

  releaseBot = releasedBot => {
    const arrayMinusBot = [...this.state.enlistedBots].filter(bot => releasedBot !== bot)
    this.setState({ enlistedBots: arrayMinusBot })
  }

  render() {
    return (
      <div>
          < YourBotArmy yourBots={this.state.enlistedBots} release={this.releaseBot}/>
          < BotCollection bots={this.state.bots} enlist={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;

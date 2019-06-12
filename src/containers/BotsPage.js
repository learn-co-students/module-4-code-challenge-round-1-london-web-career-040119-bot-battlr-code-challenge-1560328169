import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const botsURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    enlistedBots: [],
    selectedBot: null,
    filteredBots: []
  }

  componentDidMount = () => {
    fetch(botsURL)
    .then(resp => resp.json())
    .then(bots => this.setState({ bots, filteredBots: bots }))
  }

  filterBots = (event) => {
    event.preventDefault()
    this.setState({ filteredBots: [...this.state.bots].filter(bot => bot.name.toLowerCase().includes(event.target.search.value.toLowerCase())) })
  }

  viewBotSpecs = bot => {
    this.setState({ selectedBot: bot })
  }

  backToCollection = () => {
    this.setState({ selectedBot: null})
  }

  enlistBot = bot => {
    if (this.state.enlistedBots.includes(bot)) return

    this.setState({ enlistedBots: [...this.state.enlistedBots, bot] })
    this.backToCollection()
  }

  releaseBot = releasedBot => {
    const arrayMinusBot = [...this.state.enlistedBots].filter(bot => releasedBot !== bot)
    this.setState({ enlistedBots: arrayMinusBot })
  }
  
  render() {
    return (
      <div>
          < YourBotArmy yourBots={this.state.enlistedBots} release={this.releaseBot}/>
          {
            this.state.selectedBot
              ? < BotSpecs 
                    bot={this.state.selectedBot} 
                    back={this.backToCollection} 
                    enlist={this.enlistBot}
                />
              : < BotCollection 
                    bots={this.state.filteredBots} 
                    view={this.viewBotSpecs}
                    filter={this.filterBots}
                />
          }
      </div>
    );
  }

}

export default BotsPage;

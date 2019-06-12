import React from "react";
import BotCard from "../components/BotCard";
import BotSearch from '../components/BotSearch'

class BotCollection extends React.Component {

  render(){
  	return (
		<div>
			< BotSearch filter={this.props.filter}/>

			<div className="ui four column grid">
				<div className="row">
					{
						this.props.bots.map(bot => < BotCard 
							bot={bot} 
							key={bot.id} 
							handleClick={() => this.props.view(bot)}/>)
					}
				</div>
			</div>
		</div>
  	);
  }

};

export default BotCollection;

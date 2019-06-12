import React from "react";

const BotSearch = props => {

    return (
        <form onSubmit={(e) => props.filter(e)} className="ui action input" style={{marginLeft: 20, marginBottom: 20}}>
            <input type="text" name="search" placeholder="Search Bots"/>
            <button type="submit" className="ui icon button">
                <i className="search icon"></i>
            </button>
        </form>
    )
}

export default BotSearch
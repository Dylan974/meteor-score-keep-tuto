import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Arnaud',
    score: 40
}, {
    _id: '2',
    name: 'Dylan',
    score: -5 
}, {
    _id: '3',
    name: 'Samuel',
    score: 100
}];

const renderPlayer = function(playersList){
    return playersList.map(function (player){
        return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
    });
};

Meteor.startup(function (){
    let title = 'Score Keep';
    let name = 'Dylan';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}!</p>
            {renderPlayer(players)}
        </div>
    );
    ReactDom.render(jsx, document.getElementById('app'));
});
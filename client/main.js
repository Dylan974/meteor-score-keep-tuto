import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerpositions } from '../imports/api/players';
import App from '../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {
            sort: {
                score: -1,
                name: 1
            }
        }).fetch();
        let positionPlayers = calculatePlayerpositions(players);
        let title = 'Score Keep';
        let subtitle = 'Created by Dylan';
        ReactDom.render(<App title={title} players={positionPlayers}/>, document.getElementById('app'));    
    });
    
});
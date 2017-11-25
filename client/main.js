import React from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function (){
    let name = 'Dylan';
    let jsx = <p>Hello {name}!</p>;
    ReactDom.render(jsx, document.getElementById('app'));
});
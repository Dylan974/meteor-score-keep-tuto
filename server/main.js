import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
    // Players.remove({});
    class Person {
        constructor(name = 'Anonymous', age = 0){
            this.name = name;
            this.age = age;
        }
        getGreeting(){
            return `Hi! I am ${this.name}.`;
        }
        getPersonDescription(){
            return `${this.name} is ${this.age} year(s) old.`;
        }
    }

    class Employee extends Person {
        constructor (name, age, title){
            super(name, age);
            this.title = title;
        }
        getGreeting(){
            if(this.hasJob){

            } else {
                
            }
        }
        hasJob(){
            return !!this.title;
        }
    }

    let me = new Employee('Dylan', 23, 'db admin');
    console.log(me.hasJob());
    console.log(me.getPersonDescription());    
});
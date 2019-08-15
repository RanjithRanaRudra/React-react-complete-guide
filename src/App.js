/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {id: 1, name: 'Jiang Chen', age: Math.round(Math.random() * 30)},
      {id: 2, name: 'Qin Wentian', age: Math.round(Math.random() * 30)},
      {id: 3, name: 'Chen Xi', age: Math.round(Math.random() * 30)},
    ]
  });
  
  const [otherState, setOtherState] = useState('Some Other State');

  const [showPersonsState, setShowPersonsState] = useState({
    showpersons: false
  });

  const nameChangeHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...personsState.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons
    });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    boeder: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  let persons = null;
  if (showPersonsState.showpersons) {
    persons = 
      <div>
        {personsState.persons.map((person, index) => {
          return <Person
            click= {() => deletePersonhandler(index)}
            name={person.name} 
            age={person.age} 
            key = {person.id}
            change = {(event) => nameChangeHandler(event, person.id)}
          />
        })}
      </div>
    ;
  }

  const togglePersonsHandler = (event) => {
    setShowPersonsState({
      showpersons: !showPersonsState.showpersons
    });
  }

  const deletePersonhandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons
    });
  }

  return (
    <div className="App">
      <h1> I'm React App !!!</h1>
      <button
        style = {style}
        onClick= {togglePersonsHandler}
      > Toggle Persons </button>
      {persons}
    </div>
  );
}

export default app;

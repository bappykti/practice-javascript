import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <h3>Q : 1 :- How does react works ?</h3>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            <h3>Q : 2 :- Difference between props and state ?</h3>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            <h3>Q : 3 :- Why we use useEffect hook except data fetching from API ?</h3>
            <p>According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed.
            The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks.</p>
            <p>
            useEffect use cases
                Running once on mount: fetch API data
                Running on state change: validating input field
                Running on state change: live filtering
                Running on state change: trigger animation on new array value
                Running on props change: update paragraph list on fetched API data update
                Running on props change: updating fetched API data to get BTC updated price 
            </p>
        </div>
    );
};

export default Questions;
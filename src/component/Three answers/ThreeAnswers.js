import React from 'react';

const ThreeAnswers = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mt-5 mb-5 bg-light p-3 rounded-3">Three Question Answer</h1>
                    <h1 className="bg-primary text-white p-2 mt-4 rounded-3">How does react work?</h1>
                    <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                    It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.
                    This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h1 className="bg-primary text-white p-2 rounded-3">difference between props and state in react</h1>
                </div>
                <div className="col-6 mt-4">
                    <h4 className="bg-success text-white p-2 text-center rounded-3">Props</h4>
                    <p>The Data is passed from one component to another.</p>
                    <p>It is Immutable (cannot be modified).</p>
                    <p>Props can be used with state and functional components.</p>
                    <p>Props are read-only.</p>
                </div>
                <div className="col-6 mt-4">
                    <h4 className="bg-success text-white p-2 text-center rounded-3">STATE</h4>
                    <p>The Data is passed within the component only.</p>
                    <p>It is Mutable ( can be modified).</p>
                    <p>State can be used only with the state components/class component (Before 16.0).</p>
                    <p>State is both read and write.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h1 className="bg-primary text-white p-2 rounded-3">Use Cases of useEffect( ) hooks except fetch data</h1>
                    <p>useEffect use cases</p>
                    <p>Running once on mount: fetch API data</p>
                    <p>Running on state change: validating input field</p>
                    <p>Running on state change: live filtering</p>
                    <p>Running on state change: trigger animation on new array value</p>
                    <p>Running on props change: update paragraph list on fetched API data update</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeAnswers;

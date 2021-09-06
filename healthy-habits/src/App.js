import React, { useState } from "react";
import Chart from "./components/chart.js";
import Details from "./components/details.js";
import "./App.css";

function App() {

   
    // TODO: Create a state variable to hold the five numbers to track. This should be an object with five properties: steps, water, food, exercise, and net. They should each be initialized with with a zero value (as a number).  Notice the hook you need has been imported at the top.
    const [numbers, setNumbers] = useState( {
        steps: 0,
        water: 0,
        food: 0,
        exercise: 0,
        net: 0,
    }
    );
    // TODO: Create a state variable to track which tab should be displayed.
    // Initialize() it to the string "net".
    const [currType, setCurrType] = useState("net");
    

    // TODO: Inside each of the following handlers, update the corresponding numbers property from state.
    const handleUpdateSteps = (amount) => {
<<<<<<< HEAD
        // You can use your setter to update the state variable directly with the new amount.
        setNumbers(prevState =>{
            return {
                ...prevState,
                steps: amount,
            }
        });
    };
    const handleUpdateWater = (amount) => {
        // You can use your setter to update the state variable directly with the new amount.
        setNumbers(prevState => {
            return {
                ...prevState,
                water: amount,
            }
        });
=======
        // Use prevState to change just the steps property within the numbers object.
        
    };
    const handleUpdateWater = (amount) => {
        // Use prevState to change just the water property within the numbers object.

>>>>>>> 1117e10b8a4184365980b726395f02930b67ca0e
    };
    const handleUpdateFood = (amount) => {
        // You'll need to update both the food calories and the net calories here (add calories consumed). Use prevState to ensure you are adding the new amount to the existing total.
        setNumbers(prevState => {
            return {
                ...prevState,
                food: prevState.food + amount,
                net: prevState.net + amount,
            }
        }).calories();
        setNumbers.net();
    };
    const handleUpdateExercise = (amount) => {
<<<<<<< HEAD
        // You'll need to update both the food calories and the net calories here (subtract calories burned). Use prevState to ensure you are adding the new amount to the existing total. 
            setNumbers(prevState=> {
                return {
                    ...prevState,
                    exercise: prevState.exercise + amount,
                    net: prevState.net - amount,
                }
            })
=======
        // You'll need to update both the exercise calories and the net calories here (subtract calories burned). Use prevState to ensure you are adding the new amount to the existing total. 

>>>>>>> 1117e10b8a4184365980b726395f02930b67ca0e
    };

    // TODO: Change the current type of details to be displayed.
    const handleCurrTypeChange = (type) => {
<<<<<<< HEAD
        // Use the setter from state.
        setCurrType(type);
=======
        // Use the setter you created with your state variable.
>>>>>>> 1117e10b8a4184365980b726395f02930b67ca0e
        
    };

    // JSX to display all content on page
    return (
        <div className="app">

            <header className="app-header">
                <h1>Healthy Habits</h1>
            </header>

            {/* TODO: Pass the numbers object into the Chart component as a prop */}
            <Chart numbers = {numbers} />

            <div className="tabs-container">
                <div
                    className="tab net-bkg"
                    onClick={() => handleCurrTypeChange("net")}
                >
                    INFO
                </div>

                <div
                    className="tab water-bkg"
                    onClick={() => handleCurrTypeChange("water")}
                >
                    WATER+
                </div>

                <div
                    className="tab steps-bkg"
                    onClick={() => handleCurrTypeChange("steps")}
                >
                    STEPS+
                </div>

                <div
                    className="tab food-bkg"
                    onClick={() => handleCurrTypeChange("food")}
                >
                    FOOD+
                </div>

                <div
                    className="tab exercise-bkg"
                    onClick={() => handleCurrTypeChange("exercise")}
                >
                    EXERCISE+
                </div>
            </div>
            
            {/* TODO: Pass the current type into the Details component */}
<<<<<<< HEAD
            {/* TODO: Pass the four update handler functions to the Details component below. Check the propTypes object at the bottom of Details.js to get the prop names, then look just below the state variables in this file to get the names of the handler functions. */}
            <Details 
            type = {currType} 
            updateSteps = {handleUpdateSteps} 
            updateWater = {handleUpdateWater}
            updateFood = {handleUpdateFood} 
            updateExercise = {handleUpdateExercise}    
            />
=======
            {/* TODO: Pass the four handler functions to the Details component below. Check the propTypes object at the bottom of Details.js to see what the names of the attributes should be, then look just below the state variables at the top of this file for the names of the functions you are passing down. */}
            <Details />
>>>>>>> 1117e10b8a4184365980b726395f02930b67ca0e
            
        </div>
    );
}

export default App;

import React from 'react'
import './Home.css';
import DiceGame from './DiceGame';
import{Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <div id='home'>

            <div>
            <img id='homeimg'src="https://pngimg.com/d/dice_PNG129.png" alt="" />
            </div>
            <div>
                <h1 id='dicetext'>DICE GAME</h1>

             <Link to="/DiceGame" >
          
            <button id='playnow'>Play Now</button>
          
        </Link>
            </div>
        </div>

        
    </div>
  )
}

export default Home
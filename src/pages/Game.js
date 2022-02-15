import React, { Component, Fragment } from "react";
import './Game.css';
import batu from '../assets/games/batu.png'
import kertas from '../assets/games/kertas.png'
import gunting from '../assets/games/gunting.png'
import refresh from '../assets/games/refresh.png'
import NavbarTop from '../components/NavbarTop'
import 'bootstrap/dist/css/bootstrap.min.css'
// let play = () => console.log('batu')
// let playGunting = () => console.log('gunting')
// let playKertas = () => console.log('kertas')
import {Helmet} from "react-helmet";
// import GameSuit from "../assets/js/game-suit";



class Game extends Component{
    
    playerChoose = (player) => {
                
        const comShuffle = ['batu', 'kertas', 'gunting'];
        this.comChoose = comShuffle[Math.floor(Math.random() * comShuffle.length)];

        if(player === this.comChoose){
            alert(`Hello, ${player}! ${this.comChoose} draw`);
          
        }else if (
            (player === "batu" && this.comChoose === "gunting") || (player === "gunting" && this.comChoose === "kertas") || (player === "kertas" && this.comChoose === "batu")
            ){
                alert(`Hello, ${player}! ${this.comChoose} player win`);
        }else{
            alert(`Hello, ${player}! ${this.comChoose} com win`);
        }

       
      };
    
      
    render(){

        return (
  

            <Fragment>
                <>
                <NavbarTop sticky="top" />                 
                </>

                                 
                        
                <div className="container-game">
                    <div className="wrapper wrapper-3">
                        <div className="user">

                            <div className="box-4">
                                <p>PLAYER</p>
                            </div>

                            <div onClick={() => {this.playerChoose("batu")}} className="box-3" id="batu-p">
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div onClick={() => {this.playerChoose("kertas")}}  className="box-3" id="kertas-p" >
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div onClick={() => {this.playerChoose("gunting")}} className="box-3" id="gunting-p">
                                <img className="suit" src={gunting} alt="gunting" />    
                            </div>
                        </div>

                        <div className="mid">
                            <div className="result" id="hasil">VS</div>
                        </div> 

                        <div className="com">
                            <div className="box-4">
                            <p>COM</p>
                            </div>
                            
                            <div  className="box-3" id="batu-c" value='batu'>
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div  className="box-3" id="kertas-c" value='kertas'>
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div  className="box-3" id="gunting-c" value='gunting'>
                                <img className="suit" src={gunting} alt="gunting" /> 
                            </div>   
                        </div>
                    </div>
                </div> 

                <div className="container-game">
                    <div className="wrapper wrapper-3">
                        <div className="refresh">
                            <div className="box-2" id="refresh">
                                <img className="ref-btn" src={refresh} alt="gunting" />
                            </div>  
                        </div>   
                    </div>
                </div>
                
                <Helmet>
                <script src="../assets/js/game-suit.js" type="text/javascript"></script>
                </Helmet>
                
                

            </Fragment>
            
        )
    }
}

export default Game;

import React, { Component, Fragment } from "react";
import './Game.css';
import batu from '../assets/games/batu.png'
import kertas from '../assets/games/kertas.png'
import gunting from '../assets/games/gunting.png'
import refresh from '../assets/games/refresh.png'
import NavbarTop from '../components/NavbarTop'
import 'bootstrap/dist/css/bootstrap.min.css';

class Game extends Component{
    render(){
        return (
  

            <Fragment>
                <>
                <NavbarTop sticky="top" />                 
                </>
                                               
       
                {/* <div className="container-fluid" >
                    <div className="wrapper-2">
                    <div className="upper-link" id="kembali">
                    <a href="index.html"><ion-icon name="arrow-back-outline" size="large"></ion-icon></a>
                    </div>

                    <div className="upper-link">
                        logo
                    </div><div className="wrapper-2"></div>

                    <div className="upper-link"  id="kembali"><p>ROCK PAPER SCISSOR</p></div>
                    </div>
                </div> */}


            
                <div className="container-game">
                    <div className="wrapper wrapper-3">
                        <div className="user">

                            <div className="box-4">
                                <p>PLAYER</p>
                            </div>

                            <div className="box-3" id="batu-p" value='batu'>
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div className="box-3" id="kertas-p" value='kertas'>
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div className="box-3" id="gunting-p" value='gunting'>
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
                            
                            <div className="box-3" id="batu-c" value='batu'>
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div className="box-3" id="kertas-c" value='kertas'>
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div className="box-3" id="gunting-c" value='gunting'>
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

            </Fragment>
            
        )
    }
}

export default Game;
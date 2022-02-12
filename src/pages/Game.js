import React, { Component, Fragment } from "react";
import './Game.css';
import batu from '../assets/games/batu.png'
import kertas from '../assets/games/kertas.png'
import gunting from '../assets/games/gunting.png'
import refresh from '../assets/games/refresh.png'
import NavbarTop from '../components/Navbar.js'

class Game extends Component{
    render(){
        return (
  

            <Fragment>
                <NavbarTop />                                     
       
                <div class="container-fluid" >
                    <div class="wrapper-2">
                    <div class="upper-link" id="kembali">
                    <a href="index.html"><ion-icon name="arrow-back-outline" size="large"></ion-icon></a>
                    </div>

                    <div class="upper-link">
                        logo
                    </div><div class="wrapper-2"></div>

                    <div class="upper-link"  id="kembali"><p>ROCK PAPER SCISSOR</p></div>
                    </div>
                </div>



                <div class="container-game">
                    <div class="wrapper wrapper-3">
                        <div class="user">

                            <div class="box-4">
                                <p>PLAYER</p>
                            </div>

                            <div class="box-3" id="batu-p" value='batu'>
                                <img class="suit" src={batu} alt="Batu" />
                            </div>

                            <div class="box-3" id="kertas-p" value='kertas'>
                                <img class="suit" src={kertas} alt="kertas" />
                            </div>

                            <div class="box-3" id="gunting-p" value='gunting'>
                                <img class="suit" src={gunting} alt="gunting" />    
                            </div>
                        </div>

                        <div class="mid">
                            <div class="result" id="hasil">VS</div>
                        </div> 

                        <div class="com">
                            <div class="box-4">
                            <p>COM</p>
                            </div>
                            
                            <div class="box-3" id="batu-c" value='batu'>
                                <img class="suit" src={batu} alt="Batu" />
                            </div>

                            <div class="box-3" id="kertas-c" value='kertas'>
                                <img class="suit" src={kertas} alt="kertas" />
                            </div>

                            <div class="box-3" id="gunting-c" value='gunting'>
                                <img class="suit" src={gunting} alt="gunting" /> 
                            </div>   
                        </div>
                    </div>
                </div> 

                <div class="container-game">
                    <div class="wrapper wrapper-3">
                        <div class="refresh">
                            <div class="box-2" id="refresh">
                                <img class="ref-btn" src={refresh} alt="gunting" />
                            </div>  
                        </div>   
                    </div>
                </div>

            </Fragment>
            
        )
    }
}

export default Game;
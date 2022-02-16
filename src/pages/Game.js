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

    constructor(props) {
        super(props);
        this.state = {boxColor: '',boxColor2:'',boxColor3:''};
        this.state = {result: "VS"}
     
      }

      updateContent = () => {
        
    }

      refresh() {
        this.setState(() => ({
            boxColor:  '',
            boxColor2:  '',
            boxColor3:  '',
            boxColor4:  '',
            boxColor5:  '',
            boxColor6:  '',
            result: 'VS'
          }));
      }
    
    playerChoose = (player) => {
                
        const comShuffle = ['batu', 'kertas', 'gunting'];
        this.comChoose = comShuffle[Math.floor(Math.random() * comShuffle.length)];

        if(this.comChoose === 'batu'){
            this.setState(() => ({
                boxColor4:  'gold',
              }));
        }else if(this.comChoose === 'kertas'){
            this.setState(() => ({
                boxColor5:  'gold',
              }));
        }else{
            this.setState(() => ({
                boxColor6:  'gold',
              }));
        }

        if(player === 'batu'){
            this.setState(() => ({
                boxColor:  'gold',
              }));
        }else if (player === 'kertas'){
            this.setState(() => ({
                boxColor2:  'gold',
              }));
        }else{
            this.setState(() => ({
                boxColor3:  'gold',
              }));
        }

        
        if(player === this.comChoose){
    
            alert(`Hello, ${player}! ${this.comChoose} draw`);
            this.setState({ result: "draw"});
          
        }else if (
            (player === "batu" && this.comChoose === "gunting") || (player === "gunting" && this.comChoose === "kertas") || (player === "kertas" && this.comChoose === "batu")
            ){
        
                alert(`Hello, ${player}! ${this.comChoose} player win`);
                this.setState({ result: "Pwin"});
        }else{
            
            alert(`Hello, ${player}! ${this.comChoose} com win`);
            this.setState({ result: "Com Win"});
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

                            <div onClick={() => {this.playerChoose("batu")}} className="box-3" style={{ backgroundColor: this.state.boxColor }}id="batu-p">
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div onClick={() => {this.playerChoose("kertas")}}  className="box-3" style={{ backgroundColor: this.state.boxColor2 }} id="kertas-p" >
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div onClick={() => {this.playerChoose("gunting")}} className="box-3" style={{ backgroundColor: this.state.boxColor3 }} id="gunting-p">
                                <img className="suit" src={gunting} alt="gunting" />    
                            </div>
                        </div>

                        <div className="mid">
                            <div className="result" id="hasil">{ this.state.result }</div>
                        </div> 

                        <div className="com">
                            <div className="box-4">
                            <p>COM</p>
                            </div>
                            
                            <div  className="box-3" id="batu-c" style={{ backgroundColor: this.state.boxColor4 }} value='batu'>
                                <img className="suit" src={batu} alt="Batu" />
                            </div>

                            <div  className="box-3" style={{ backgroundColor: this.state.boxColor5 }} id="kertas-c" value='kertas'>
                                <img className="suit" src={kertas} alt="kertas" />
                            </div>

                            <div  className="box-3" style={{ backgroundColor: this.state.boxColor6 }} id="gunting-c" value='gunting'>
                                <img className="suit" src={gunting} alt="gunting" /> 
                            </div>   
                        </div>
                    </div>
                </div> 

                <div className="container-game">
                    <div className="wrapper wrapper-3">
                        <div className="refresh">
                            <div className="box-2" id="refresh">
                                <img className="ref-btn" onClick={() => {this.refresh()}} src={refresh} alt="gunting" />
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

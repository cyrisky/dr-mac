import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Contactus from './Contactus'
import Masthead from './Masthead'

class Homepageplayer extends Component {

   render() {
    return (
        <Fragment>
            <Masthead />
            
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">The Top 3 Players in SWIT Game in 2021 </h2>
                        <h3 class="section-subheading text-muted">Are you the next?</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                                <h4>Rafa</h4>
                                <p class="text-muted">Points:120</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                                <h4>Riana Richis</h4>
                                <p class="text-muted">Points: 9,635</p>
                                <p class="text-muted">Tourn Played: 24</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                                <h4>Atlas Halilintar</h4>
                                <p class="text-muted">Points: 7,875</p>
                                <p class="text-muted">Tourn Played: 15</p>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <Link>
                        <a class="btn btn-primary btn-xl text-uppercase">Let's Play!</a>
                        </Link>
                        <Link>
                        <a class="btn btn-secondary btn-xl text-uppercase">Game List</a>
                        </Link>
                        
                    </div>
                </div>
            </section>
            <Contactus />
        </Fragment>
    )
}
}
export default Homepageplayer
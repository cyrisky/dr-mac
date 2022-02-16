import React from 'react';

class Home extends React.Component {
    render(){
        return(
            /* NAVIGATOR */
            <>
                <div class="jumbotron1">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-opacity-75">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">FSW Group 1</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active fw-bold " aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text fw-bold" href="GameList">GAME LIST</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link fw-bold" href="Profile">PROFILE</a>
                                    </li>
                                    <li class="nav-item2">
                                        <a class="nav-link fw-bold" href="Register">SIGN UP</a>
                                    </li>
                                    <li class="nav-item2">
                                        <a class="nav-link fw-bold" href="Login">LOGIN</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <h1 class="display-4">PLAY TRADITIONAL GAME</h1>
                    <p class="lead">Experience new traditional game play</p>
                    <a class="btn btn-warning btn-lg" href="Game" role="button">PLAY NOW</a>

                </div>
                
                {/* Halaman 2 */}
                <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="assets/image/01.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-5">Rock Paper Scissors</h2>
                            <p class="display-10">Rock paper scissors (also known by other orderings of the three items, with "rock" sometimes being called "stone", or as Rochambeau, roshambo, or ro-sham-bo)  is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). "Scissors" is identical to the two-fingered V sign (also indicating "victory" or "peace") except that it is pointed horizontally instead of being held upright in the air.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="sistem-req">
    <div class="sub-judul-sysreq">
      <h5 class="special-3 text-white">Can My Computer Run This Game?</h5>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <h1 class="sysreq-title text-white">SYSTEM REQUIREMENTS</h1>
        <table class="table table-bordered table-content-sys">
          <tbody>
            <tr>
              <td>
                <h2 class="text-warning">OS:</h2>
                <p class="requirements-info-content">
                  Windows 7 64-bit only<br/>(No OSX support at this time)
                </p>
              </td>
              <td>
                <h2 class="requirements-info text-warning">Processor:</h2>
                <p class="requirements-info-content">Intel Core 2 Duo @2.4GHz or AMD Athlon X2 @ 2.8GHz</p>
              </td>
            </tr>
            <tr>
              <td>
                <h2 class="requirements-info text-warning">Memory:</h2>
                <p class="requirements-info-content">4 GB RAM</p>
              </td>
              <td>
                <h2 class="requirements-info text-warning">Storage:</h2>
                <p class="requirements-info-content">8 GB available space</p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h2 class="requirements-info text-warning">Graphics:</h2>
                <p class="requirements-info-content">
                  NVIDIA GeForce GTX 660 2GB or<br/>AMD Radeon HD 7850 2GB
                  DirectX11 (Shader Model S)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</section>

<footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>

        </>
            );
    }
}

export default Home;
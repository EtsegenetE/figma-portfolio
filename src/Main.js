import audition from "./images/pics/audition.png";
import carsell from "./images/pics/carsell.png";
import Huzi from "./images/pics/Huzi.png";
import soap from "./images/pics/soap.png";
import traviso from "./images/pics/traviso.png";
import weather from "./images/pics/weather.png";


function Main () {
    return (
        <container>
            <div className="main">
                <h3>My Portfolio</h3>
                <div className="portfolio-img">
                    <div className="huzi">
                            <h4 className="over-lay" >Huzi</h4>
                        <img src={Huzi} alt="img1" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                     <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                  </div>
                  <div className="soap">
                        <h4 className="over-lay">Soap Soap</h4>
                        <img src={soap} alt="img2" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                    <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                   </div>
                   <div className="traviso">
                        <img src={traviso} alt="img3" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                    <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                   </div>
                  <div className="carsell">
                        <img src={carsell} alt="img4" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                    <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                  </div>
                 <div className="audition">
                        <img src={audition} alt="img5" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                    <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                   </div>
                  <div className="weather">
                        
                        <img src={weather} alt="img6" width="406px" height="280px"/>
                        <div className="mobile-list">
                                <ul>
                                    <li><a href="#HTML/CSS">HTML/CSS</a></li>
                                    <li><a href="#Ruby">Ruby on Rails</a></li>
                                    <li><a href="#Javascript">JavaScript</a></li>
                                </ul>
                                <button>see the project</button>
                        </div>
                   </div>
                </div>
            </div>
        </container>
    )
}

export default Main;
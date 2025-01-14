
import Shape3 from "./images/Shape3.png";
import Shape4 from "./images/Shape4.png";
import Subtract2 from "./images/Subtract2.png";
import Subtract3 from "./images/Subtract3.png";
import Subtract4 from "./images/Subtract4.png";
import Subtract5 from "./images/Subtract5.png";
import Union3 from "./images/Union3.png";
import Union4 from "./images/Union4.png";
import Menu from "./Menu";
 
function Header() {
    return (
        <container>
            <div  className="container">
                
                 <Menu />
                <div className="right-header">
                    <h1>Etsegenet Elias</h1>
                    <h3>Front-End Developer</h3>
                    <p> Hello I am a Front-End developer! I can help you build a product,
                    feature or website. Look through some of my work and experience! If
                    you like what you see and have project you need coded, don’t
                    hesistate to contact me.</p>
                    <div className="G-14">
                        <p>My works in social networks</p>
                        <div className="G-14-img">
                            <a href="https://github.com/EtsegenetE">
                                 <img 
                                     src={Union3} 
                                     alt="img1" 
                                     width="27px" 
                                     height="27px"  
                                     />
                            </a>
                            <a href="#shape" >
                                <img 
                                     src={Shape3} 
                                     alt="img2" 
                                     width="27px" 
                                     height="27px" 
                                />
                            </a> 
                            <a href="#pic" >
                                <img 
                                  src={Shape4} 
                                   alt="img3" 
                                   width="27px" 
                                   height="27px" 
                                />
                            </a>  
                            <a href="#image" >
                                <img 
                                   src={Subtract2} 
                                   alt="img4" 
                                   width="27px" 
                                   height="27px" 
                                />
                            </a> 
                            <a href="#subtract" > 
                                <img 
                                   src={Subtract3} 
                                   alt="img5" 
                                   width="27px" 
                                   height="27px" 
                                />
                                </a> 
                            <a href="#union" >
                                <img 
                                   src={Union4} 
                                   alt="img6" 
                                   width="27px"
                                    height="27px" 
                                />
                            </a> 
                            <a href="#sub" >
                                <img 
                                   src={Subtract4} 
                                   alt="img7" 
                                   width="27px" 
                                   height="27px" 
                                />
                            </a> 
                            <a href="https://www.instagram.com/etsegenetelias/">
                                <img 
                                    src={Subtract5} 
                                    alt="img8" 
                                    width="27px" 
                                    height="27px" 
                                />
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </container>
    )
}

export default Header;
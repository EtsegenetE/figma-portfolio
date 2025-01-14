import picture from "./images/picture.png";
function Project(){
    return (
       <div className="soap">
          <img src={picture} width="1079px" height="913px" />
          <div className="detail">
            <h3>SoapSoap</h3>
            <ul>
               <li><a href="#HTML/CSS">HTML/CSS</a></li>
               <li><a href="#Ruby">Ruby on Rails</a></li>
               <li><a href="#Javascript">JavaScript</a></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
       </div>
    );
}

export default Project;
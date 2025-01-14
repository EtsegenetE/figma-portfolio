import React, { useEffect, useState } from "react";

function Menu () {
   const [activeSection, setActiveSection] = useState("");

   useEffect(() =>{

      const sections = document.querySelectorAll("section");
      console.log("sections found:", sections);

      const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    console.log("Intersecting:", entry.target.id);
                    setActiveSection(entry.target.id);
                }
            });
        },
        {threshold:  0.5}
      );
      
      sections.forEach((section) => observer.observe(section));

      return() => {
        observer.disconnect();
     
    };
   }, []);

    return (
        <div className="left-header">
        <h3>CP</h3>
        <nav className="nav">
            <ul>
                 <li className={activeSection === "intro-section" ? "active" : ""} >
                    <a href="#intro-section">Intro</a>
                </li>
                <li className={activeSection === "portfolio-section" ? "active" : ""} >
                     <a href="#portfolio-section">Portfolio</a>
               </li>
               <li className={activeSection === "about-section" ? "active" : ""} >
                      <a href="#about-section">About</a>
                </li>
                <li className={activeSection === "contact-section" ? "action" : ""} >
                    <a href="#contact-section">Contact</a>
                </li>
            </ul>
       </nav>
    </div>
    );
}

export default Menu;
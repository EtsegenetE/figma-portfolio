import React from "react";
function About() {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=0BysJ2vOcVW47c3RhcnRlcl9maWxl"
        link.download = "myresume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <container>
            <div className="about-me">
                <h3>About me</h3>
                <p>In three sentences describe who you are as a proffessional. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.</p>
                <button onClick={handleDownload}>Get my resume </button>
            </div>
            <div className="boxes">
                <div className="branch">
                    <h4>Language</h4>
                    <ul>
                        <li>JavaScript(ES5/ES6)</li>
                        <li>Ruby</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="branch">
                    <h4>Frameworks</h4>
                     <ul>
                        <li>Bootstrap</li>
                        <li>Ruby on Rails</li>
                        <li>Rspec</li>
                        <li>Selenium</li>
                    </ul>
                </div>
                <div className="branch">
                    <h4>Skills</h4>
                    <ul>
                        <li>Bootstrap</li>
                        <li>Bulma</li>
                        <li>Codekit</li>
                        <li>Codepen</li>
                        <li>Github</li>
                        <li>Gitlab</li>
                    </ul>
                </div>
            </div>
        </container>
    );
}

export default About;
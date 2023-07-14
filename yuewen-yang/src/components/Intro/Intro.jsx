import React from "react";
import "./Intro.css";
import insLogo from "../../assets/ins.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";

function Intro(props) {
    return (
        <div className="intro">
            <p className="leading">Hi 👋   I'm Yuewen.</p>
            <p className="descript">&#128205; New York City</p>
            {/* <p className="descript">&#x1F392;  NYU</p> */}
            <div className="descript">&#x1F392; prev. 
            <a href="https://math.nyu.edu/dynamic/undergrad/ba-cas/majors-minors/major-minor-requirements/#mathcsmajor" target="_blank" className="nyu">Math & CS 23' @ NYU Courant</a>
            </div>
            <p>   </p>
            <div className="descript">&#x1F4D4; incoming
            <a href="https://tech.cornell.edu/programs/masters-programs/jacobs-technion-cornell-dual-ms-connective-media/" target="_blank" className="cornell">MS Connective Media @ Cornell Tech</a>
            </div>
            <p className="descript">&#x1F5A5; working on full-stack development 
                <strong className="hl"> +</strong> research in human-computer interaction 
                <strong className="hl"> +</strong> and more...
            </p>
            <p className="descript">&#x1F4D6; I'm interested in imagineering human-centered workplace for the future.</p>
            <ul className="keywords">
                <l className="keyword">cscw
                </l>
                <l className="keyword">behavioral health
                </l>
                <l className="keyword">human-ai collaboration
                </l>
                <l className="keyword">mixed reality
                </l>
                
                {/* <div className="keyword">human-ai collaboration
                </div> */}
            </ul>

            <div className="break"></div>
            
            <div className="links">
                <a href="https://www.linkedin.com/in/yuewen-yang/" target="_blank">
                    {/* <img src={linkedinLogo} className="logo" alt="LinkedIn logo" /> */}
                    linkedin
                </a>
            </div> 
            <div className="links">
                <a href="https://github.com/kapa-moon" target="_blank">
                    {/* <img src={githubLogo} className="logo" alt="GitHub logo" /> */}
                    github
                </a>
            </div>
            <div className="links">
                <a href="https://yuewen.space/" target="_blank">
                    space
                </a>
            </div>
            <div className="links">
                <a href="https://www.instagram.com/yuewenyyy/" target="_blank">
                    {/* <img src={insLogo} className="logo" alt="Instagram logo" /> */}
                    instagram
                </a>
            </div>
            
        </div>
    );


        
}

export default Intro;
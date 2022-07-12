import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import myData from "./myData.json";
import InfoDetail from "./component/InfoDetail";
import ExpDetail from "./component/ExpDetail";
import MyProject from "./component/MyProject";
import BtnLink from "./component/BtnLink";
import ContactLink from "./component/ContactLink";

function App() {
    const langSkillInfo = myData.langSkillInfo;
    const personalInfo = myData.personalInfo;
    const proSkillInfo = myData.proSkillInfo;
    const eduInfo = myData.eduInfo;
    const workInfo = myData.workInfo;
    const projectInfo = myData.projectInfo;
    const showAll = myData.showAll;
    const contactInfo = myData.contactInfo;
    return (
        <div className="container">
            {/* <!-- START NAV SECTION --> */}

            <nav id="navbar" className="nav">
                <a href="#welcome-section" className="logo">
                    <i className="fa-solid fa-house"></i>
                </a>
                <ul className="nav-list">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#experience">EXPERIENCE</a>
                    </li>
                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#contact">CONTACTS</a>
                    </li>
                </ul>
            </nav>

            {/* <!-- END NAV SECTION --> */}

            {/* <!-- START WELCOME SECTION --> */}

            <section id="welcome-section" className="welcome">
                <div className="pro-img">
                    <img
                        src="https://cdn.pixabay.com/photo/2022/01/31/12/46/bird-6983434_960_720.jpg"
                        alt="profile-img"
                    />
                </div>
                <div className="intro-txt">
                    <h1>Hi, I am Ratchagree</h1>
                    <p>a software engineer</p>
                </div>
            </section>

            {/* <!-- END WELCOME SECTION --> */}

            {/* <!-- START ABOUT SECTION --> */}

            <section id="about">
                <div className="info-container">
                    <div className="info personal-info">
                        <h2>Personal information</h2>
                        <InfoDetail Info={personalInfo} uuid={uuidv4} />
                    </div>

                    <div className="info language-skill">
                        <h2>Language skills</h2>
                        <InfoDetail Info={langSkillInfo} uuid={uuidv4} />
                    </div>

                    <div className="info Programming-skill">
                        <h2>Programming skills</h2>
                        <InfoDetail Info={proSkillInfo} uuid={uuidv4} />
                    </div>
                </div>
            </section>

            {/* <!-- END ABOUT SECTION --> */}

            {/* <!-- END EXPERIENCE SECTION --> */}

            <section id="experience">
                <div className="exp-container">
                    <div className="exp">
                        <div className="exp-type">
                            <h2>
                                <i className="fa-solid fa-graduation-cap"></i>
                                Education
                            </h2>
                        </div>
                        <ExpDetail Info={eduInfo} uuid={uuidv4} />
                    </div>

                    <div className="exp">
                        <div className="exp-type">
                            <h2>
                                <i className="fa-solid fa-laptop-code"></i>
                                Work Experiences
                            </h2>
                        </div>
                        <ExpDetail Info={workInfo} uuid={uuidv4} />
                    </div>
                </div>
            </section>

            {/* <!-- END EXPERIENCE SECTION --> */}

            {/* <!-- START PROJECTS SECTION --> */}

            <section id="projects" className="projects-section">
                <h2 className="projects-section-header">
                    These are some of my projects
                </h2>
                <MyProject Info={projectInfo} uuid={uuidv4} />
                <BtnLink Info={showAll} key={uuidv4()} />
            </section>

            {/* <!-- END PROJECTS SECTION --> */}

            {/* <!-- START CONTACT SECTION --> */}

            <section id="contact" className="contact-section">
                <div className="contact-section-header">
                    <h2>Let's work together...</h2>
                    <p>Contacts</p>
                </div>
                <ContactLink Info={contactInfo} uuid={uuidv4} />
                <div className="copy-txt">
                    <p>
                        Copyright 2022 by Ratchagree Amornlikitsin. All Rights
                        Reserved.
                    </p>
                </div>
            </section>

            {/* <!-- END CONTACT SECTION --> */}
        </div>
    );
}

export default App;

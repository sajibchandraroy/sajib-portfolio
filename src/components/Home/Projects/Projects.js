import React from 'react';
import image1 from '../../../images/creative-agency-service.web.app_.png';
import image2 from '../../../images/travelGuru.png';
import image3 from '../../../images/volunteer-network-project.web.app_.png';
import image4 from '../../../images/hotGadjet.png';
import image5 from '../../../images/socialBuddy.png';
import image6 from '../../../images/doctorPortal.png';
import image7 from '../../../images/E-School.png';
import image8 from '../../../images/to-do-list.png';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
const projectData = [
    {
        title: 'creative-agency',
        description: 'Single page web application with the dashboard. A customer can order and review for service. An admin can see orders add a new service from the dashboard.',
        image: image1,
        github: 'https://github.com/Sumita5/creative-agency-client.git',
        livelink: 'https://creative-agency-service.web.app/',
    },
    {
        title: 'volunter-network',
        description: 'Single page web application with the dashboard. People can choose volunteer work for a specific date and delete them if they want. An admin can add new volunteer work.',
        image: image3,
        github: 'https://github.com/Sumita5/volunteer-network.git',
        livelink: 'https://volunteer-network-project.web.app/',
    },
    {
        title: 'travel-guru',
        description: 'Single page web application for tour booking system project. A customer can book a tour and see hotels based on their destination.',
        image: image2,
        github: 'https://github.com/Sumita5/travel-guru.git',
        livelink: 'https://travel-guru-app.web.app/',
    },
    {
        title: 'Hot-Gadget',
        description: 'A static e-commerce website with responsive layouts for every kind of device. The header section builds with a carousel slider.',
        image: image4,
        github: 'https://github.com/Sumita5/Hot-gadgets.git',
        livelink: 'coming soon',
    },
    {
        title: 'E-School',
        description: 'A static online learning website with responsive layouts for every kind of device. The review section builds with a carousel slider.',
        image: image7,
        github: 'https://github.com/Sumita5/Project-2.git',
        livelink: 'coming soon',
    },
    {
        title: 'Social-Buddy',
        description: 'A static online learning website with responsive layouts for every kind of device. The review section builds with a carousel slider.',
        image: image5,
        github: 'https://github.com/Sumita5/Social-Buddy.git',
        livelink: 'coming soon',
    },
    {
        title: 'Doctors-Portal',
        description: 'Single page web application with the dashboard. A patient can book an appointment for a specific date and time. A doctor can see appointments for a specific date.',
        image: image6,
        github: 'https://github.com/sajibchandraroy/Doctors-Portal.git',
        livelink: 'https://bhowmick-doctors-portal.web.app',
    },
    {
        title: 'To-Do-List',
        description: 'Single Page web application for entering activity, Updating and deleting',
        image: image8,
        github: 'https://github.com/Sumita5/react-to-do.git',
        livelink: 'https://to-do-list-all.web.app/home',
    }


];

const Projects = () => {
    return (
        <div id="projects" className="Projects container py-3">
            <div className="header text-center">
                <h2>MY ACCOMPLISHED PROJECTS</h2>
                <p>An eye for detail makes my works excellent</p>
                <div className="wrapper">
                    <div className="divider div-transparent div-dot"></div>
                </div>
            </div>
            <div className="row">
                {
                    projectData.map(pd =>
                        <div className="col-lg-4 col-md-6">
                            <div className="card mt-4">
                                <img className="card-img-top" src={pd.image} alt="" />
                                <div className="card-body text-decoration-none">
                                    <h4 className="card-title">{pd.title}</h4>
                                    <p className="card-text">{pd.description}</p>
                                    <div className="technology mb-2"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>

                                    <a href={pd.github} target="_blank" >
                                        <button type="button" className="btn btn-secondary btn-block">
                                            <FontAwesomeIcon className="icon mr-2" icon={faGithub} />
                                   GitHub Link</button>
                                    </a>

                                    <a href={pd.livelink} target="_blank">
                                        <button type="button" className="btn btn-primary btn-block">
                                            <FontAwesomeIcon className="icon mr-2" icon={faExternalLinkAlt} />
                                    Live site</button>
                                    </a>                                   
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>


    );
};

export default Projects;
import React, {useState, useRef} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/homePage/Home';
import "./App.css"
import Project from './pages/projectPages/Project';
import ProjectListPage from './pages/ProjectListPage/ProjectListPage';
import projectsData from './Data/projectData';


const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitchRef = useRef(null); // Ref for the toggle switch
  const SidebarRef = useRef(null);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const routes = [
    { path: '/', name: 'Home' },
    // { path: '/about', name: 'About' },
    // Add more routes as needed
  ];

  const dropDownProps = {
    dropDownTitle: "Projects",
    dropDownRoute: "/projects",
    itemList: projectsData.map(projectInfo => {
      return {
        path: projectInfo.path,
        name: projectInfo.shortName
      }
    })
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <div className='sun_moon'>{darkMode? '☀️' : '🌒'}</div>
        <div className="toggle-switch-div">
          <label className={`toggle-switch`} ref={toggleSwitchRef}>
            <input type="checkbox" onChange={toggleMode} />
            <span className="slider"></span>
          </label>
        </div>
        <Sidebar ref={SidebarRef} routes={routes} pic={'/ProfilePic.jpeg'} dropDownProps={dropDownProps} dark={darkMode} toggleSwitchRef={toggleSwitchRef}/>
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home dark={darkMode}/>} />
            <Route path="/about" element={<Home dark={darkMode}/>} />
            <Route path="/projects" element={<ProjectListPage projectData={projectsData} dark={darkMode}/>} />
            {projectsData.map(projectInfo => {
              return <Route key={projectInfo.path} path={projectInfo.path} element={<Project {...projectInfo} dark={darkMode}/>}/>
            })}
            
          </Routes>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
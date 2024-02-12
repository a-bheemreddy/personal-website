import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./Home.css"

function Home({dark}) {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 700,
      backSpeed: 25,
      typeSpeed: 50,
      strings: ["Student @ University of Illinois at Urbana Champaign", "Computer Science Major @ Grainger College of Engineering", "Statistics Minor"],
    });
  }, []);

  return (
    <div className="outer">
        <header className={`${dark? 'dark' : ''}`}>
            <h1>Welcome to my Homepage!</h1>
        </header>
        <div className="container">
          <div className="content">
            <div className="home-image-container">
              <img className="profile-image" src={"profilePic1.jpeg"} alt="Anshul Bheemreddy" />   
            </div>
            <div className="titles-container">
              <div>
                <h2 className={`main-title htext ${dark? 'dark' : ''}`}>Hello! My name is</h2>
                <div>
                  <h1 className={`name-title htext ${dark? 'dark' : ''}`}>Anshul Bheemreddy</h1>
                  <div>
                    <h3 className={`cool-text htext ${dark? 'dark' : ''}`}> <span ref={textRef}></span> </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`paragraph-div htext ${dark? 'dark' : ''}`}>
              <p>
              I'm Anshul Bheemreddy, a computer science undergrad with a passion for technology. My journey in the world of computers began with curiosity and has grown into a deep-seated interest in solving real-world problems through code.
              </p>
              <p>
              While I explore various facets of computer science, I'm particularly drawn to Artificial Intelligence and Machine Learning. These fields captivate me with their potential to revolutionize industries and our daily lives.
              </p>
              During my academic, research, and internship endevors, I have had the opportunity to collaborate with diverse mindsets and skills, which has made me appreciate how divergent thinking can create a dynamic environment for innovation to thrive!
              <p>
              This website offers a window into my experiences, projects, and insights. I invite you to explore as we navigate the exciting landscape of technology together!
              </p>
          </div>
        </div>    
    </div>
  );
}

export default Home;
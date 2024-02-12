// Project.js
import React from 'react';
import { useState, useEffect } from 'react';
import "./Project.css"

const Project = ({ title, content, dark }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set the breakpoint for small screens (adjust as needed)
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`project ${dark? 'dark' : ''}`}>
      <div className="project-title">
        <h2 className={`project-title-text ${dark? 'dark' : ''}`}>{title}</h2>
      </div>
      <div className="content-container">
        {content.map((item, index) => (
          <div key={index} className="content-item">
            {item.type === 'Text' ? (
              item.paragraphs.map((paragraph, paraIndex) => (
                <div key={paraIndex} className={`text-container`}>
                  <p className={`text ${dark? 'dark' : ''}`}>
                      {(paraIndex === 0 && item.heading) && <><h3 class='para-set-heading'>{item.heading}</h3><br/></>}
                      {paragraph}
                  </p>
                </div>
              ))
            ) : (
              <>
                <div className="image-list">
                  {item.images.map((imageUrl, imgIndex) => (
                    <img key={imgIndex} src={imageUrl} alt={`Image ${index}-${imgIndex}`}
                    style={{
                      maxHeight: isSmallScreen && item.smallScreenHeight ? `${item.smallScreenHeight * 15}vh` : 
                        isSmallScreen ? '15vh' :
                        item.height ? `${item.height * 20}vh` : '20vh'
                    }} />
                  ))}
                </div>
                <p className={`caption ${dark? 'dark' : ''}`}>{item.caption}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

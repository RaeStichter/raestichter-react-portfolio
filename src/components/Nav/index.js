import React, { useEffect } from "react";
//import { capitalizeFirstLetter } from "../../utils/helpers";
// about me, portfolio, contact resume
function Nav() { //put props in here
    
    // const {
    //     // categories = [],
    //     // setCurrentCategory,
    //     // currentCategory,
        
    //     aboutMeSelected,
    //     setAboutMeSelected,
    //     portfolioSelected,
    //     setPortfolioSelected,
    //     contactSelected,
    //     setContactSelected,
    //     resumeSelected,
    //     setResumeSelected
    // } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          RaeAnn Stichter
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
            <li className="mx-2">
                <a href="#about">
                    About me
                </a>
            </li>
            <li className="mx-2">
                <a href="#portfolio">
                    Portfolio
                </a>
            </li>
            <li className="mx-2">
                <a href="#contact">
                    Contact
                </a>
            </li>
            <li className="mx-2">
                <a href="#resume">
                    Resume
                </a>
            </li>
          {/* <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;



// import React from 'react';

// function Nav() {

//     return (
//         <header>
//             <h2>
//                 <a href="/">
//                     <span role="img" aria-label="Dna">🧬</span> RaeAnn Stichter
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className="mx-2">
//                         <a href="#about">
//                             About me
//                         </a>
//                     </li>
//                     <li>
//                         <span>Contact</span>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Nav;
import React from 'react';
import github from '../../assets/footer/github.png';

const ProjectList = (props) => {

//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const [currentProject, setCurrentProject] = useState();

//   const [projects] = useState([
//     {
//       name: 'Paranormal Tourism',
//       photo: 'paranormal',
//       deployLink: 'https://paranormal-tourism.herokuapp.com/',
//       githubLink: 'https://github.com/RaeStichter/paranormal-tourism',
//     },
//     {
//       name: 'Covid Tracker',
//       photo: 'covid',
//       deployLink: 'https://raestichter.github.io/covid-tracker/',
//       githubLink: 'https://github.com/RaeStichter/covid-tracker',
//     },
//     {
//         name: 'Weather Dashboard',
//         photo: 'weather',
//         deployLink: 'https://raestichter.github.io/weather-dashboard/',
//         githubLink: 'https://github.com/RaeStichter/weather-dashboard',
//     },
//     {
//         name: 'Budget Tracker',
//         photo: 'budget',
//         deployLink: 'https://warm-badlands-82966.herokuapp.com/',
//         githubLink: 'https://github.com/RaeStichter/budget-tracker',
//     },
//     {
//         name: 'Note Taker App',
//         photo: 'notes',
//         deployLink: 'https://aqueous-beyond-57005.herokuapp.com/',
//         githubLink: 'https://github.com/RaeStichter/note-taker',
//     },
//     {
//         name: 'Password Generator',
//         photo: 'lock',
//         deployLink: 'https://raestichter.github.io/password-generator/',
//         githubLink: 'https://github.com/RaeStichter/password-generator',
//     },

//   ]);

//   const currentPhotos = photos.filter((photo) => photo.category === category);

//   // const [currentPhoto, setCurrentPhoto] = useState();

//   const toggleModal = (image, i) => {
//     // current photo clicked
//     setCurrentPhoto({...image, index: i});
//     setIsModalOpen(!isModalOpen);
//   }
    return (
        <div className="project-box">
            <img
                src={props.src}
                alt={props.alt}
                key={props.key}
                className="img-thumbnail mx-1"
            />
            <div className="project-links">
                <a href={props.deployLink}>{props.name}</a>
                {/* <div className="github-img"> */}
                    <a href ={props.githubLink}>
                        <img className="github-img" src={github} alt="Github" />
                    </a>
                {/* </div> */}
                {props.type}
            </div>
        </div>
    );



    // name={image.name}
    //                     src={require(`../../assets/projectImages/${image.photo}.jpg`).default}
    //                     alt={image.name}
    //                     key={image.name}
    //                     deployLink={image.deployLink}
    //                     githubLink={image.githubLink}
//   return (
//     <div>
//         <div className="flex-row">
//             {projects.map((image, i) => (
//                 <img
//                     src={require(`../../assets/projectImages/${image.photo}.jpg`).default}
//                     alt={image.name}
//                     className="img-thumbnail mx-1"
//                     key={image.name}
//                 />
//             ))}
//         </div>
//     </div>
//   );
};

export default ProjectList;
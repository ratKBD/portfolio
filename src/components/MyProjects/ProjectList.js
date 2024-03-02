import axios from "axios";
import { useEffect, useState } from "react";
import "./ProjectList.css";

// // import Project from "./Project";
// import { calcRelativeAxisPosition } from "framer-motion/types/projection/geometry/delta-calc";
// import getRepositories from "portfolio-project";
// // import { useState } from "react";

// // const ProjectList = () => {
// //   const [projects, setProjects] = useState([]);

// getRepositories("ratKBD");
//     .then((result) => {
//       setProjects(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <section className="section">
//       <h2 className="section-title">Projects</h2>
//       <div className="projects-center">
//         {projects.map((item) => {
//           return <Project key={item.id} {...item} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectList;

export default function ProjectList() {
  const [repo, setRepo] = useState([]);

  const url = "https://api.github.com/users/ratKBD/repos";

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allData = response.data;
        console.log(allData);
        setRepo(allData);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
  return (
    <div>
      <h3 className="prohead">My Projects</h3>
      {repo.map((item) => {
        return (
          <div className="contain">
            <div className="card">
              <h2 className="probg" style={{ color: "violet" }}>
                <a target="_blank" href={item.html_url} rel="noreferrer">
                  {item.name}
                </a>
              </h2>
              <p className="probg">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

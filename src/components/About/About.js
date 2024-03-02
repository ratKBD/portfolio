import React from "react";
import myImage from "../IMG/icons/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90",
        },
        // { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "NextJS_skill",
          content: "NextJS",
          porcentage: "80%",
          value: "80",
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "50%",
          value: "50",
        },
        {
          id: "Power_Automate_skill",
          content: "Power Automate",
          porcentage: "80%",
          value: "80",
        },
        // {
        //   id: "Python_skill",
        //   content: "Python",
        //   porcentage: "75%",
        //   value: "75",
        // },
        // {
        //   id: "VanillaJS_skill",
        //   content: "VanillaJS",
        //   porcentage: "85%",
        //   value: "85",
        // },
        // {
        //   id: "Wordpress_skill",
        //   content: "Wordpress",
        //   porcentage: "80%",
        //   value: "80",
        // },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I specialize in developing webpages in react with proven experience in developing document management system using sharepoint as backend, and buiding e-commerce website from scratch using medusa with strapi as backend. Skilled in developing dynamic and responsive pages, and swift in debugging performance issues. ",
        },
        {
          id: "second-p-about",
          content:
            "I possess hands-on experience in implementing workflow automation using tools such as Power Automate. Additionally, I have practiced utilizing Node.js, although my expertise in this area is currently limited to theoretical knowledge and practical exercises, as opposed to real-time project experience.",
        },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis.",
        // },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map((skill) => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map((content) => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

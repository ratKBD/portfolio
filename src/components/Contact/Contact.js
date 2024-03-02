import React from "react";
import "./contact.css";
import imageOverlay from "../../components/IMG/icons/earth.jpg";

const Contact = () => {
  return (
    // <div className="container contactBg">
    //   <h1 className="d-flex align-items-center justify-content-center mb-5">
    //     Contact Form
    //   </h1>
    //   <div className="d-flex justify-content-evenly align-items-center space-between py-5">
    //     <div>
    //       <div className="p-3 border border-primary m-2 rounded text-white">
    //         <i class="fa-solid fa-phone "></i> &nbsp; +91 8220462971
    //       </div>
    //       <div className="p-3 border border-primary m-2 rounded text-white">
    //         <i class="fa-solid fa-envelope"></i> &nbsp; vratheesh123@gmail.com
    //       </div>
    //       <div className="p-3 border border-primary m-2 rounded text-white">
    //         <i class="fa-solid fa-location-dot"></i> &nbsp; Vellore, Tamil Nadu
    //       </div>
    //     </div>
    //     {/* <div className="line"></div> */}
    //     <form action="/contact" name="contact" method="post">
    //       <div className="  m-2 rounded ">Your Name</div>
    //       <div className="px-2">
    //         <input type="text" className="w-100" name="fname" />
    //       </div>
    //       <div className=" m-2 rounded">Your Email</div>
    //       <div className="px-2">
    //         <input type="text" className="w-100" name="fname" />
    //       </div>
    //       <div className=" m-2 rounded">Message</div>
    //       <div className="px-2">
    //         <textarea rows="4" cols="50" name="comment" form="usrform">
    //           Enter text here...
    //         </textarea>
    //       </div>
    //       {/* <button className="px-3 mx-3 contactButton">send</button> */}
    //       <input type="submit" className="px-2 mx-2"></input>
    //     </form>
    //   </div>
    // </div>
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(" + imageOverlay + ")" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      <form
                        // action="https://formspree.io/xdoeonlo"
                        action="https://formspree.io/f/mrgnkvqz"
                        method="POST"
                        className="contactForm"
                      >
                        <div id="sendmessage">
                          Your message has been sent. Thank you!
                        </div>
                        <div id="errormessage"></div>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                    </div>
                    <div className="socials">
                      <ul>
                        {/* <li>
                          <a href="" target="_blank" rel="noopener noreferrer">
                            <span className="ico-circle">
                              <i className="ion-social-codepen"></i>
                            </span>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://github.com/ratKBD"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/ratheesh-v-90b609184/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

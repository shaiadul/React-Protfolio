import './Home.css'
import saidul from '../images/owner.png'
import project01 from '../images/project01.png'
import project02 from '../images/project02.png'
import project03 from '../images/project03.png'
import project04 from '../images/project04.png'
import project05 from '../images/project05.png'
import project06 from '../images/project06.png'
import resume from '../images/Saiduls_Resume (1).pdf'
import Icon from './Icon';
// -------------------
// import React, { useRef } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// -----------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Job from './Job'
// ------------------------------


const Home = () => {
    // email.js-sender
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4amg05k', 'template_d4vimcc', form.current, 'xSWqd49Q1kRqnKXwD')
        .then((result) => {
            console.log(result.text);
            toast.success("Thanks! Message sent successfully");
        }, (error) => {
            console.log(error.text);
            toast.error("Something wrong! Try again");
        });
        
    };
    return (
        <div>
            <Icon />
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
                    <header>
                        <div className="user">
                            <img className='mx=auto' src={saidul} alt="" />
                            <h3 className="name">Saidul Basar</h3>
                            <p className="post">front end developer</p>
                        </div>
                        <nav className="navbar">
                            <ul className=''>
                                <li><a href="#home">home</a></li>
                                <li><a href="#about">about</a></li>
                                {/* <li><a href="#education">education</a></li> */}
                                <li><a href="#portfolio">projects</a></li>
                                <li><a href="#contact">contact</a></li>
                                <li><a target="_blank" href="Blog.html">Blogs</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>

            {/*--------------------
            other section 
            ---------------------*/}

            {/* <!-- home section starts  --> */}
            <section className="home " id="home">

                <h3>HI THERE !</h3>
                <h1>I'M <span>Saiadul Basar</span></h1>
                <p>If you are looking to build a Web Site with beautiful visuals and a few texts, you should definitely consider using the fullscreen carousel. It will give your page a modern touch and will for sure be a different website that will catch the viewer's attention.
                </p>
                <a href={resume} download ><button className="btn"> download Resume <i className="fas fa-download"></i> </button></a>


            </section>
            {/* <!-- home section ends --> */}

            {/* <!-- about section starts  --> */}
            <section className="about" id="about">
                <h1 className="heading"> <span>about</span> me </h1>
                <h1 className='about-heading-me'>I am an expert FrontEnd developer; I have been working since 2021. I worked for five different Project. My expertise in HTML, CSS, js, ReactJS, MatarialUI, Express.js, Nodejs . I will try learn new technology every day. As a developer through and through, and I’ll always be ‘hands-on’. However, in the next 5 - 10 years I’d like to take on roles with greater responsibility.</h1>
                <div className="row">
                    <div className="info">
                        <h3> <span> name : </span> MD Saidul Basar </h3>
                        <h3> <span> age : </span> 21 </h3>
                        <h3> <span> qualification : </span> Hard Work </h3>
                        <h3> <span> post : </span> front end developer </h3>
                        <h3> <span> language : </span> Bangla | English </h3>
                    </div>
                    <div className="counter">
                        <div className="box">
                            <span>1+</span>
                            <h3>years of experience</h3>
                        </div>
                        <div className="box">
                            <span>15+</span>
                            <h3>porject completed</h3>
                        </div>
                        <div className="box">
                            <span>8+</span>
                            <h3>happy clients</h3>
                        </div>
                        <div className="box">
                            <span>3+</span>
                            <h3>awards won</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- about section ends --> */}



            {/* <!-- education section starts  --> */}

            <section className="education" id="education">

                <h1 className="heading"> my <span>education</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2017</span>
                        <h3>Web Design</h3>
                        <p>Soft Lakes Company LTD <br /> Web Designing Mission 2017 <br /> Bangladesh Youth Development<br /> Student ID: S-45, Great A+</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2022</span>
                        <h3>front end development</h3>
                        <p>Programming Hero Community <br />Complete Web Development Course With Jhankar Mahbub <br />|| Batch-05 || WEB5-0435 ||</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2017</span>
                        <h3>Basic Computer Course</h3>
                        <p>Easy Computer Training Center <br /> computer fundamental , office application, management<br /> student id: YDD/819/HO-16102</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2019</span>
                        <h3>SSC</h3>
                        <p>Idilpur Secondary pilot School <br /> Reg- 1410624467 Roll- 370222 <br /> Regular | Humanities <br /> GPA : 4.00</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2019</span>
                        <h3>HSC</h3>
                        <p>Samsur Rahman College, Idilpur<br /> Reg- 1410624467 Roll- 273621 <br /> Regular | Humanities <br /> GPA : 4.50</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2022</span>
                        <h3>Honors</h3>
                        <p>Govt titumir college, Dhaka<br /> Reg- 1410624467 Roll- 122 <br /> Regular | Economics <br /> CGPA : -----</p>
                    </div>

                </div>

            </section>

            {/* <!-- education section ends --> */}
            {/* <!-- portfolio section starts  --> */}

            <section className="portfolio" id="portfolio">

                <h1 className="heading"><span>Projects</span> <small className='sm-text-title font-serif font-extrabold'>( Click project to show details )</small> </h1>

                <div className="box-container">

                    <div className="box">
                        <a target="_blank" href="project01.html"><img src={project01} alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="project02.html"><img src={project02} alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="project03.html"><img src={project03} alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="project04.html"><img src={project04} alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="project05.html"><img src={project05} alt="" /></a>
                    </div>

                    <div className="box">
                        <a target="_blank" href="project06.html"><img src={project06} alt="" /></a>
                    </div>

                </div>

            </section>

            {/* <!-- portfolio section ends --> */}
            {/* contracts */}
            <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> me </h1>

                <div className="row">

                    <div className="content">

                        <h3 className="title">contact info</h3>

                        <div className="info">
                            <h3> <i className="fas fa-envelope"></i> mdsaidulbasar404@gmail.com </h3>
                            <h3> <i className="fas fa-phone"></i> +880-1740-673877 </h3>
                            <h3> <i className="fas fa-phone"></i> +111-222-3333 </h3>
                            <h3> <i className="fas fa-map-marker-alt"></i> Dhaka-1212 , Bangladesh </h3>
                        </div>

                    </div>

                    <form ref={form} onSubmit={sendEmail} action="">

                        <input type="text" name='name' placeholder="name" className="box" />
                        <input type="email" name='email' placeholder="email" className="box" />
                        <input type="text" name='project' placeholder="project" className="box" />
                        <textarea name="message" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                        <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

                    </form>

                </div>

            </section>


            {/* -------------- */}
            <ToastContainer />
        </div>
    );
};

export default Home;
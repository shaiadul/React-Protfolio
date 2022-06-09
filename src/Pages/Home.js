import React from 'react';
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


const Home = () => {
    return (
        <div>
            <Icon/>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" ></label>
                    <header>

                        <div className="user">
                            <img className='mx=auto' src={saidul} alt="" />
                            <h3 className="name">Saidul Basar</h3>
                            <p className="post">front end developer</p>
                        </div>

                        <nav className="navbar">
                            <ul>
                                <li><a href="#home">home</a></li>
                                <li><a href="#about">about</a></li>
                                <li><a href="#education">education</a></li>
                                <li><a href="#portfolio">portfolio</a></li>
                                <li><a href="#contact">contact</a></li>
                            </ul>
                        </nav>

                    </header>
                </div>
            </div>

            {/* other section */}
            {/* <!-- home section starts  --> */}

            <section className="home " id="home">

                <h3>HI THERE !</h3>
                <h1>I'M <span>Saiadul Basar</span></h1>
                <p>If you are looking to build a Web Site with beautiful visuals and a few texts, you should definitely consider using the fullscreen carousel. It will give your page a modern touch and will for sure be a different portfolio that will catch the viewer's attention.
                </p>
                <a href={resume} download ><button className="btn"> download CV <i className="fas fa-download"></i> </button></a>


            </section>

            {/* <!-- home section ends --> */}
            {/* <!-- about section starts  --> */}

            <section className="about" id="about">

                <h1 className="heading"> <span>about</span> me </h1>

                <div className="row">

                    <div className="info">
                        <h3> <span> name : </span> MD Saidul Basar </h3>
                        <h3> <span> age : </span> 21 </h3>
                        <h3> <span> qualification : </span> Hard Work </h3>
                        <h3> <span> post : </span> front end developer </h3>
                        <h3> <span> language : </span> Bangla | English </h3>
                        {/* <!-- <a href="#"><button className="btn"> download CV <i className="fas fa-download"></i> </button></a> --> */}
                    </div>

                    <div className="counter">

                        <div className="box">
                            <span>2+</span>
                            <h3>years of experience</h3>
                        </div>

                        <div className="box">
                            <span>13+</span>
                            <h3>porject completed</h3>
                        </div>

                        <div className="box">
                            <span>30+</span>
                            <h3>happy clients</h3>
                        </div>

                        <div className="box">
                            <span>9+</span>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2017</span>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2018</span>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2019</span>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020</span>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2021</span>
                        <h3>front end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                    </div>

                </div>

            </section>

            {/* <!-- education section ends --> */}
            {/* <!-- portfolio section starts  --> */}

            <section className="portfolio" id="portfolio">

                <h1 className="heading"> My <span>Projects</span> </h1>

                <div className="box-container">

                    <div className="box">
                    <a href="https://assignment-ten-2cf19.web.app/"><img src={project01} alt="" /></a>
                    </div>

                    <div className="box">
                        <a href="https://walton-pc.web.app/"><img src={project02} alt="" /></a>
                    </div>

                    <div className="box">
                        <a href="https://assignment-11-solve-link.web.app/"><img src={project03} alt="" /></a>
                    </div>

                    <div className="box">
                        <a href="https://romantic-color.netlify.app/"><img src={project04} alt="" /></a>
                    </div>

                    <div className="box">
                    <a href="https://assignment-nine-090.netlify.app/home"><img src={project05} alt="" /></a>
                    </div>

                    <div className="box">
                        <a href="https://assignment-three96.netlify.app/#home"><img src={project06} alt="" /></a>
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

                    <form action="">
        
                        <input type="text" placeholder="name" className="box"/>
                            <input type="email" placeholder="email" className="box"/>
                                <input type="text" placeholder="project" className="box"/>
                                    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                                    <button type="submit" className="btn"> send <i className="fas fa-paper-plane"></i> </button>

                                </form>

                            </div>

                        </section>


                        {/* -------------- */}
                </div>
                );
};

                export default Home;
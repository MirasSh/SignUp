import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/App.css'
import '../css/bootstrap.css'


const Welcome = () => {
    const navigate = useNavigate()
    function Add() {
        navigate('/Login')
    }
    function Regist() {
        navigate('/Registr')
    }
    function Main_window() {
        navigate('/map')
    }
    return (
        <div>
            <header className="header_area">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand logo_h" href="#"><img src="img/hand2.png" alt=""
                                style={{ width: "100px" }} /></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav justify-content-center">
                                    <li className="nav-item active"><a className="nav-link" href="index.html">Basty</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Biz tyraly</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#nash">Gallery</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Regist}> Tirkely </button>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <button className="nav-item primary_btn" onClick={Add}  > Kiru </button>
                                </ul>
                                <ul>
                                    <button onClick={Main_window}>Hello</button>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="home_banner_area">
                <div className="banner_inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="home_left_img">
                                    <img className="img-fluid" src="/img/home-left.png" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner_content">
                                    <h2>Обучение языку <br/> жестов</h2>
                                    <p>На данный момент можете просмотреть наш курс на YouTube по кнопке ниже</p>
                                    <div className="d-flex align-items-center">
                                        <a id="play-home-video" className="video-play-button" href="https://youtube.com/shorts/kg1v29L6cok?feature=share">
                                            <span></span>
                                        </a>
                                        <div className="watch_video text-uppercase">Просмотреть видео инструктаж</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top2" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Biz tyraly</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="img/F.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Наш Frontend разработчик</h6>
                                <h1>Шораев Мирас Аскарович </h1><br />
                                <p>Один из самых амбициозных студентов своего потока <br />будущий Senior программист</p>
                                <a className="primary_btn" href="#">Посмотреть телеграмм аккаунт</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_us_area section_gap_top" id="nash">
                <div className="container">

                    <div className="row about_content align-items-center">
                        <div className="col-lg-6">
                            <div className="section_content">
                                <img className="img-fluid w-100" src="/img/b.jpg" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section_content">
                                <h6>Наш Backend разработчик</h6>
                                <h1>Гезлер Джонатан Джон </h1><br />
                                <p>Будущий великий Python разработчик <br />Амбициозный и сильный</p>
                                <a className="primary_btn" href="#">Посмотреть телеграмм аккаунт</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about_us_area section_gap_top" id="nash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h1>Upcoming Games</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/b_map1.png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="games.html">Best Ps4 Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/b_map2.png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="games.html">World Dart 2019</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/b_map3.png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="games.html">New XBox Games</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="new_games_item">
                                <img src="img/b_map4.png" alt="" />
                                <div className="upcoming_title">
                                    <h3><a href="games.html">Amarican Football</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recent_update_area section_gap">
                <div className="container">
                    <div className="recent_update_inner">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    Live Streaming
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    Upcoming Challanges
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    Recent Famous Games
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row recent_update_text">
                                    <div className="col-lg-6">
                                        <div className="chart_img">
                                            <img className="img-fluid" src="img/recent_up.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="section_content">
                                            <h6>About Us</h6>
                                            <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                                            <p>inappropriate behavior is often laughed off as “boys will be boys, <br/>” women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                                            <a className="primary_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row recent_update_text">
                                    <div className="col-lg-6">
                                        <div className="chart_img">
                                            <img className="img-fluid" src="img/recent_up.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="section_content">
                                            <h6>About Us</h6>
                                            <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                                            <p>inappropriate behavior is often laughed off as “boys will be boys, <br/>” women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                                            <a className="primary_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row recent_update_text">
                                    <div className="col-lg-6">
                                        <div className="chart_img">
                                            <img className="img-fluid" src="img/recent_up.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="section_content">
                                            <h6>About Us</h6>
                                            <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                                            <p>inappropriate behavior is often laughed off as “boys will be boys, <br/>” women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                                            <a className="primary_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row recent_update_text">
                                    <div className="col-lg-6">
                                        <div className="chart_img">
                                            <img className="img-fluid" src="img/recent_up.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="section_content">
                                            <h6>About Us</h6>
                                            <h1>We Believe that <br />Interior beauty Lasts Long</h1>
                                            <p>inappropriate behavior is often laughed off as “boys will be boys, <br/>” women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                                            <a className="primary_btn" href="#">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gallery_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h2>Screens Gallery</h2>
                                <h1>Screens Gallery</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/gallery_img1.png" alt="" />
                                        <div className="content">
                                            <a className="pop-up-image" href="img/gallery_img1.png">
                                                <i className="lnr lnr-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-gallery">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/gallery_img2.png" alt="" />
                                        <div className="content">
                                            <a className="pop-up-image" href="img/gallery_img2.png">
                                                <i className="lnr lnr-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="single-gallery">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/gallery_img3.png" alt="" />
                                        <div className="content">
                                            <a className="pop-up-image" href="img/gallery_img3.png">
                                                <i className="lnr lnr-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 hidden-md hidden-sm">
                            <div className="single-gallery">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100" src="img/gallery_img4.png" alt="" />
                                <div className="content">
                                    <a className="pop-up-image" href="img/gallery_img4.png">
                                        <i className="lnr lnr-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="frequently_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h2>Frequently Asked Questions</h2>
                                <h1>Frequently Asked Questions</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row frequent_inner">
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                        <div className="offset-lg-2 col-lg-5 offset-md-2 col-md-5">
                            <div className="frequent_item last-child">
                                <h3>We Believe that Interior beauty Lasts Long</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” <br/> women face higher conduct standards especially in the workplace.<br/> That’s why it’s crucial that as women.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main_title">
                                <h2>Latest Blog Posts</h2>
                                <h1>Latest Blog Posts</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_items">
                                <div className="blog_img_box">
                                    <img className="img-fluid" src="img/blog_img1.png" alt="" />
                                </div>
                                <div className="blog_content">
                                    <a className="title" href="blog.html">Portable Fashion for women</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad<br/> minim veniam, quis nostrud.</p>
                                    <div className="date">
                                        <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i> 15</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog_items">
                                <div className="blog_img_box">
                                    <img className="img-fluid" src="img/blog_img2.png" alt="" />
                                </div>
                                <div className="blog_content">
                                    <a className="title" href="blog.html">Portable Fashion for women</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad<br/> minim veniam, quis nostrud.</p>
                                    <div className="date">
                                        <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i> 15</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 hidden-md">
                            <div className="blog_items">
                                <div className="blog_img_box">
                                    <img className="img-fluid" src="img/blog_img3.png" alt="" />
                                </div>
                                <div className="blog_content">
                                    <a className="title" href="blog.html">Portable Fashion for women</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. Ut enim ad<br/> minim veniam, quis nostrud.</p>
                                    <div className="date">
                                        <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>13th Dec </a>
                                        <a href="#"><i className="fa fa-heart" aria-hidden="true"></i> 15</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="newsletter_inner">
                                <h1>Subscribe Our Newsletter</h1>
                                <p>We won’t send any kind of spam</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <aside className="newsletter_widget">
                                <div id="mc_embed_signup">
                                    <form
                                        target="_blank"
                                        action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                        method="get"
                                        className="subscribe_form relative"
                                    >
                                        <div className="input-group d-flex flex-row">
                                            <input
                                                name="EMAIL"
                                                placeholder="Enter email address"
                                                onFocus={(e) => e.target.placeholder = ''}
                                                onBlur={(e) => e.target.placeholder = 'Your email address'}
                                                required=""
                                                type="email"
                                            />
                                            <button className="btn primary_btn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer_area section_gap_top">
                <div className="container">
                    <div className="row footer_inner">
                        <div className="col-lg-3 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                    <h4>About Farfly</h4>
                                </div>
                                <ul>
                                    <li><a href="#">For Business</a></li>
                                    <li><a href="#">Premium Plans</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">How it Works</a></li>
                                    <li><a href="#">Farfly Blog</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                    <h4>Company</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Product Tour</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Founding Members</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Product Updates</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                    <h4>Support</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Data Securiry</a></li>
                                    <li><a href="#">Site Performance</a></li>
                                    <li><a href="#">Action Plan</a></li>
                                    <li><a href="#">Resources</a></li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title">
                                    <h4>Legal</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Terms and conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cookie Information</a></li>
                                    <li><a href="#">Opt - Out</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="row single-footer-widget">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="copy_right_text">
                                <p>
                                    &copy;{new Date().getFullYear()} All rights reserved | This template is made with{" "}
                                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                                    <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social_widget">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Welcome
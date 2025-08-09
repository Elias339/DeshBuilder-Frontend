import Header from '../common/Header';
import Footer from '../common/Footer'; 
import ConstructionImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImg from '../../assets/images/author-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';
import About from '../common/About';
import LatestServices from '../common/LatestServices';

const Home = () => {

  return (
    <>
     <Header/> 

     <main>
        {/* Hero Section */}
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='text-center'>
                        <span>Welcome to Smart Constructions</span>
                        <h1>Crafting dreams with <br/>precision and ecellence.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore ullam laboriosam <br /> unde aut ducimus excepturi sit amet consectetur, adipisicing elit excepturi!</p>
                        <div className='mt-4'>
                            <a className='btn btn-primary large'>Contact Now</a>
                            <a className='btn btn-warning ms-2 large'>View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <About/>

        {/* Our Services */}
        <LatestServices/>

        {/* why choose us */}
        <section className='section-4 py-5'>
            <div className='container py-5'>
                <div className='section-header text-center'>
                    <span>why choose us</span>
                    <h2>Discover our wide variety of prrojects.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit iusto, 
                        minima lorem ipsum dolor sit <br />
                        amet consectetur adipisicing elit laboriosam, id.
                    </p>
                </div>

                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon1} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet cons ectetur adip isicing elit. 
                               Porro nos trum nesc iunt debitis ad adipisci alias, labo rum 
                               conseq uatur quo ex repellat!</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon2} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet cons ectetur adip isicing elit. 
                               Porro nos trum nesc iunt debitis ad adipisci alias, labo rum 
                               conseq uatur quo ex repellat!</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='card-icon'>
                                <img src={Icon3} alt="" />
                            </div>
                            <div className='card-title mt-3'>
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>Lorem, ipsum dolor sit amet cons ectetur adip isicing elit. 
                               Porro nos trum nesc iunt debitis ad adipisci alias, labo rum 
                               conseq uatur quo ex repellat!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Pojects */}
        <section className='section-3 bg-light py-5'>
            <div className='container-fluid py-5'>
                <div className='section-header text-center'>
                    <span>Our pojects</span>
                    <h2>Discover our diverse range of prrojects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima!</p>
                </div>
                
                <div className='row pt-4'>
                    <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                            <div className='service-image'>
                                <img src={ConstructionImg} alt="" className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                    <h3>Uttara Project</h3>
                                </div>
                                <div className='service-content'>
                                    <p> 
                                        Lorem ipsum dolor, sit amet 
                                        consectetur adipisicing elit. 
                                        Consectetur inventore aspernatur 
                                        ab dolor quam eius voluptatum 
                                        eligendi recusandae culpa possimus.
                                    </p>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                            <div className='service-image'>
                                <img src={ConstructionImg} alt="" className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                    <h3>Purbachal New Town Project</h3>
                                </div>
                                <div className='service-content'>
                                    <p> 
                                        Lorem ipsum dolor, sit amet 
                                        consectetur adipisicing elit. 
                                        Consectetur inventore aspernatur 
                                        ab dolor quam eius voluptatum 
                                        eligendi recusandae culpa possimus.
                                    </p>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                            <div className='service-image'>
                                <img src={ConstructionImg} alt="" className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                    <h3>New Town Project</h3>
                                </div>
                                <div className='service-content'>
                                    <p> 
                                        Lorem ipsum dolor, sit amet 
                                        consectetur adipisicing elit. 
                                        Consectetur inventore aspernatur 
                                        ab dolor quam eius voluptatum 
                                        eligendi recusandae culpa possimus.
                                    </p>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 col-lg-3'>
                        <div className='item'>
                            <div className='service-image'>
                                <img src={ConstructionImg} alt="" className='w-100' />
                            </div>
                            <div className='service-body'>
                                <div className='service-title'>
                                    <h3>Dhaka Project</h3>
                                </div>
                                <div className='service-content'>
                                    <p> 
                                        Lorem ipsum dolor, sit amet 
                                        consectetur adipisicing elit. 
                                        Consectetur inventore aspernatur 
                                        ab dolor quam eius voluptatum 
                                        eligendi recusandae culpa possimus.
                                    </p>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testmonials */}
        <section className='section-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span>Testmonials</span>
                    <h2>What people are saying about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima!</p>
                </div>

                <Swiper
                    modules={[ Pagination]}
                    spaceBetween={50}
                    slidesPerView={3} 
                    pagination={{ clickable: true }}   
                    >
                    <SwiperSlide>
                        <div className='card shadow border-0'>
                            <div className='card-body p-5'>
                                <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam. Porro qui ipsa 
                                        quibusdam veniam officiis, incidunt, optio doloribus alias aspernatur tempora id quam 
                                        maxime delectus a nulla ut animi.
                                    </p>
                                </div>
                                <hr />

                                <div className='d-flex meta'>
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className='ps-3'>
                                        <div className='name'>Jone Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='card shadow border-0'>
                            <div className='card-body p-5'>
                                <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam. Porro qui ipsa 
                                        quibusdam veniam officiis, incidunt, optio doloribus alias aspernatur tempora id quam 
                                        maxime delectus a nulla ut animi.
                                    </p>
                                </div>
                                <hr />

                                <div className='d-flex meta'>
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className='ps-3'>
                                        <div className='name'>Jone Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='card shadow border-0'>
                            <div className='card-body p-5'>
                                <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam. Porro qui ipsa 
                                        quibusdam veniam officiis, incidunt, optio doloribus alias aspernatur tempora id quam 
                                        maxime delectus a nulla ut animi.
                                    </p>
                                </div>
                                <hr />

                                <div className='d-flex meta'>
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className='ps-3'>
                                        <div className='name'>Jone Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='card shadow border-0'>
                            <div className='card-body p-5'>
                                <div className='rating'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                    </svg>
                                </div>
                                <div className='content pt-4 pb-2'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, nam. Porro qui ipsa 
                                        quibusdam veniam officiis, incidunt, optio doloribus alias aspernatur tempora id quam 
                                        maxime delectus a nulla ut animi.
                                    </p>
                                </div>
                                <hr />

                                <div className='d-flex meta'>
                                    <div>
                                        <img src={AvatarImg} alt="" width={50}/>
                                    </div>
                                    <div className='ps-3'>
                                        <div className='name'>Jone Doe</div>
                                        <div>CEO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                </Swiper>

            </div>
        </section>

        {/* Blog & News */}
        <section className='section-6 py-5 bg-light'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span>Blog & News</span>
                    <h2>Article and blog post</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima!</p>
                </div>

                <div className='row pt-3'>
                    <div className='col-md-4'>
                        <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                <img src={BlogImg} alt="" className='w-100'/>
                            </div>

                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                    <a href="" className='title'>Dammy blog title</a>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a> 
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                <img src={BlogImg} alt="" className='w-100'/>
                            </div>

                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                    <a href="" className='title'>Dammy blog title</a>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                <img src={BlogImg} alt="" className='w-100'/>
                            </div>

                            <div className='card-body p-4'>
                                <div className='mb-3'>
                                    <a href="" className='title'>Dammy blog title</a>
                                </div>
                                <a href="" className='btn btn-primary small'>Read More</a>
                            </div>
                        </div>
                    </div>                   
                </div>

            </div>
            
        </section>

     </main>
     
    <Footer/>
     </>
  )

  
}

export default Home
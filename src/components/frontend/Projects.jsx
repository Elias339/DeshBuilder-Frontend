import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg';

const Projects = () => {
  return (
    <>
    <Header/>
    <main>
        {/* Hero Section */}
        <Hero preHeading='Pojects' 
              heading='Our Pojects' 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Dolore ullam laboriosam' />

        {/* Our Pojects */}
        <section className='section-3 bg-light py-5'>
            <div className='container py-5'>
                <div className='section-header text-center'>
                    <span>Our pojects</span>
                    <h2>Discover our diverse range of prrojects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima!</p>
                </div>
                
                <div className='row pt-4'>
                    <div className='col-md-4 col-lg-4'>
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

                    <div className='col-md-4 col-lg-4'>
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

                    <div className='col-md-4 col-lg-4'>
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
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>  
  )
}

export default Projects
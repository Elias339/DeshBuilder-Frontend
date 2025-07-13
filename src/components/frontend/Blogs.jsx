import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogImg from '../../assets/images/construction3.jpg';
import Hero from '../common/Hero';

const Blogs = () => {
  return (
    <>
    <Header/>
    <main>
        {/* Hero Section */}
        <Hero preHeading='Blogs' 
              heading='Blogs & News' 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Dolore ullam laboriosam' />

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

export default Blogs
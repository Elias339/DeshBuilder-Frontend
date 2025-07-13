import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
     <section className='section-2 py-5'>
        <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={AboutImg}  className='w-100' />
                    </div>

                    <div className='col-md-6'>
                        <span>about us</span>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe 
                            corrupti necessitatibus dolores iure. Nemo vel aperiam nostrum modi, 
                            culpa quidem assumenda expedita repellendus totam voluptatum 
                            accusantium corrupti impedit commodi.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe 
                            corrupti necessitatibus dolores iure. Nemo vel aperiam nostrum modi, 
                            culpa quidem assumenda earum ipsum in dicta ut voluptate pariatur.
                        </p>
                    </div>
                </div>
        </div>
     </section>
  )
}

export default About
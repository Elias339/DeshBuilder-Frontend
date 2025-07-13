import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
    <Header/>

    <main>
        {/* Hero Section */}
        <Hero preHeading='Quantity. Integrity. Vlaue.' 
              heading='Contact Us' 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Dolore ullam laboriosam' />

        <section className='section-9 py-5'>
            <div className='container'>
                <div className='section-header text-center'> 
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima! <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, non.</p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <div className='card shadow border-0 mb-3'>
                            <div className='card-body p-4'>
                                <h3>Call Us</h3>
                                <div><a href="">(888-000-0000)</a></div>
                                <div><a href="">(888-000-0000)</a></div> 

                                <h3 className='mt-4'>You can wite us:</h3>
                                <div><a href="">example@example.com</a></div>
                                <div><a href="">info@example.com</a></div> 

                                <h3 className='mt-4'>Address:</h3>
                                <div>Mirpur Dhaka, Bangladesh</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-9'>
                        <div className='card shadow border-0 p-5'>
                            <form action="card-body">
                                <div className='row'>
                                    <div className='col-md-6 mb-4'>
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input type="text" className='form-control form-control-lg' placeholder='Enter Name'/>
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input type="email" className='form-control form-control-lg' placeholder='Enter Email'/>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6 mb-4'>
                                        <label htmlFor="" className='form-label'>Phone</label>
                                        <input type="text" className='form-control form-control-lg' placeholder='Phone No.'/>
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <label htmlFor="" className='form-label'>Subject</label>
                                        <input type="text" className='form-control form-control-lg' placeholder='Subject'/>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className='form-label'>Message</label>
                                    <textarea name="" rows={5} id="" placeholder='Message' className='form-control form-control-lg'></textarea>
                                </div>

                                <button className='btn btn-primary mt-3'>SUBMIT</button>

                            </form>
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

export default ContactUs
import React from 'react'

const Footer = () => {
  return (
     <footer>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <h3 className='mb-3'>ABCD-Constructions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, fugiat!</p>
                </div>
                <div className='col-md-3'>
                    <h3 className='mb-3'>Our Services</h3>
                    <ul>
                        <li>
                            <a href="">Spacialty Construction</a>
                        </li>
                        <li>
                            <a href="">Civil Construction</a>
                        </li>
                        <li>
                            <a href="">Residential Construction</a>
                        </li>
                        <li>
                            <a href="">Corporate Construction</a>
                        </li>
                        <li>
                            <a href="">Building Construction</a>
                        </li>
                        <li>
                            <a href="">Industrial Construction</a>
                        </li>
                        
                    </ul>
                </div>

                <div className='col-md-3'>
                    <h3 className='mb-3'>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li> 
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li> 
                        <li>
                            <a href="">Contact Us</a>
                        </li>  
                    </ul>
                </div>

                <div className='col-md-3'>
                   <h3 className='mb-3'>Contact Us</h3> 
                   <ul>
                        <li>
                            <a href="">01630256985</a>
                        </li>
                        <li>
                            <a href="">eliasmd339@gmail.com</a>
                        </li> 
                        <li>
                            <a href="">Mirpur Dhaka, Bangladesh</a>
                        </li>  
                    </ul>   
                </div> 
                <hr />
                <div className='text-center pt-4'>Copyright 2024 ABCD-Constructions. All Rights Reserved.</div>
            </div>
        </div>
     </footer>
  )
}

export default Footer
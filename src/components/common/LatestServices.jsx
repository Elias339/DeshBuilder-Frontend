import ServiceImg from '../../assets/images/construction1.jpg';
import { apiUrl, fileUrl } from '../common/http';
import React, { useEffect, useState } from 'react' 

const LatestServices = () => {

    const [services, setServices] = useState([]);
    const fatchLatestServices = async () => {
        const res = await fetch(apiUrl + 'get-latest-services?limit=4',{
            'method': 'GET',  
        });
        const result = await res.json(); 
        setServices(result.data);
    }

    useEffect(()=>{
      fatchLatestServices()
    },[]);

  return (
     <>
      <section className='section-3 bg-light py-5'>
            <div className='container-fluid py-5'>
                <div className='section-header text-center'>
                    <span>Our services</span>
                    <h2>Our construction services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, minima!</p>
                </div>
                
                <div className='row pt-4'>
                    {
                        services && services.map(service => {
                            return(
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={`${fileUrl}storage/${service.image}`} className='w-100' /> 
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>{service.title}</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>{service.short_desc}</p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
  
                </div>
            </div>
        </section>
     </>
  )
}

export default LatestServices
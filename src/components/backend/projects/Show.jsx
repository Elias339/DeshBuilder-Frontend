import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Sidebar from '../../common/Sidebar'
import {apiUrl,token } from '../../common/http'
import { Link } from 'react-router-dom'

const Show = () => {

    const [projects, setProjects] = useState([]);

    const fatchProjects = async() => {
        const res = await fetch(apiUrl+'projects',{
            'method':'GET',
            'headers':{
                'Content-type': 'application/json',
                'Accept': 'application/json', 
                'Authorization': `Bearer ${token()}`
            }
        });  
        const result = await res.json(); 

        setProjects(result.data);   
    }
    useEffect(()=>{
            fatchProjects();
         },[]);

  return (
    <>
    <Header/>
      <main>
        <div className='container my-5'>
            <div className='row'>
              {/* sidebar */}
                <div className='col-md-3'>
                  <Sidebar/>
                </div>
                
              {/* Dashboard */}
                <div className='col-md-9 '>
                  <div className='card shadow border-0'>
                      <div className='card-body p-4'>
                          <div className='d-flex justify-content-between'>
                            <h4 className='h5'>Projects</h4>   
                            <a to="" className='btn btn-primary'>Create</a>
                          </div><hr />

                          <table className='table table-striped'>
                            <thead className='text-center'>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Status</th>
                                    <th>Action</th> 
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    projects && projects.map(project => {
                                        return(
                                            <tr key = {`project-${project.id}`}>
                                                <td>{project.id}</td>
                                                <td>{project.title}</td>   
                                                <td>{project.title}</td>   
                                                <td>{ (project.status==1)? 'Active': 'Block' }</td> 
                                                <td>
                                                   <Link  className='btn btn-sm btn-primary me-2'>Edit</Link>
                                                   <Link  href="" className='btn btn-sm btn-danger'>Delete</Link> 
                                                </td> 
                                            </tr>
                                        )
                                    })
                                } 
                            </tbody>
                          </table>
                          
                      </div>
                  </div>
                </div>

            </div>
          </div>

      </main>
     <Footer/>
    </> 
  )
}

export default Show
import React, { useState, useRef, useMemo } from 'react'
import Header from '../../common/Header'
import Sidebar from '../../common/Sidebar'
import Footer from '../../common/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { apiUrl, token } from '../../common/http'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react';

const Create = ({placeholder}) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
			readonly: false,  
			placeholder: placeholder || 'Content'
		}),
		[placeholder]
	);

   const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, "content": content, "imageId":imageId}
    const res = await fetch(apiUrl + 'services',{
        'method': 'POST',
        'headers':{
            'Content-type' : 'application/json',
            'Accept': 'application/json', 
            'Authorization': `Bearer ${token()}`
        },
        body: JSON.stringify(newData)
    });
    const result = await res.json();

    if(result.status == true){
      toast.success(result.message);   
      navigate('/admin/services');
    }else{
       toast.errors(result.message);  
    } 
    
  }

  const handleFile = async (e) => {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image",file);

      await fetch(apiUrl + 'temp-images',{
        'method': 'POST',
        'headers':{ 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${token()}`
        },
        body: formData
    })
    .then(responce => responce.json())
    .then(result => {
      if (result.status == false) {
        toast.error(result.errors.image[0])
      }else{
        setImageId(result.data.id)
      }
    })

    }

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
                            <h4 className='h5'>Services/Create</h4>
                            <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                          </div><hr />
 
                        <form onSubmit={handleSubmit(onSubmit)}> 
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Title</label>
                                <input 
                                 {
                                    ...register('title',{
                                        required:"The title is required"
                                    })
                                 }
                                 type="text" className={`form-control ${errors.title && 'is-invalid'}`} placeholder='title'/>
                                 {
                                    errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>
                                 }
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Slug</label>
                                <input
                                {
                                    ...register('slug',{
                                        required:"The slug is required"
                                    })
                                 }
                                type="text" className={`form-control ${errors.slug && 'is-invalid'}`} placeholder='slug'/>
                                {
                                    errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>
                                 }
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Short Description</label>  
                                <textarea placeholder='short description' {...register('short_desc')} className='form-control' rows={4}></textarea> 
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Content Text</label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    tabIndex={1}
                                    onBlur={newContent => {
                                    setContent(newContent);
                                    setValue('text_content', newContent);  
                                    }}
                                    onChange={() => {}}
                                /> 
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Image</label>
                                <input onChange={handleFile} type="file" className='form-control' />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="" className='form-label'>Status</label>
                                <select className='form-control' { ...register('status') } >
                                    <option value="1">Active</option>
                                    <option value="0">Block</option>
                                </select>
                            </div>

                            <button disabled={isDisable} className='btn btn-primary mt-4'>Submit</button>

                          </form>

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

export default Create
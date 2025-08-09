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

    const config = useMemo(() => ({
			readonly: false,  
			placeholder: placeholder || 'Content'
		}),
		[placeholder]
	);

   const {
    register,
    handleSubmit, 
    setValue,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("slug", data.slug);
  formData.append("short_desc", data.short_desc || "");
  formData.append("text_content", content || "");
  formData.append("status", data.status);
  if (data.image && data.image.length > 0) {
    formData.append("image", data.image[0]);
  }

  const res = await fetch(apiUrl + 'services', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token()}`
    },
    body: formData
  });

  const result = await res.json();

  if (result.status) {
    toast.success(result.message);
    navigate('/admin/services');
  } else {
    toast.error(result.errors ? Object.values(result.errors)[0][0] : result.message);
  }
};
 
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
                                <input type="file"  className='form-control' {...register('image')} />
                                {/* <input onChange={handleFile} type="file" className='form-control' /> */}
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
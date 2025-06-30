import { ErrorMessage, Field, Form, Formik } from 'formik';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React, { useRef, useState } from 'react';
import * as Yup from "yup";
import { createBook } from '../../thunks/booksThunks';
import { useDispatch } from 'react-redux';
import { http } from '../../app/http';
import "./CreateBook.css";



const CreateBook = () => {

  const dispatch = useDispatch();
  const [img, setImg] = useState('');
  const imageUploadFileList = useRef();
  

  const props = {
    name: 'image',
    action: `${http.getUri()}/upload-img`,
    // action: 'http://localhost:4000/upload-img',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        setImg(info.file.name);
        imageUploadFileList.current = info.fileList;
       
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  const initialValues = {
    autor: "",
    title: "",
    description: "",
    review: "",
    publication: "",
    year: "",
    pages: "",
    language: "",
    price: "",
    image: "",
  }


  const submitHandler = (values, formikBag) => {
    if (img === '') {
      formikBag.setErrors({image : 'image is required'});
      return;
    }

    values.image = img;
    dispatch(createBook(values));
    formikBag.resetForm();
    console.log('book values', values);

    imageUploadFileList.current.length = 0;
  };


  const BookSchema = Yup.object().shape({
    autor: Yup.string().min(3, 'Too short').required('autor is required'),
    title: Yup.string().min(3, 'Too short').required('title is required'),
    description: Yup.string().min(3, 'Too short').required('description is required'),
    review: Yup.string().min(3, 'Too short'),
    publication: Yup.string().min(3, 'Too short'),
    year: Yup.number().min(1800, 'value after 1800').max(new Date().getFullYear(), 'Don`t full year').required('year required'),
    pages: Yup.number().min(0, 'only positive'),
    language: Yup.string().min(3, 'Too short'),

    price: Yup.number().min(0, 'only positive').required('price required'),
    // image: Yup.string().required('image is required'),

  });


  return (
    <div className='create-book__container'>
      <h2 className='create-book__title'>Create Book</h2>
      
      <div className='book-form'>
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={BookSchema}
        >

        { () => ( <Form>

              <div className='book-form__field'>
                <label htmlFor="form__field__autor">Autor:</label>
                <Field type='text' name='autor' id='form__field__autor' />
              </div>
              <ErrorMessage name="autor" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__title">Title:</label>
                <Field type='text' name='title' id='form__field__title' />
              </div>
              <ErrorMessage name="title" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__description">Description:</label>
                <Field as='textarea' type='text' name='description' id='form__field__description' />
              </div>
              <ErrorMessage name="description" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__review">Review:</label>
                <Field as='textarea' type='text' name='review' id='form__field__review' />
              </div>
              <ErrorMessage name="review" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__publication">Publication:</label>
                <Field type='text' name='publication' id='form__field__publication' />
              </div>
              <ErrorMessage name="publication" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__year">Year:</label>
                <Field type='number' name='year' id='form__field__year' placeholder='value after 1800' />
              </div>
              <ErrorMessage name="year" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__pages">Pages:</label>
                <Field type='number' name='pages' id='form__field__pages' />
              </div>
              <ErrorMessage name="pages" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__language">Language:</label>
                <Field type='text' name='language' id='form__field__language' />
              </div>
              <ErrorMessage name="language" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label htmlFor="form__field__price">Price:</label>
                <Field type='number' name='price' id='form__field__price' />
              </div>
              <ErrorMessage name="price" component="div" className='book-form-error' />

              <div className='book-form__field'>
                <label>Image</label>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
              <ErrorMessage name="image" component="div" className='book-form-error' />
              
              <div className='book-form__add'>
                <Field type='submit' value='add book' id='addBook'
                  className={'btn__submit'}
                />
              </div>

            </Form> 
          )}
        </Formik>
      </div>


    </div>
  );
}

export default CreateBook;


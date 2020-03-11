import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addPage, updatePage } from '../../services/pages';
import { addNewPage } from '../../redux/pages/pages.actions';
import { withRouter } from 'react-router-dom';

import './mainForm.styles.scss';

const AddForm = ({ addNewPage, history, EditPage, page }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 0,
    isActive: false,
    publishedOn: new Date()
  });

  useEffect(() => {
    if (page && EditPage) {
      setFormData(page);
    }
  }, [EditPage, page]);

  const handleChange = event => {
    const { value, name } = event.target;

    if (name === 'type') {
      const type = value === '0' ? 0 : value === '1' ? 1 : 2;

      setFormData({
        ...formData,
        [name]: type
      });
    } else if (name === 'isActive') {
      const isActive = value === 'yes';

      setFormData({
        ...formData,
        [name]: isActive
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (page && EditPage) {
      console.log(formData);
      updatePage(page.id, formData).then(() => {
        history.push('/');
      });
    } else {
      console.log('Submit!', formData);
      addPage(formData).then(page => {
        history.push('/');
        addNewPage(page);
      });
    }
  };

  return (
    <div className='form-container'>
      <section id='container'>
        <h2>Add a new Page</h2>
        <form
          name='main'
          id='main-form'
          onSubmit={handleSubmit}
          onReset={() => history.push('/')}
        >
          <div id='wrapping' className='clearfix'>
            <section id='aligned'>
              <input
                type='text'
                name='title'
                id='name'
                placeholder={EditPage ? page.title : 'Page Title'}
                autoComplete='off'
                tabIndex={1}
                className='txtinput'
                onChange={handleChange}
                required
                disabled={EditPage ? true : false}
              />
              <textarea
                name='description'
                id='description'
                placeholder={
                  EditPage ? page.description : 'Enter a description...'
                }
                tabIndex={5}
                className='txtblock'
                onChange={handleChange}
              />
            </section>
            <section id='aside' className='clearfix'>
              <section id='recipientcase'>
                <h3>Page Type</h3>
                <select
                  id='recipient'
                  name='type'
                  tabIndex={6}
                  className='selmenu'
                  onChange={handleChange}
                >
                  <option value='0'>Menu</option>
                  <option value='1'>Events</option>
                  <option value='2'>Content</option>
                </select>
              </section>
              <section id='prioritycase'>
                <h3>Is this page Active?</h3>
                <span className='radiobadge'>
                  <input
                    type='radio'
                    id='yes'
                    name='isActive'
                    defaultValue='yes'
                    onChange={handleChange}
                  />
                  <label htmlFor='yes'>Yes</label>
                </span>
                <span className='radiobadge'>
                  <input
                    type='radio'
                    id='no'
                    name='isActive'
                    defaultValue='no'
                    defaultChecked='checked'
                    onChange={handleChange}
                  />
                  <label htmlFor='no'>No</label>
                </span>
              </section>
            </section>
          </div>
          <section id='buttons'>
            <input
              type='reset'
              name='reset'
              id='resetbtn'
              className='resetbtn'
              defaultValue='Reset'
            />
            <input
              type='submit'
              name='submit'
              id='submitbtn'
              className='submitbtn'
              tabIndex={7}
              defaultValue='Submit this!'
            />
          </section>
        </form>
      </section>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewPage: newPage => dispatch(addNewPage(newPage))
});

export default connect(null, mapDispatchToProps)(withRouter(AddForm));

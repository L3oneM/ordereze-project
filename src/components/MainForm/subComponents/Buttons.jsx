import React from 'react';

const Buttons = () => {
  return (
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
  );
};

export default Buttons;

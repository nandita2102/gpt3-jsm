import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3_blog section_padding'>
      <div className='gpt3_blog_heading'>
        <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3_blog_container'>
        <div className='gpt3_blog_container_groupA'>
          <Article imgUrl={blog01} date='Dec 5, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='gpt3_blog_container_groupB'>
          <Article imgUrl={blog02} date='Dec 5, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog03} date='Dec 5, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog04} date='Dec 5, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl={blog05} date='Dec 5, 2022' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
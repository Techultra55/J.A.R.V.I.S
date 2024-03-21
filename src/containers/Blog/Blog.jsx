import React from 'react'
import './Blog.css'
import { Article } from '../../components'
import {blog1,blog2,blog3,blog4,blog5} from './imports';

const Blog = () => {
  return (
    <div className="jarvis__blog section__padding" id="blog">
      <div className="jarvis__blog-heading">
        <h1 className="gradient__text">A lot is happening, checkout the blogs by our clients</h1>
      </div>
      <div className="jarvis__blog-container">
        <div className="jarvis__blog-container_groupA">
          <Article imgUrl={blog1} date="13 march 2024" title="AI Images: A Leap Forward in Art and Creativity" />
        </div>
        <div className="jarvis__blog-container_groupB">
          <Article imgUrl={blog2} date="13 march 2024" title="Quantum Computing: The Next Revolution in Computing Power" />
          <Article imgUrl={blog3} date="13 march 2024" title="Virtual Reality and Augmented Reality: Transforming Our Digital Experiences" />
          <Article imgUrl={blog4} date="13 march 2024" title="Unraveling the Mysteries of Artificial Intelligence and Machine Learning" />
          <Article imgUrl={blog5} date="13 march 2024" title="Cybersecurity in the Digital Age: Protecting Your Data" />
        </div>
      </div>
    </div>
  )
}

export default Blog
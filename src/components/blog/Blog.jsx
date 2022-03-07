import React, { useState } from 'react'
import BlogData from './BlogApi'
import BlogInfo from './BlogInfo';
const Blog = () => {
    const [blog, setBlog] = useState(BlogData);
    return (
        <>
            <div className="cotainer" id='blog'>
                <div className="row p-3 pt-5 text-center">
                    <div className="con-lg-12 service_top_info">
                        <h1>Our Blogs</h1>
                        <p>Subheading or information goes here</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pb-5">
                    <BlogInfo data={blog} />
                </div>
            </div>
        </>
    )
}

export default Blog

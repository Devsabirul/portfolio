import React from 'react'

const BlogInfo = ({ data }) => {
    return (
        <>
            {
                data.map((blogData) => {
                    return (
                        <>
                            <div className="col-lg-4">
                                <div class="card p-3">
                                    <img src={blogData.img} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h2 class="card-title">{blogData.title}</h2>
                                        <p class="card-text">{blogData.discription}</p>
                                        <a href="#" class="btn btn-danger">Continue Reading</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default BlogInfo

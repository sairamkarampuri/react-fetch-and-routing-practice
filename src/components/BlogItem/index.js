// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, topic, title, author, avatarUrl, imageUrl} = blogData

  return (
    <Link className="blog-link-item" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="blog-image" src={imageUrl} alt={`blogImage${id}`} />
        <div className="blog-details">
          <p className="blog-topic">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="blog-author-deatils">
            <img className="avathar-img" src={avatarUrl} alt={`avathar${id}`} />
            <p className="avathar-name"> {author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

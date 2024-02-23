// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogFullDetails: {}, isLoading: true}

  componentDidMount() {
    this.getFullBlogDeatils()
  }

  getFullBlogDeatils = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    // console.log(data)
    const updatedFullDetails = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogFullDetails: updatedFullDetails, isLoading: false})
  }

  render() {
    const {blogFullDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content, id} = blogFullDetails
    return (
      <div className="blog-full-detalis-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="blog-full-details-title">{title}</h1>
            <div className="blog-full-details-avathar-details">
              <img
                className="blog-full-details-avathar-img"
                src={avatarUrl}
                alt={`avtar${id}`}
              />
              <p className="blog-full-details-avathar-name">{author}</p>
            </div>
            <img
              className="blog-full-details-image"
              src={imageUrl}
              alt={title}
            />
            <p className="blog-full-details-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

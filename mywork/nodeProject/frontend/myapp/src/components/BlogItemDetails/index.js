// Write your JS code here
import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'
import './index.css'


class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    

    const response = await fetch(`http://localhost:3008/blogs/${id}/`)
    const data = await response.json()
    const formattedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      content: data.content,
    }
    this.setState({blogData: formattedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
        
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-div">
        {isLoading ? (
          <TailSpin
            color="#00BFFF"
            width="50px"
            height="50px"
            data-testid="loader"
          />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails

// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {item} = this.props
    const {title, imageUrl, topic, author, avatarUrl, id} = item
    return (
      <Link to={`/blogs/${id}`} className="link-style">
        <div className="item-div">
          <div className="item-img-div">
            <img src={imageUrl} alt={title} className="item-img" />
          </div>
          <div className="item-content-div">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-div">
              <img src={avatarUrl} alt={author} className="author-img" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem

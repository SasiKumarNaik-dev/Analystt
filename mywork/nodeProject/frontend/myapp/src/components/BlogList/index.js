// Write your JS code here
import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.fetchApi()
  }

  fetchApi = async () => {
    const response = await fetch('http://localhost:3008/')
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem._id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="blog-list-div">
        {isLoading ? (
          <div data-testid="loader">
            <TailSpin
              type="TailSpin"
              color="#00BFFF"
              width="50px"
              height="50px"
            />
          </div>
        ) : (
          blogList.map(eachItem => (
            <BlogItem item={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList

import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class CommentBox extends Component {

  constructor (props) {
    super(props)

    this.state = { comment: '' }
  }

  onTextChange (event) {
    this.setState({ comment: event.target.value })
  }

  onSubmit (event) {
    event.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render () {
    return (
      <form onSubmit={ this.onSubmit.bind(this) } className="comment-box">
        <h4>Add a comment</h4>
        <textarea value={ this.state.comment } onChange={ this.onTextChange.bind(this) }/>
        <div>
          <button action="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox)

import React, {Component} from 'react';

export default class UpdateBookmarkForm extends Component {
    componentDidMount() {
        const bookmarkId = this.props.match.params.bookmarkId
        fetch(`https://localhost:8000/api/bookmarks/${bookmarkId}`, {
            method: 'GET'
        })
            .then(/* some content omitted */)
            .then(responseData => {
                this.setState({
                    /* fields state updates here */
                })
            })
            .catch(error => {/* some content omitted */
            })
    }
    handleSubmit = e => {
        e.preventDefault()
        // validation not shown
        fetch(`https://localhost:8000/api/bookmarks/${this.props.match.params.bookmarkId}`, {
            method: 'PATCH',
            body: JSON.stringify(this.state.inputValues)
        })
            .then(/* some content omitted */)
            .then(responseData => {
                this.context.updateBookmark(responseData)
            })
    }

    render() {
        const {title, url, rating} = this.state
        return (
            <section className='UpdateBookmarkForm'>
                <h2>Update Bookmark</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id='title'
                        type='text'
                        name='title'
                        placeholder='Great bookmark!'
                        required
                        value={title}
                        onChange={this.handleChangeTitle}
                    />
                    <input
                        id='url'
                        type='text'
                        name='url'
                        placeholder='www.bookmark.com'
                        required
                        value={url}
                        onChange={this.handleChangeUrl}
                    />
                    <input
                        id='rating'
                        type='text'
                        name='rating'
                        placeholder='5'
                        required
                        value={rating}
                        onChange={this.handleChangeRating}
                    />
                </form>
            </section>
        )
    }
}
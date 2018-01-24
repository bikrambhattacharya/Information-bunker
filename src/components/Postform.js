import React from 'react';
export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            post: '',
            message: '',
            facebook: '',
            twitter: '',
            error: ''
        };
    };
    ontitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };
    onPostChange = (e) => {
        const post = e.target.value;
        this.setState(() => ({ post }));
    };
    onMessageChange = (e) => {
        e.persist();
        this.setState(() => ({
            message: e.target.value
        }));
    };
    onFacebookLinkChange = (e) => {
        e.persist();
        this.setState(() => ({
            facebook: e.target.value
        }))
    };
    onTwitterLinkChange = (e) => {
        e.persist();
        this.setState(() => ({
            twitter: e.target.value
        }))
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.post || !this.state.message) {
            this.setState(() => ({
                error: 'All all fields must be filled'
            }));
        }
        else if(this.state.title.length<5){
            this.setState(() => ({
                error: 'Title must contain 5 characters'
            }));
        }
        else if(this.state.post.length<50){
            this.setState(() => ({
                error: 'Post must contain 50 characters'
            }));
        }
        else {
            this.props.onSubmit({
                title: this.state.title,
                post: this.state.post,
                message: this.state.message,
                facebook: this.state.facebook,
                twitter: this.state.twitter
            });
        }

    };
    render() {
        return (
            <div className='container'>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label>Title
                    <textarea type='text' placeholder='Enter a title?' autoFocus onChange={this.ontitleChange} rows="3" cols="20" />
                    </label>
                    <label>Post
                    <textarea type='text' placeholder='post?' onChange={this.onPostChange} rows="3" cols="20" />
                    </label>
                    <label>Message
                    <textarea type='text' placeholder='message?' onChange={this.onMessageChange} rows="3" cols="20" />
                    </label>
                    <label>Facebook</label>
                    <textarea type='text' placeholder='Facebook link' onChange={this.onFacebookLinkChange} rows="3" cols="20" />
                    <label>Twitter
                    <textarea type='text' placeholder='Twitter' onChange={this.onTwitterLinkChange} rows="3" cols="20" />
                    </label>
                    {this.state.error && <p>{this.state.error}</p>}
                    <br />
                    <button className="updateButton">Update</button>
                </form>

            </div>
        );
    }
}
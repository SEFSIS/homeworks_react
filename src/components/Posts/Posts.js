import {Component} from "react";
import {postService} from "../../Services/postService";
import {Post} from "../Post/Post";
import css from './Posts.module.css'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts:value}))
    }

    render() {
        return (
            <div className={css.posts}>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}
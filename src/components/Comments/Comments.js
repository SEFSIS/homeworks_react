import {Component} from "react";
import {commentService} from "../../Services/commentService";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentService.getAll().then(value => value.data).then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div className={css.comments}>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {Comments}
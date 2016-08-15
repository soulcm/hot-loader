import React, {Component} from 'react'
import ReactDom from 'react-dom'

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>测一下s11 {this.props.data.a}</div>
        )
    }
}

export default Index
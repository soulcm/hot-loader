import React, {Component} from 'react'
import ReactDom from 'react-dom'

require('css/main')

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>测一下s11 {this.props.data.a}</div>
                <div className="image">ass</div>
            </div>
        )
    }
}

export default Index
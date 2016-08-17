import React, {Component} from 'react'
import ReactDom from 'react-dom'

class Test extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>test aaa {this.props.data.a}</div>
            </div>
        )
    }
}

export default Test
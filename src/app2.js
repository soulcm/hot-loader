import React, {Component} from 'react'
import ReactDom from 'react-dom'

import Test from 'components/test'

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                先测试react
                <Test data={{b: 2}}/>
            </div>
        )
    }
}


let dom = document.getElementById('app')

ReactDom.render(<App />, dom)




import React, {Component} from 'react'
import ReactDom from 'react-dom'

import Index from 'components/index'

export default class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                先测试react
                <Index data={{a: 1}}/>
            </div>
        )
    }
}


let dom = document.getElementById('app')

ReactDom.render(<App />, dom)




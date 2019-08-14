import React, { Component } from 'react'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[
                { cid: 123, title: '技术胖的个人博客-1' },
                { cid: 456, title: '技术胖的个人博客-2' },
                { cid: 789, title: '技术胖的个人博客-3' }
            ]
        }
        // this.props.history.push("/home/")
    }
    componentDidMount() {
        console.log(this.props.match)
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
    render() { 
        const {id} = this.state
        return (
            <div>
                <h2>List Page Id--> {id}</h2>
            </div>
        )
    }
}
 
export default List;
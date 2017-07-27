import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom' /**路由跳转**/

export default class Two extends Component {
    constructor(){
        super();
        this.state = {
            lists:[]
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData = ()=>{
        let url = 'http://localhost:3000/api/product/getList';
        fetch(url)
            .then((json)=>{
                return json.json();
            })
            .then((res)=>{
                this.setState({
                    lists: res
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    render(){
        return(
            <div>
                <p>这是two页面</p>
                {
                    this.state.lists.map((item,index)=>{
                        return <div key={index}> {item.title} </div>
                    })
                }
                <Link to='/one'>去one页面</Link>
                <Link to='/'>去首页</Link>
            </div>
        )
    }
}
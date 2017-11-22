import React, { Component } from 'react'
import 'assets/css/three.css'
export default class Three extends Component{
    constructor(){
        super()
        this.state = {
            productId:1509952810754,
            lists:[]
        }
    }
    componentDidMount(){
    }
    inputVal = (event)=>{
        this.setState({
            productId:event.target.value
        })
    }
    colorRed = (arg)=>{
        return arg ? 'titleColor' : false
        
    }
    fetchData = ()=>{
        let url = `http://localhost:3000/api/product/search?productId=${this.state.productId}`;
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
                <input type='text' placeholder='根据productId搜索' value={this.state.productId} onChange={this.inputVal}/>
                <button onClick={this.fetchData}>搜索产品</button>
                 {
                    this.state.lists.map((item,index)=>{
                        return <p key={index} className={this.colorRed(item.title)}>{item.title}</p>
                    })
                } 
            </div>
        )
    }
}
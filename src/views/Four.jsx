import React, { Component } from 'react'
import 'assets/css/three.css'
export default class Group extends Component{
    constructor(){
        super()
        this.state = {
            price:123,
            title:123,
            spicialPrice:123,
            allowance:123,
            userName:'wangruilong'
        }
    }
    componentDidMount(){
    }
    changeTitle = (event)=>{
        this.setState({
            title:event.target.value
        })
    }
    changePrice = (event)=>{
        this.setState({
            price:event.target.value
        })
    }
    changeSpicial = (event)=>{
        this.setState({
            spicialPrice:event.target.value
        })
    }
    changeAllowance = (event)=>{
        this.setState({
            allowance:event.target.value
        })
    }
    fetchData = ()=>{
        let url = `/api/product/addProduct`,
            req = JSON.stringify({
                title : this.state.title,
                price : this.state.price,
                spicialPrice : this.state.spicialPrice,
                allowance : this.state.allowance
            });
        fetch(url,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: req
            })
            .then((json)=>{
                return json.json();
            })
            .then((res)=>{
                this.setState({
                    lists: res
                })
                this.props.history.push({
                    pathname : '/two',
                    search : `?name=${this.state.userName}`
                })
            }) 
            .catch((err)=>{
                console.log(err)
            })
    }
    render(){
        return(
            <div>
                <input type='text' placeholder='标题' value={this.state.title} onChange={this.changeTitle}/>
                <input type='text' placeholder='价格' value={this.state.price} onChange={this.changePrice}/>
                <input type='text' placeholder='特价' value={this.state.spicialPrice} onChange={this.changeSpicial}/>
                <input type='text' placeholder='余量' value={this.state.allowance} onChange={this.changeAllowance}/>
                <button onClick={this.fetchData}>添加产品</button>
            </div>
        )
    }
}
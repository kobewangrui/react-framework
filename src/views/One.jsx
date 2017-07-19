import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom' /**路由跳转**/

import 'assets/css/one.css'

export default class One extends Component {
    constructor(props){/**props需要作为参数传入**/
        super(props);/**需要使用super,如果没有this就会是undefined**/
        this.nameChange = this.nameChange.bind(this)/**为事件绑定this,es6语法要求,es5无要求**/
    }
    state = {
        form:{
            name:undefined,
            sex:undefined,
            remark:undefined,
            surport:undefined
        }
    }
    componentWillMount(){
        console.log(this.state.form)
    }
    nameChange(event){
        console.log(this.state.form.name)
        this.state.form.name = event.target.value
    }
    sexChange(event){
        this.setState({
            sex: event.target.value
        })
    }
    remarkChange(event){
        this.setState({
            remark: event.target.value
        })
    }
    surportChange(event){
        this.setState({
            surport: event.target.value
        })
    }
    submitForm(){
        console.log(this);
    }
    render(){
        return(
            <div className="pageOne">
                <p>
                    <input type="text" placeholder="用户名" value={this.state.form.name} onChange={this.nameChange}/>
                </p>
                <p>
                    <label htmlFor="man">男</label>
                    <input name="sex" id="man" type='radio' value={this.state.form.sex} onChange={this.sexChange}/>
                    <label htmlFor="woman">女</label>
                    <input name="sex" id="woman" type='radio' value={this.state.form.sex} onChange={this.sexChange}/>
                </p>
                <p>
                    <label htmlFor="remark">备注</label>
                    <textarea name="reamrk" id="remark" value={this.state.form.remark} onChange={this.remarkChange}></textarea>
                </p>
                <p>
                    <label htmlFor="basketball">篮球</label>
                    <input type="checkbox" id="basketball" value={this.state.form.surport} onChange={this.surportChange}/>
                    <label htmlFor="football">足球</label>
                    <input type="checkbox" id="football" value={this.state.form.surport} onChange={this.surportChange}/>
                    <label htmlFor="pingpang">篮球</label>
                    <input type="checkbox" id="pingpang" value={this.state.form.surport} onChange={this.surportChange}/>
                </p>
                <p>
                    <button onClick={this.submitForm}>提交</button>
                </p>
            </div>
        )
    }
}

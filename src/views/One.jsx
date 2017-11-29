import React, { Component } from 'react'
import { NavLink as Link , Redirect } from 'react-router-dom' /**路由跳转**/
import 'assets/css/one.css'
import Group from 'components/Group'

export default class One extends Component {//要设置this.state的时候需要constructor，否则可以省略不写
    constructor(props){/**props需要作为参数传入，就是当你需要在constructor内部调用props时候才将props传入super**/
        super(props);//当存在constructor的时候，必须加super，super用来绑定子类(这里指的是One)的this
        // super(props)的目的在constructor中使用this.props。
        console.log(this.props);
        this.state = {
            name:'',
            sex:'',
            remark:'',
            basketball:false,
            football:false,
            pingpang:false,
            propsData:'props父传子的数据'
        }
    }
    componentWillMount(){
        console.log(this.props);
        console.log(this.state);
    }
    nameChange = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    sexChange = (event)=>{
        this.setState({
            sex:event.target.value
        })
    }
    remarkChange = (event)=>{
        this.setState({
            remark: event.target.value
        })
    }
    surportChange = (event)=>{
        let type = event.target.value,
            checked = event.target.checked,
            newState = {};
        newState[type] = checked;
        this.setState(newState)
    }
    submitForm = ()=>{
        console.log(this);
    }
    render(){
        if(true){
            return(
            <Redirect to="/Four"/>
            )
        }
        return(
            <div className="pageOne">
                <Group name={this.state.propsData}/>
                <p>
                    <input type="text" placeholder="用户名" value={this.state.name} onChange={this.nameChange}/>
                </p>
                {this.state.name}
                <p>
                    <label htmlFor="man">男</label>
                    <input name="sex" id="man" type='radio' checked={this.state.sex === 'man'} value='man' onChange={this.sexChange}/>
                    <label htmlFor="woman">女</label>
                    <input name="sex" id="woman" type='radio' checked={this.state.sex === 'woman'} value='woman' onChange={this.sexChange}/>
                </p>
                ---{this.state.sex}---
                <p>
                    <label htmlFor="remark">备注</label>
                    <textarea name="reamrk" id="remark" value={this.state.remark} onChange={this.remarkChange}></textarea>
                </p>
                {this.state.remark}
                <p>
                    <label htmlFor="basketball">篮球</label>
                    <input type="checkbox" name="surport" id="basketball" checked={this.state.basketball} value='basketball' onChange={this.surportChange}/>
                    <label htmlFor="football">足球</label>
                    <input type="checkbox" name="surport" id="football" checked={this.state.football} value='football' onChange={this.surportChange}/>
                    <label htmlFor="pingpang">篮球</label>
                    <input type="checkbox" name="surport" id="pingpang" checked={this.state.pingpang} value='pingpang' onChange={this.surportChange}/>
                </p>
                {this.state.surport}
                <p>
                    <button onClick={this.submitForm}>提交</button>
                </p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import "./todo.css";
import todo from './images/todo.png';
import { AiTwotoneDelete } from "react-icons/ai";


export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"Todo List",
            datas:[],
            act:0,
            index:""
        }
    }

AddTask = (e) => {
    e.preventDefault()
    let task = this.refs.task.value 
    let datas = this.state.datas
    if(this.state.act===0){
        let data = {
            task
        }
        datas.push(data)
        this.setState({
            datas:datas,
            act:0
        })
    }
    this.refs.task.focus()
    this.refs.task.value=""
} 

    Delete = (index) => {
        let datas = this.state.datas
        datas.splice(index, 1)
        this.setState({
            datas: datas,
            act: 0
        })
    }

  render() {
      let datas = this.state.datas
    return (
      <div className='main'>
      <img src={todo} alt=""></img>
            <div>
                <p className='quotes'>"Each day I will accomplish one thing on my to do list"</p>
                <h2 className='active-tasks'>ActiveTasks:<span className='at-length'>{datas.length}</span></h2>
      <form>
       <input  type="text" ref="task" placeholder='Enter task...'></input>
       <button onClick={this.AddTask}>ADD</button>
            </form>
            <div className='result'>
            <ol>
                    {datas.map((e, index) =>(
                        <li key={index+1}>{e.task}
                            <button onClick={this.Delete}><AiTwotoneDelete/></button>
                        </li>
                    ))}
                </ol>
                    
            </div>
                
            </div>
      </div>
    )
  }
}
 
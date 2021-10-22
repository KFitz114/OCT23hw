import axios from 'axios';
import React, {Component} from 'react';

class Api extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            todos: [],
            posts: []
        };
        this.getTodos = this.getTodos.bind(this);
        this.getPosts = this.getPosts.bind(this);
    }
    getTodos()  {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res =>    {
            console.log("AXIOS RESPONSE: ", res.data);
            this.setState({todos: res.data})
        });
    }
    getPosts()  {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>   {
            return res.json();
        })
        .then(digestedResponse =>   {
            console.log('Digested Response: ', digestedResponse);
            this.setState({posts: digestedResponse})
        })
    }
    render()    {
        console.log('this.state: ', this.state);
        const todos = this.state.todos.map(res => {
            return(
                (
                <tr>
                    <td> {res.userId} </td>
                    <td> {res.id} </td>
                    <td> {res.title}</td>
                    <td> {res.completed}</td>
                </tr>
                )
            )
                });
        const posts = this.state.posts.map(res => {
            return(
                (
                <tr>
                    <td> {res.userId} </td>
                    <td> {res.id} </td>
                    <td> {res.title}</td>
                </tr>
                )
            )
                });     
        return(
            <div id="container">
                {/* <div id="buttons"> */}
                    <div id="buttons">
                            <button id="todobtn" onClick={this.getTodos}> Get To-dos </button>
                            <button id="postsbtn" onClick={this.getPosts}> Get Posts </button>
                    </div>
                    <div id="results">
                        <div id="todoResults">
                        <h3>To-dos</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>UserID</th>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Completed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos}
                                </tbody>
                            </table>
                        </div>
                        <div id="postResults">
                        <h3>Posts</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>UserID</th>
                                        <th>ID</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

export default Api;
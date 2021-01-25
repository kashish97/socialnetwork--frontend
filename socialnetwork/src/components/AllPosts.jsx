import React, { useState,useEffect } from 'react';
import Post from './Post';
import axios from "axios";


export default function AllPosts(){

    const [allPosts,setPosts] = useState([]);

    const getPostsFromApi = ()=>{
        axios.get('http://localhost:7000/posts/').then(response => {
            console.log(response.data);
            setPosts(response.data);
        }).catch(err => {
            console.error(err);
        })
    }
    

    useEffect(() => {
        getPostsFromApi();
    }, []);

    return (<div className="container">
        {allPosts.map((item,index) =>{
            return <Post item = {item}></Post>
        })}
    </div>)
}
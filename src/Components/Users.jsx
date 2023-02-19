import {useState,useEffect} from 'react';


const Users = () =>{
const [users,setUsers] = useState([])
 const setUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers((prev)=>[...prev,users]))
 }
 useEffect(()=>{ 
fetch('https://jsonplaceholder.typicode.com/users/')
 .then(response => response.json())
 .then(json => setUsers(json))},[]);




 const setPost =() =>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 };



 const setUpdate = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 };



 const setDelete = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
 }
 
   console.log(users);
    return(
        <>
        {users.map((names,index)=>
        <div key={index}>
            <p>username {names.name}</p>
        </div>
        
        )}
         <button onClick={setUser}>set user</button>
         <button onClick={setPost}> set post</button>
         <button onClick={setUpdate}>set update</button>
         <button onClick={setDelete}>delete</button>
        </>
    )
}

export default Users;
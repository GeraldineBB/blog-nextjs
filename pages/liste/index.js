import React from 'react'
import Link from 'next/link'; 

export default function liste(props) {

    console.log('props users', props); 
  return (
    <div> {props.users.map((user) => (
        <>
        <p key={user.name}>{user.name}</p>
        <Link href={`/liste/${user.name}`}><button>Contacter</button></Link>
        </>
    ))} </div>
  )
}

export async function getStaticProps (){

    const data = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    return {
        props: {
            users
        }
    }


}
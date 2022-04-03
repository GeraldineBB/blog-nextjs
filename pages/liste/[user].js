import React from 'react'

export default function user(props) {

    console.log(props); 
  return (
    <div>
        <p>{props.userEnCours.name}</p>
        <p>{props.userEnCours.userName}</p>
        <p>{props.userEnCours.email}</p>

    </div>
  )
}

export async function getStaticProps(context){


    const slug = context.params.user;

    const data = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    const userEnCours = users.find(user => user.name === slug);

    return {
        props: {
            userEnCours: userEnCours
        }
    }
    
}

export async function getStaticPaths() {

    const data = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    const paths = users.map(user => (
        {
            params: {user: user.name}
        }
    ))

    return{
       paths, 
       fallback: false

    }

}
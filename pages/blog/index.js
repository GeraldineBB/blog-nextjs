import React from 'react'
import Link from 'next/link'; 

export default function blog(props) {

  console.log(props); 
  return (
    <div>

      <h1> Bienvenue sur le blog </h1>

      {

        props.articles.map ((article) => (
          <p  key={article.title}> {article.title}   
          
          <Link href={`/blog/${article.title}`}><a style={{color: 'red'}}>Lien vers article</a></Link>
          </p>

        ))

      }

    </div>
  )
}


export async function getStaticProps(){

  const data = await fetch ("https://jsonplaceholder.typicode.com/posts");

  const articles = await data.json();

  return {
      props: {
          articles
      }
  }

}
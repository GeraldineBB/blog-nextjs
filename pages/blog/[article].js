import React from 'react'

export default function article(props) {

    console.log('props', props)
  return (
    <div>
        <h1>{props.articleEnCours.title}</h1>
        <p>{props.articleEnCours.body}</p>
    </div>
  )
}

export async function getStaticProps (context){

    const slug = context.params.article; 

    console.log('slug', slug); 

    const data = await fetch ("https://jsonplaceholder.typicode.com/posts");

    const articles = await data.json(); 

    const articleEnCours = articles.find(article => slug === article.title);

    return {
        props: {
            articleEnCours: articleEnCours
        }
    }

}

export async function getStaticPaths () {

    const data = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const articles = await data.json(); 
    
    const paths = articles.map (article => (
        {
            params: {article: article.title}
        }
    ))

    return {
        paths,
        fallback: false
    }



}
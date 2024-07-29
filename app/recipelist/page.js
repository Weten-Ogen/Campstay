import Recipelist from '../../components/ui/recipelist'
import React from 'react'

async function getrecipe() {
  try {
    
    const recipelist = await fetch("https://dummyjson.com/recipes",{cache:'no-cache'})
    const recipedata = await recipelist.json()
    return recipedata?.recipes
    
  } catch (e) {
    throw new Error(e)
  }
}
export default async function RecipeList() {
  const recipedata = await getrecipe();
  const wait = () => setTimeout(() => { console.log('hello')},5000);
  await wait()
  return (
    <Recipelist recipedata={recipedata}/>
  )
}

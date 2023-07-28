import recipeView from './views/recpieView.js'
import searchView from './searchView.js'
import 'core-js/stable'
import'regenerator-runtime/runtime'
import * as model from './model.js' 
import recpieView from './views/recpieView.js';
import { async } from 'regenerator-runtime';

const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1)
    console.log(id)

    if(!id) return
    // 1) loding recipe
    recipeView.renderSpinner()

    await model.loadRecipe(id)

    // 2) rendring recipe
    recipeView.render(model.state.recipe)
  } catch(err) {
    recipeView.renderError()
  }
}
const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery()
    if(!query) return

   await model.loadSearchResults('pizza')
   console.log(model.state.search.results)
  } catch(err) {
    console.error(err)
  }
}


const init = function() {
  recpieView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}
init()
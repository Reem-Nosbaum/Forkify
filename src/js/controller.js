import recipeView from './views/recpieView.js'
import resultsView from './views/resultsView.js'
import searchView from './views/searchView.js'
import 'core-js/stable'
import'regenerator-runtime/runtime'
import * as model from './model.js' 
import recpieView from './views/recpieView.js';
import { async } from 'regenerator-runtime';

if(module.hot) {
  module.hot.accept()
}

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
    resultsView.renderSpinner()

    const query = searchView.getQuery()
    if(!query) return

   await model.loadSearchResults(query)
   resultsView.render(model.state.search.results)
  } catch(err) {
    console.log(err)
  }
}


const init = function() {
  recpieView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}
init()
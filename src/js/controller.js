import recipeView from './views/recpieView.js'
import resultsView from './views/resultsView.js'
import paginationView from './views/paginationView.js'
import searchView from './views/searchView.js'
import 'core-js/stable'
import'regenerator-runtime/runtime'
import * as model from './model.js' 
import recpieView from './views/recpieView.js';
import { async } from 'regenerator-runtime';

// if(module.hot) {
//   module.hot.accept()
// }

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

   resultsView.render(model.getSearchResultsPage())

   paginationView.render(model.state.search)
  } catch(err) {
    console.log(err) 
  }
}

const controlPagination = function(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage))

    paginationView.render(model.state.search)
}

const init = function() {
  recpieView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}
init()
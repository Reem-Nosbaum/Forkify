import * as model from './model.js' 
import recipeView from './views/recpieView.js'
import resultsView from './views/resultsView.js'
import bookmarksView from './views/bookmarksView.js'
import paginationView from './views/paginationView.js'
import searchView from './views/searchView.js'
import recpieView from './views/recpieView.js'

import 'core-js/stable'
import'regenerator-runtime/runtime'
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

    resultsView.update(model.getSearchResultsPage())

    bookmarksView.update(model.state.bookmarks)

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

const constrolServings = function(newServings) {
  // update the recpie servingns (in state)
  model.updateServings(newServings)
  // update the recipe view

  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)

}

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);


  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
}

const init = function() {
  recpieView.addHandlerRender(controlRecipes)
  recipeView.addHandlerUpdateServings(constrolServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}
init()
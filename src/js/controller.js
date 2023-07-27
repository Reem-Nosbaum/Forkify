import recipeView from './views/recpieView.js'
import 'core-js/stable'
import'regenerator-runtime/runtime'
import * as model from './model.js' 
const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

//////////////////////////////////////


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
    alert(err)
  }
}

controlRecipes()


window.addEventListener('load', controlRecipes);

window.addEventListener('hashchange', controlRecipes);

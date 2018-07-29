function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



Handlebars.registerPartial('recipeDetails', document.getElementById("recipe-details-partial").innerHTML);


Handlebars.registerHelper("displayIngredient",function(ingredient){
  return Handlebars.SafeString("<p>{{quantity}} {{name}}</p>")
});


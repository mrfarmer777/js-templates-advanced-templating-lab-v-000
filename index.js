function init() {
  //put any page initialization/handlebars initialization here
   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
   Handlebars.registerPartial('recipeFormPartial',document.getElementById("recipe-form-template").innerHTML);


  Handlebars.registerHelper("displayIngredient",function(ingredient){
    return Handlebars.SafeString("<p>{{quantity}} {{name}}</p>");
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  init();
  
  var template=Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
  var dest=document.getElementById("main");
  var result=template();
  dest.innerHTML=result;
 
  
  
});

function createRecipe(){
  var name=document.getElementsByName("name")[0].value;
  var ingredNodes=document.getElementsByName("ingredients");
  console.log(ingredNodes[0].value);
  
  template=Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  
  
}



function displayEditForm(){
  
}





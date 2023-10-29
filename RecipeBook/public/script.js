document.addEventListener("DOMContentLoaded", () => {
    
    
    allrecepies();
});


async function allrecepies(){
    let cardRecipes = document.getElementById("recipes-card");
    let response = await fetch(`/recipes`);
    let data = await response.json();
    let html = "";
        data.forEach(element => {
            html += `<div class="card">
                        <h4>${element.title}</h4>
                        <img src="${element.image_url}" alt="Recipe Image">
                        <div class="card-content">
                            <div class="rating-view">
                                <p>Avarage Rating</p>
                                <span class="average-rating">${parseInt(element.average_rating.toString())}&#9733;</span>
                            </div>
                        <h4><a href="recipeDetails.html?id=${element.id}">Read More</a></h4>
                        </div>
                    </div>`;
        });
    cardRecipes.innerHTML = html;
}
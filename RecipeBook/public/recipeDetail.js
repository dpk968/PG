let rating = 0;
document.addEventListener("DOMContentLoaded", () => {
    star();
    const clickedId = getQueryParam('id');
    fetchIdDataFromRecipe(clickedId);
    fetchFromRating(clickedId);
    const commentForm = document.getElementById("commentForm");
    const userName = document.getElementById("name");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if(rating < 1){
            Swal.fire({
                title: `Please Rate at least 1 Star...`,
                icon: 'error',
            });
        }
        else{
            const commentId = clickedId;
            const name = userName.value;
            fetch(`/recipes/${commentId}/rate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name ,rating}),
            })
            .then(response => response.json())
            .then(entry => {
                // Handle the response, e.g., display the new comment on the page
                Swal.fire({
                    title: `Thanku For Rate...`,
                    text: 'You will be redirected to Home Page',
                    timer:2000,
                    icon: 'success',
                }).then(() => {
                    // After the alert is closed, redirect to index.html
                    window.location.href = 'index.html';
                });
                // fetchAllComments(blogId)
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error occured...',
                    text: `${error}`,
                    icon: 'error',
                }).then(() => {
                    // After the alert is closed, redirect to index.html
                    window.location.href = `recipeDetails.html?id=${commentId}`;
                });
            });

        }
    });

});



function getQueryParam(param) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}

async function fetchFromRating(id) {
    let response = await fetch(`/rating/${id}`);
    let data = await response.json();
    let arrRating = Array();
    let html = "";
    data.forEach(e => {
        html += `<div class="rating-card">
        <div class="customer-info">
            <h3 class="customer-name">${e.user_id}</h3>
        </div>
        <div class="rating">
            <span class="rating-number">${e.rating}</span>
        </div>
    </div>`
    arrRating.push(e.rating);
    ;
    })
    let RatingFrequency = findFrequency(arrRating);
    
    let len = data.length;
    
    let totalRatingElement = document.getElementById("total-rating");

    let htm = `<div class="row">
    <div class="side">
      <div>5 star</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-5" style="width:${(RatingFrequency[5]/len).toFixed(2)*100}%"></div>
      </div>
    </div>
    <div class="side right">
      <div>${RatingFrequency[5]}</div>
    </div>
    <div class="side">
      <div>4 star</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-4" style="width:${(RatingFrequency[4]/len).toFixed(2)*100}%"></div>
      </div>
    </div>
    <div class="side right">
      <div>${RatingFrequency[4]}</div>
    </div>
    <div class="side">
      <div>3 star</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-3" style="width:${(RatingFrequency[3]/len).toFixed(2)*100}%"></div>
      </div>
    </div>
    <div class="side right">
      <div>${RatingFrequency[3]}</div>
    </div>
    <div class="side">
      <div>2 star</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-2" style="width:${(RatingFrequency[2]/len).toFixed(2)*100}%"></div>
      </div>
    </div>
    <div class="side right">
      <div>${RatingFrequency[2]}</div>
    </div>
    <div class="side">
      <div>1 star</div>
    </div>
    <div class="middle">
      <div class="bar-container">
        <div class="bar-1" style="width:${(RatingFrequency[1]/len).toFixed(2)*100}%"></div>
      </div>
    </div>
    <div class="side right">
      <div>${RatingFrequency[1]}</div>
    </div>
  </div>`;

  totalRatingElement.innerHTML = htm;
    let ratingElement = document.getElementById("all-ratings");
    ratingElement.innerHTML = html;


}
function findFrequency(arr) {
    const frequency = {};

    for (let i = 1; i <= 5; i++) {
        frequency[i] = 0; 
    }

    for (const element of arr) {
        if (element >= 1 && element <= 5) {
            frequency[element]++;
        }
    }
  
    return frequency;
  }
async function fetchIdDataFromRecipe(id){
    const recipeName = document.getElementById("detail-text-container");

    let response = await fetch(`/recipes/${id}`);
    let data = await response.json();

    let steps = document.getElementById("left-paragraph");
    let allSteps = data.steps.split("\n");
    // steps.innerHTML = data.steps;

        let ul = document.createElement("ul");
        allSteps.forEach(function (line) {
            const li = document.createElement("li");
            const iconSpan = document.createElement("i");
            iconSpan.className = "fas fa-check text-success";
            const textNode = document.createTextNode(line);
            li.appendChild(iconSpan);
            li.appendChild(textNode);
            
            // Append the list item to the ordered list
            ul.appendChild(li);
        });

        steps.appendChild(ul);

    recipeName.innerHTML = `<h1 id="recipe-name">${data.title}</h1>
    <a href="updateRecipe.html?id=${data.id}"><button type="submit">Edit Recipe</button></a>`;

    let olList = document.getElementById('right-list');
    let text = data.ingredients
    const lines = text.split("\n"); 

        const ol = document.createElement("ul");
        lines.forEach(function (line) {
            const li = document.createElement("li");
            const iconSpan = document.createElement("i");
            iconSpan.className = "fas fa-check text-success";
            const textNode = document.createTextNode(line);
            li.appendChild(iconSpan);
            li.appendChild(textNode);
            
            // Append the list item to the ordered list
            ol.appendChild(li);
        });

        olList.appendChild(ol);


        let bgurl = document.getElementById("detail-container");
        bgurl.style.backgroundImage = `url('${data.image_url}')`;

}

function star() {
    const stars = document.querySelectorAll('.star');
            const ratingValue = document.getElementById('rating-value');
    
    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            ratingValue.textContent = value;
            // stars.forEach((s) => s.classList.remove('selected'));
            star.classList.add('selected');
            rating = value;

        });
    
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.getAttribute('data-value'));
            stars.forEach((s) => {
                if (value >= parseInt(s.getAttribute('data-value'))) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    
        // star.addEventListener('mouseout', () => {
        //     stars.forEach((s) => s.classList.remove('selected'));
        // });
    });
}

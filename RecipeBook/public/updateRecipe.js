document.addEventListener("DOMContentLoaded", () => {
    
    const clickedId = getQueryParam('id');
    fetchIdData(clickedId);

    const updateForm = document.getElementById("myForm");
    // const userName = document.getElementById("name");

    updateForm.addEventListener("submit", function (event) {
        event.preventDefault();  
        const title = document.getElementById("title").value;
        const ingredients = document.getElementById("ingredents").value;
        const steps = document.getElementById("steps").value;
        const image_url = document.getElementById("imgUrl").value;
        
        fetch(`/recipes/${clickedId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, ingredients, steps, image_url }),
        })
        .then(response => response.json())
        .then(entry => {
            Swal.fire({
                title: `Data updated for ${entry.title}...`,
                text: 'You will be redirected to Home Page',
                icon: 'success',
            }).then(() => {
                window.location.href = 'index.html';
            });
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
    });

});



function getQueryParam(param) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}
async function fetchIdData(id){
    const formData = document.getElementById("myForm");

    let response = await fetch(`/recipes/${id}`);
    let data = await response.json();

    let html = `<label for="title">Title:</label>
    <input type="text" id="title" name="title" value="${data.title}" required>

    <label for="Ingredents">Ingredents:</label>
    <textarea id="ingredents" name="ingredents" required>${data.ingredients}</textarea>

    <label for="steps">Steps:</label>
    <textarea id="steps" name="steps" required>${data.steps}</textarea>

    <label for="imgUrl">Img Url:</label>
    <input type="text" id="imgUrl" name="imgUrl" value="${data.image_url}" required>

    <input type="submit" value="Update Recipe">`;
    formData.innerHTML = html;

}

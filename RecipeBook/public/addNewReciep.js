const commentForm = document.getElementById("myForm");


commentForm.addEventListener("submit", function (event) {
    event.preventDefault();  
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredents").value;
    const steps = document.getElementById("steps").value;
    const image_url = document.getElementById("imgUrl").value;
    
    // console.log(JSON.stringify({ title, ingredients, steps, image_url }));
        fetch(`/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, ingredients, steps, image_url }),
        })
        .then(response => response.json())
        .then(entry => {
            // Handle the response, e.g., display the new comment on the page
            Swal.fire({
                title: `New Reciep added ${entry.title}`,
                text: 'You will be redirected to index.html',
                icon: 'success',
            }).then(() => {
                // After the alert is closed, redirect to index.html
                window.location.href = 'index.html';
            });
            // fetchAllComments(blogId)
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error occured...',
                text: `${error}`,
                icon: 'error',
            }).then(() => {
                // After the alert is closed, redirect to index.html
                window.location.href = `recipeAddition.html.html`;
            });
        });
    });
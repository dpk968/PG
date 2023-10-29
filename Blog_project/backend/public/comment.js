document.addEventListener("DOMContentLoaded", () => {


    function getQueryParam(param) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(param);
    }

    // Get the 'id' parameter from the URL
    const clickedId = getQueryParam('id');


    const commentForm = document.getElementById("commentForm");
    const commentContent = document.getElementById("commentContent");

    fetchAllComments(clickedId)
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const blogId = clickedId;
        const content = commentContent.value;

        
        fetch(`/blogs/${blogId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
        })
        .then(response => response.json())
        .then(newComment => {
            // Handle the response, e.g., display the new comment on the page
            console.log("New Comment:", newComment);
            fetchAllComments(blogId)
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});


async function fetchAllComments(id){
    console.log("id"+id)
    const blogList = document.getElementById("commentList");
    let response = await fetch(`/blogs/${id}`);
    let data = await response.json();
    console.log(data)
    let html = "";
    if(data.length == 0){
        html = `<h1 style="margin-left: 35%;">Enter any comments....</h1>`;
    }else{
        data.forEach(element => {
            html += `<article class="blog-card" id="${element.id}">
                        <p>${element.content}</p>
                    </article>`;
        });
    }

    blogList.innerHTML = html;
}
document.addEventListener("DOMContentLoaded", () => {
    
    
    allBlog();
});


async function allBlog(){
    const blogList = document.getElementById("blog-list");
    let response = await fetch(`/blogs`);
    let data = await response.json();
    let html = "";
    if(data.length == 0){
        html = `<h1 style="margin-left: 35%;">Add Any blog to see....</h1>`;
    }else{
        data.forEach(element => {
            html += `<article class="blog-card" id="${element.id}">
                        <h2>${element.title}</h2>
                        <p>${element.content.slice(0, 10)}...</p>
                        <a href="comment.html?id=${element.id}">Read more</a>
                    </article>`;
        });
    }

    blogList.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");

    // Sample blog data
    const sampleBlogs = [
        {
            title: "Blog 1",
            content: "This is the content of Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date_created: "2023-09-01",
        },
        {
            title: "Blog 2",
            content: "This is the content of Blog 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date_created: "2023-09-02",
        },
    ];

    // Loop through the sample blogs and create HTML elements to display them
    sampleBlogs.forEach(async (blog) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        let response = await fetch(`/convert?target=${targetCurrency}&amount=${amount}`);
        let data = await response.json();
        blogCard.innerHTML = `
            <h2>${blog.title}</h2>
            <p>${blog.content}</p>
        `;
        blogList.appendChild(blogCard);
    });
});

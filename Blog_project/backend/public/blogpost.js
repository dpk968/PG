document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const formData = {
            title: form.elements.title.value,
            content: form.elements.content.value,
        };

        const jsonData = JSON.stringify(formData);
        console.log("efrgfh",jsonData)
        fetch("/blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Specify JSON content type
            },
            body: jsonData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response from server:", data);
            window.location.href = "index.html";
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});

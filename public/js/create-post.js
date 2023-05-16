/* // Handle the form submit event
document.getElementById("create-post-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  // Create a new post object with the input values
 const post = {
    title: title,
    body: body
  };

  fetch("/api/BlogPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
  .then(response => response.json())
  .then(newPost => {
    // Append the new post to the homepage
    const newPostHTML = '<div class="post">' + '<h3>' + newPost.title + '</h3>' + '<p>' + newPost.body + '</p>' + '</div>'

    const postContainer = document.createElement("posts-container"); 
    postContainer.innerHTML += newPostHTML;

    document.getElementById("create-post-form").reset();
  })
  .catch(error => {
    console.error("Error creating blog post:", error);
  });
}); */

// Function to create new post

const fetchAndRenderPost = async () => {
  try {
  
    const response = await fetch('/create/post'); 

    if (response.ok) {
      const post = await response.json();
      const postContainer = document.querySelector("#post-container");
      postContainer.innerHTML = ''; 

      // Create and append the post elements
      const postEl = document.createElement('div');
      postEl.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-body">${post.body}</p>
        <p>By: ${post.name}</p>
        <p>Created: ${post.posted}</p>
      `;
      postContainer.appendChild(postEl);
    } else {
      alert('Failed to fetch the post');
    }
  } catch (error) {
    console.error(error);
  }
};

const deletePost = async (event) => {
  event.preventDefault();
  
   
   const response = await fetch('/:id', {

    method: 'DELETE',
  
  });

  if (response.ok) {
   
    document.location.replace('/:id');
  } else {
    
    alert('Failed to delete');
  }
};


 document.querySelector('#post-container').addEventListener('submit', fetchAndRenderPost);

document.querySelector('.posts').addEventListener('submit', deletePost);

// Function to create new post

const Post = async (event) => {
    event.preventDefault();
  
    // Get form data
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    // Send POST request to server to create a new post
    const response = await fetch('http://localhost:3000/api/blogpost-routes', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
     
      document.location.reload();
    } else {
      
      alert('Failed to create a new post');
    }
  };

  
  document.querySelector('.create-post-form').addEventListener('submit', Post);

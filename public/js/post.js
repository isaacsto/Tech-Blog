// Function to create new post
const newPost = async (event) => {
    event.preventDefault();
  
    // Get form data
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    // Send POST request to server to create a new post
    const response = await fetch('/api/post-controller', {
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
  
  
  document.querySelector('#create-post-form').addEventListener('submit', newPost);
  
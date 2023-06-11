// Function to create new post

const Post = async (event) => {
    event.preventDefault();
  
    // Get form data
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
  
    // Send POST request to server to create a new post
    const response = await fetch('/api/blogpost/create/post', {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
     
      document.location.reload();
    } else {
      
      alert('Failed to create a new post');
    }
  };

  const deletePost = async (event) => {
    event.preventDefault();
    
     
     const response = await fetch('/api/blogpost/id', {

      method: 'DELETE',
    
    });
  
    if (response.ok) {
     
      document.location.replace('/blogpost');
    } else {
      
      alert('Failed to delete');
    }
  };

  
  document.querySelector('.create-post-form').addEventListener('submit', Post);

  document.querySelector('.post').addEventListener('click', Post);

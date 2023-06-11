const savePost = async (event) => {
    event.preventDefault();
  
    // Get form data
    const title = document.querySelector('#post-title').value.trim();
    const authorName = document.querySelector('#author-name').value.trim();
    const body = document.querySelector('#post-body').value.trim();
  
  
    // Send POST request to server to create a new post
    const response = await fetch('/api/blogpost/create/post', {
      method: 'POST',
      body: JSON.stringify({ title, authorName, body }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('Post saved successfully!');
      window.location.href = '/dashboard.handlebars';
    } else {
      alert('Failed to create a new post');
    }
  };
  
  document.querySelector('.create-post-form').addEventListener('submit', savePost);
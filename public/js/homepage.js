const mainPage = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Title': 'Description',
        },
      });
  
      if (response.ok) {
        document.location.replace('/mainPage');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('post-id')) {
      const id = event.target.getAttribute('post-id');
  
      const response = await fetch(`/api/blogpost-routes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/mainPage');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('post-list')
    .addEventListener('click', delButtonHandler);
  
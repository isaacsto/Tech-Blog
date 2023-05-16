const mainPage = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/blogpost`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Title': 'Description',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blogpost');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('blogpost')) {
      const id = event.target.getAttribute('blogpost');
  
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/blogpost');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  /* document
    .querySelector('.create-post-form')
    .addEventListener('submit', Post ); */
  
/*   document
    .querySelector('post-list')
    .addEventListener('click', delButtonHandler);
   */
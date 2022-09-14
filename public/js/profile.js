const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const rating = document.querySelector('#blog-funding').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

// && rating
  if (name && rating && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      // rating,
      body: JSON.stringify({ name, rating, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

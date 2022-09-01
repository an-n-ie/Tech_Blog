const commentHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment-desc').value.trim();
  const path = window.location.pathname;
  const project_id = path.substring(path.lastIndexOf('/')+1)

  if (comment_text) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text , project_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

const delCommentHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/comment');
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentHandler);

document
  .querySelector('.comment-list')
  .addEventListener('click', delCommentHandler);

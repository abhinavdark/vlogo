// admin-script.js
const postsSection = document.getElementById('posts');
const settingsSection = document.getElementById('settings');

postsSection.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        if (event.target.textContent === 'Edit') {
            // Edit post logic here
        } else if (event.target.textContent === 'Delete') {
            // Delete post logic here
        }
    }
});

settingsSection.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    // Save changes logic here
});

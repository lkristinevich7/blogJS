let posts = window.posts;
let postsList = document.getElementById('posts-list')
// createPost()

renderPosts(posts, postsList)

randomPostButton.onclick = function (eventPlacki) {
    console.log(eventPlacki)
    randomPost()
}


function renderPosts(posts, postsList) {
    postsList.innerHTML = ''
    let result;
    for (let i in posts) {
        let post = posts[i];
        let newPost = createPost(post)

        result = postsList.appendChild(newPost);

    }
    return result

}

function createPost(post) {
    let postItem = document.createElement('div')
    postItem.classList.add('postItem');

    let excerpt = post.body.slice(0, 100) + "...";

    let postItemHtml = `<div class="postItem">
        <h4>${post.title}</h4>
        <p class="mb-0">${excerpt}</p>
        <footer class="blockquote-footer">${post.author.username}</footer>
    </div>`
    postItem.innerHTML = postItemHtml;

    return postItem
}



function randomPost() {
    random = Math.floor(Math.random() * 3)

    postsList.innerHTML = '';

    postsList.appendChild(createPost(posts[random]))
}




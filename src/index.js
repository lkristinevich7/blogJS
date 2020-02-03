let posts=window.posts;
let postsList= document.getElementById('posts-list')
// createPost()
renderPosts(posts, postsList)

function renderPosts(posts, postsList){
    postsList.innerHTML=''
    let result;
    for(let i in posts){
        let post= posts[i];
        let newPost=createPost(post)

        result = postsList.appendChild(newPost);
    
    }
    return result

}

function createPost(post){
    let postItem=document.createElement('div')
    let postTitle=document.createElement('h4')
    let postBody=document.createElement('p')
    let postFooter=document.createElement('footer')
    //add class
    postItem.classList.add('postItem');
    postBody.classList.add('mb-0');
    postFooter.classList.add('blockquote-footer');
    //get content
    let titleText=post.title
    let longbodyText=post.body
    let bodyText=longbodyText.slice(0,100)
    let footerText=post.author.username
    //append content to elements
    postTitle.innerText=titleText;
    postBody.innerText=bodyText;
    postFooter.innerText=footerText;

    postItem.appendChild(postTitle);
    postItem.appendChild(postBody);
    postItem.appendChild(postFooter);

    return postItem
}








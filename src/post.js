let posts = window.posts


let post1 = {
    post: posts[0],
    comments: [
        {
            id: 1,
            body: 'Laboriosam aliquid consequuntur, voluptate quibusdam temporibus doloremque quam illo i ipsum.....',
            author: 'Artur Bednarek'
        },
        {
            id: 2,
            body: 'Numquam ipsam ad aperiam nemo dicta in enim reprehenderit quisquam quas dolores, eum repudiandae sed saepe!  ipsum.....',
            author: 'Anna Nowak'
        },
        {
            id: 3,
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore cupiditate, accusamus culpa vel nulla numquam maxime voluptatem odit pariatur recusandae.',
            author: 'Aleksandra Kowalska'
        }
    ]
}


createPost(post1.post)
createComments(postItem, post1)


function createPost(post) {
    postItem.innerHTML = ''

    let postTitle = document.createElement('h4')
    let postBody = document.createElement('p')
    let postFooter = document.createElement('footer')
    let postComments = document.createElement('ul')
        postComments.classList.add('comments-list')

    postBody.classList.add('mb-0');
    postFooter.classList.add('blockquote-footer');

    let titleText = post.title
    let bodyText = post.body
    let footerText = post.author.username

    postTitle.innerText = titleText;
    postBody.innerText = bodyText;
    postFooter.innerText = footerText;

    postItem.appendChild(postTitle);
    postItem.appendChild(postBody);
    postItem.appendChild(postFooter);
    postItem.appendChild(postComments);

    return postItem
}


function createComments(postItem, post) {
    let comments = post.comments
    let ul = postItem.querySelector("ul.comments-list");
    ul.innerHTML = ''
    
    let tpl = document.getElementById('commentTpl').content

    for (let i in comments) {
        let comment = comments[i]
        let li = tpl.cloneNode(true)

        li.querySelector(".blockquote-footer").innerText = comment.author;
        li.querySelector(".comment-text").innerText = comment.body;

        ul.appendChild(li);
    }
    return postItem
}



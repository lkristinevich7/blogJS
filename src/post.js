let posts=window.posts


let post1={
    name: posts[0],
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


createPost()


function createPost(){
    
    postItem.innerHTML=''
    let post= post1.name;
    let postTitle=document.createElement('h4')
    let postBody=document.createElement('p')
    let postFooter=document.createElement('footer')
    
    postBody.classList.add('mb-0');
    postFooter.classList.add('blockquote-footer');

    let titleText=post.title
    let bodyText=post.body
    let footerText=post.author.username

    postTitle.innerText=titleText;
    postBody.innerText=bodyText;
    postFooter.innerText=footerText;

    postItem.appendChild(postTitle);
    postItem.appendChild(postBody);
    postItem.appendChild(postFooter);

    return postItem
}

createComment()

function createComment(){
    let comments = post1.comments

    for (let i in comments){
        let ul = document.createElement("UL");
        let li = document.createElement("LI");
        let span = document.createElement("span");
        span.classList.add('blockquote-footer')
        let text=comments[i].body;
        let author=comments[i].author;
        li.innerText=text;
        span.innerText=author;
        li.appendChild(span);
        ul.appendChild(li);
    

        postItem.appendChild(ul)
    
        }
        return postItem
}



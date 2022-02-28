
const blog = document.querySelector('#blogs');

// CREATE ELEMENT

function renderBlog(doc) {
    let li = document.createElement('li');
    let date = document.createElement('span');
    let content = document.createElement('span');
    let title = document.createElement('span');

    tr.setAttribute('data-id', doc.id);
    date.textContent = doc.data().date;
    title.textContent = doc.data().title;
    content.textContent = doc.data().content;


    li.appendChild(date);
    li.appendChild(title);
    li.appendChild(content);


    blog.appendChild(li);


    
}

db.collection('blog').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlog(doc);
    })
  })
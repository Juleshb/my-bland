
const blog = document.querySelector('#blogs');
const form = document.querySelector('#post');

// CREATE ELEMENT

function renderBlog(doc) {
    let td = document.createElement('tr');
    let date = document.createElement('td');
    let content = document.createElement('td');
    let title = document.createElement('td');

    

    td.setAttribute('data-id', doc.id);
    date.textContent = doc.data().date;
    title.textContent = doc.data().title;
    content.textContent = doc.data().content;
    


    td.appendChild(date);
    td.appendChild(title);
    td.appendChild(content);
   


    blog.appendChild(td);

    


    
}

db.collection('blog').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlog(doc);
    })
  })

  //saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('blog').add({
      date: form.date.value,
      title: form.title.value,
      content: form.content.value
    })
    form.date.value = '';
    form.title.value = '';
    form.content.value = '';
  })
  
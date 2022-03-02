
const blog = document.querySelector('#blogs');
const form = document.querySelector('#post');

// CREATE ELEMENT

function renderBlog(doc) {
    let td = document.createElement('tr');
    let date = document.createElement('td');
    let content = document.createElement('td');
    let title = document.createElement('td');

    let del = document.createElement('button');

    td.setAttribute('data-id', doc.id);
    date.textContent = doc.data().date;
    title.textContent = doc.data().title;
    content.textContent = doc.data().content;
    del.textContent = 'Delete';


    td.appendChild(date);
    td.appendChild(title);
    td.appendChild(content);
    td.append(del);


    blog.appendChild(td);

    


    
}

db.collection('message').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlog(doc);
    })
  })

  //saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('message').add({
      email: form.email.value,
      sms: form.sms.value,
      
    })
    form.email.value = '';
    form.sms.value = '';
    
  })
  
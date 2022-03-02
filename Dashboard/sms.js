
const blog = document.querySelector('#blogs');
const form = document.querySelector('#post');

// CREATE ELEMENT

function renderBlog(doc) {
    let td = document.createElement('tr');
    let email = document.createElement('td');
    let sms = document.createElement('td');
    

    

    td.setAttribute('data-id', doc.id);
    email.textContent = doc.data().email;
    sms.textContent = doc.data().sms;
    


    td.appendChild(email);
    td.appendChild(sms);
    
   


    blog.appendChild(td);

    


    
}

db.collection('message').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderBlog(doc);
    })
  })

  
  
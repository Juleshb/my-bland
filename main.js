
const renderPosts = (doc) => {
  const postsContainer = document.querySelector('#pr');

  const postDiv = document.createElement('div');
  postDiv.setAttribute('class', 'post');
  postDiv.className = 'project';

      const postImage = document.createElement('img');
      postImage.src = doc.data().image;
      postImage.className = 'kiki';

      const postData = document.createElement('span');
      //postData.className = 'project';

          const postTitle = document.createElement('span');
          postTitle.className = 'title';
          postTitle.textContent = doc.data().title;

          const postSummary = document.createElement('span');
          postSummary.textContent = doc.data().content.substring(0, 100);
          
          const readMore = document.createElement('button');
          readMore.textContent = "Read More";

          readMore.addEventListener('click', (e) => {
              e.preventDefault();
              location.href = "more.html#"+doc.id;
          })

         
      postData.appendChild(postTitle);
      postData.appendChild(postSummary); 
      postData.appendChild(readMore);

  postDiv.appendChild(postImage);
  postDiv.appendChild(postData);

  postsContainer.appendChild(postDiv);
}

db.collection('blog').get().then(res=>{
  res.docs.forEach(doc=>{
      renderPosts(doc);
  })
})
/*
// my own codes

const blog = document.querySelector('#pr');
const form = document.querySelector('#post');

// CREATE ELEMENT

function renderBlog(doc) {
    let td = document.createElement('p');
    let date = document.createElement('span');
    let content = document.createElement('span');
    let title = document.createElement('span');
   

    

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
  });

  const ref = firebase.storage().ref();
const file = document.querySelector('#photo').files[0]
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);
    document.querySelector('#someImageTagID').src = url;
  })
  .catch(console.error);

  //update

  */
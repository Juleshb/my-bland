
const updatePost = document.getElementById('updatePost');
const title = document.getElementById('title');
const content = document.getElementById('content');

const id = location.hash.slice(1);

db.collection('blog').doc(id).get().then(res => {
    title.value = res.data().title;
    content.value = res.data().content;
})

updatePost.addEventListener('click',(e)=>{
    e.preventDefault();
    db.collection('blog').doc(id).update({
       
        content: content.value,
        title: title.value
    }).then(res=>{
        title.value = "";
        content.value = "";
        alert("Post updated");
        location.href = "dash.html";
    }).catch(err=>{
        alert("Error: " + err.message)
    })
})
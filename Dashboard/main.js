db.collection('blog').get().then((snapshot) => {
  console.log(snapshot.docs);
})
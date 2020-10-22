const fakeRequest = url => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const pages = {
        '/users':[
          {id:1,username:"Bilbo"},
          {id:5,username:"Esmeralda"}
        ],
        '/users/1':{
          id:1,
          username:'Bilbo',
          upvotes:360,
          city:'Libson',
          topPostId:454321
        },
        '/users/5':{
          id:5,
          username:'Esmeralda',
          upvotes:571,
          city:'Honolulu'
        },
        '/posts/454321':{
          id:454321,
          title:
          'Ladies & gentlemen'
        },
        '/about':'This is a  about page!'
      };
      const data=pages[url];
      if(data){
        resolve({status:200,data});
      }else{
        reject({status:404});
      }
    },1000)
  });
}

// fakeRequest('/users').then(res => {
//   const id = res.data[0].id;
//   fakeRequest(`/usedrs/${id}`).then(res => {
//     //console.log(res);
//     const topPostId=res.data.topPostId;
//     fakeRequest(`/posts/${topPostId}`).then(res => {
//       console.log(res);
//     })
//   })
// })
// .catch((err) => {
//   console.log('we got a  error',err);
// })

fakeRequest('/users')
.then(res => {
  console.log(res);
  const id = res.data[0].id;
  return fakeRequest(`/users/${id}`)
})
.then(res => {
  console.log(res);
  const topPostId=res.data.topPostId;
  return fakeRequest(`/posts/${topPostId}`)
})
.then(res => {
  console.log(res);
})
.catch((err) => {
  console.log('we got a  error',err);
});

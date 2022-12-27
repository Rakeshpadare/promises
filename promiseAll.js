const posts=[

  {title: 'post first', body:'my first post '},

  {title: 'post second', body:'my second post '}

];
function getPosts(){
  setTimeout(() => {
    let output=''
    posts.forEach((post, index)=>{
      output+= `<li>${post.title}</li>`
    })
    document.body.innerHTML=output;
  }, 2000);
}

function newPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error= false;
      if(!error){
        resolve()
  
      }
      else{
        reject('Error occurs: something is not right')

      }
    }, 1000);
  })
}
newPost({title: 'post three', body: 'this is third post'}).then(getPosts)

function updateLastUserActivityTime(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            post.updateLastUserActivityTime= new Date().getTime();
            resolve()
            
        }, 1000);
    })
};
function userUpadatepost(){
    Promise.all([getPosts,updateLastUserActivityTime])
    .then(([getPostsresolve, updateLastUserActivityTimeresolve])=>{
        console.log(updateLastUserActivityTimeresolve)
    })
    
}
getPosts()
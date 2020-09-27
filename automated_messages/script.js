function automatedMessage(content, users, rntas=false) {
  let i = 0;
  function next() {
    const user = users[i].uname;
    const nickname = users[i].nickname;
    $.get('https://api.scratch.mit.edu/users/'+user, b => {
      const id = b.id;
      $.ajax({type: "POST",url: "https://scratch.mit.edu/site-api/comments/user/"+user+"/add/",data: `{"content":"${content.split('USER').join(user).split('NICKNAME').join(nickname) + (rntas?' RNTAS: '+Math.round(Math.random()*100000):'')}","parent_id":null,"commentee_id":null}`}, console.log)
    });
    i++;
    if(i < users.length)
      setTimeout(next, 10000);
  }
  next();
}

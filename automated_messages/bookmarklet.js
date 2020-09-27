if(location.hostname == 'scratch.mit.edu' && $ && 'ajax' in $) {
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
  const msg = prompt("Enter your message. Use USER and NICKNAME to refer to a user's username or nickname.");
  let result = '';
  let u = [];
  while(result != '/exit') {
    result = prompt('Enter username. Type /exit to exit.');
    if(result != '/exit') {
      u.push({
        uname: result,
        nickname: prompt('Enter user\'s nickname')
      });
    }
  }
  let useRNTAS = prompt('Do you want to add a random number? y/n').toLowerCase() == 'y';
  automatedMessage(msg, u, userRNTAS);
}

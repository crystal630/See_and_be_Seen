let base_url = 'https://organized-alluring-nerine.glitch.me';

document.getElementById('new_post_submit').addEventListener('click', async function() {
  let post = {
    username: document.getElementById('new_post_username').value,
    text: document.getElementById('new_post_text').value
  };

  let response = await fetch(base_url + '/post', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });

  let returned_post = await response.json();
  console.log('POST /post returned', returned_post);
});

document.getElementById('reply_submit').addEventListener('click', async function() {
  let post = {
    username: document.getElementById('reply_username').value,
    text: document.getElementById('reply_text').value,
    parent: 1
  };

  let response = await fetch(base_url + '/post', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  });

  let returned_post = await response.json();
  console.log('POST /post returned', returned_post);
});

document.getElementById('like_submit').addEventListener('click', async function() {
  let like = {
    id: 1,
    username: document.getElementById('like_username').value
  };

  let response = await fetch(base_url + '/like', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(like)
  });

  let returned_post = await response.json();
  console.log('POST /like returned', returned_post);
});

document.getElementById('get_posts_submit').addEventListener('click', async function() {
  let response = await fetch(base_url + '/posts', {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let posts = await response.json();
  console.log('GET /posts returned', posts);

  let container = document.getElementById('get_posts_result');
  container.innerHTML = '';

  for (post of posts) {
    let post_p = document.createElement('p');
    post_p.className = 'post';
    post_p.innerHTML = post.username + ': ' + post.text;

    for (reply of post.replies) {
      let reply_p = document.createElement('p');
      reply_p.className = 'reply';
      reply_p.innerHTML = reply.username + ': ' + reply.text;
      post_p.appendChild(reply_p);
    }

    container.appendChild(post_p);
  }
});

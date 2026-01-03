let posts = JSON.parse(localStorage.getItem("posts")) || [];
let postBox = document.getElementById("posts");

posts.forEach(p => {
  postBox.innerHTML += `
    <div class="post">
      <h2>${p.title}</h2>
      <p>${p.content}</p>
    </div>
  `;
});

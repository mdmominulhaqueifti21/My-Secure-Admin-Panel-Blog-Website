function savePost(){
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let imgFile = document.getElementById("image").files[0];

  if(!title || !content){
    alert("Title & Content required");
    return;
  }

  let reader = new FileReader();
  reader.onload = function(){
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push({
      id: Date.now(),
      title: title,
      content: content,
      image: reader.result
    });

    localStorage.setItem("posts", JSON.stringify(posts));
    alert("Post Published ✅");
  };

  if(imgFile){
    reader.readAsDataURL(imgFile);
  }else{
    reader.onload();
  }
}

function logout(){
  sessionStorage.removeItem("adminLogin");
  location.href = "iwd-admin.html";
}

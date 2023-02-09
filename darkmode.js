darkModeButton = document.getElementById("dark-mode-button")
handleButtonClick = function (){
  body = document.body;
  body.style.backgroundColor = "#091d1e";
  body.style.color = "#aaaaaa";

  title = document.getElementById("title-section");
  title.style.border = "1px solid #aaaaaa";
//change tmr on the specific website
//posts(articles)
  posts = document.getElementByClassName("posts")
  for(post of posts){
    post.style.border = "1px solid #aaaaaa"
  }
  //getElementByClassName
  postHeadings = document.getElementsByTagName("h3")
  for(heading of postHeading){
    heading.style.color = "#466876"
  }
}
darkModeButton.addEventListener("click", handleButtonClick)

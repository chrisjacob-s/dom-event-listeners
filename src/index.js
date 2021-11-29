// import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const buttons = document.querySelectorAll(".expand_button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      let hide = btn.textContent === "V";
      btn.textContent = hide ? ">" : "V";
      
      let article = document.querySelector(".article_body");

      article.style.display = hide ? "none" : "block";
    });
  });
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const buttons = document.querySelectorAll(".highlightBtn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      let hide = btn.textContent === "-";
      btn.textContent = hide ? "+" : "-";

      let article = document.querySelector("article");
      // let highlight = style.classList.add("highlight")
      // let noHighlight = style.classList.remove("highlight")

      
    })
  })
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();

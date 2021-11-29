// import "./styles.css";

/*
In this function first select all the buttons with the class .expand_button. On each button add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button that was clicked is a 'V' then set the display property of the article's body to 'none'. Also set the text on the button to '>'.
If the text on the button that was clicked is not a 'V' then set the display property of the article's body to 'block'. Also set the text on the button to 'V'.

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
In this function first select all buttons with the class .highlightBtn. On each button add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button is '+' then add the .highlight class to the article and set the text on the button to '-'.
If the text on the button is not '+' then remove the .highlight class from the article and set the text on the button to '+'.

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

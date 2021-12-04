// import "./styles.css";

/*
In this function first select all the buttons with the class .expand_button. 
On each button add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button that was clicked is a 'V' 
then set the display property of the article's body to 'none'. 
Also set the text on the button to '>'.
If the text on the button that was clicked is not a 'V' 
then set the display property of the article's body to 'block'. 
Also set the text on the button to 'V'.
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const buttons = document.querySelectorAll(".expand_button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      // Changes ">" to "V"
      // Vise versa
      let hide = btn.textContent === "V";
      btn.textContent = hide ? ">" : "V";

      // - Test - 
      // const article = document.querySelectorAll(".article_body");
      // const header = document.querySelectorAll("h2");
      // const parentButtonClick = event.target.parentNode;
      // for (let i = 0; i < article.length; i++) {
      //   article[i].style.display = hide ? "none" : "block";
      // }

      // Access to each btn article
      const grand = btn.parentNode.parentNode.parentNode
      // Access to each btn article body
      const body = grand.querySelector(".article_body");

      // Changes display from none to block
      // Vise versa
      body.style.display = hide ? "none" : "block";
    });
  });
}

/*
In this function first select all buttons with the class .highlightBtn. 
On each button add a click event listener that does the following:

Find the article in which the button that was clicked belongs.
If the text on the button is '+' then add the .highlight class to the article 
and set the text on the button to '-'.
If the text on the button is not '+' then remove the .highlight class from the article 
and set the text on the button to '+'.
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const buttons = document.querySelectorAll(".highlightBtn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      // Changes "+" to "-"
      // Vise versa
      let hide = btn.textContent === "-";
      btn.textContent = hide ? "+" : "-";

      // - Test -
      // let article = document.querySelectorAll("article");

      // for (let i = 0; i < article.length; i++) {
      //   if (!hide) {
      //     article[i].classList.add("highlight");
      //   } else {
      //     article[i].classList.remove("highlight");
      //   }
      // }

      // Access to each btn article 
      const highlight = btn.parentNode.parentNode;

      // If it is not "-" upon click, add class highlight
      if (!hide) {
        highlight.classList.add("highlight");
      }
      // If it is "-" upon click, remove class highlight
      else {
        highlight.classList.remove("highlight");
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();


//example 1.....

document
  .getElementById("changeTheButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
  });

//expamle 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    console.log(citiesList.firstElementChild.classList.add("highlight"));
  });

//example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Expresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("vishal");
  });

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("you selescted: " + event.target.textContent)
    }
});

//example 8
document.getElementById("feedbackform").addEventListener("submit", function (event) {
    event.preventDefault()
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `feedback is: ${feedback}`;
});

//example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("domStatus").textContent = "DOM fully Loaded";
})

//example 10
document.getElementById("togglehighlight").addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight")
});
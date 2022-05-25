let arr = [];
let active = [];
let fa = [];

let htmlcode = "";
let id = "0";

initialLoad(arr);

// loop all items in array

function initialLoad(ary) {
  htmlcode = "";
  let id = "0";
  ary.forEach(function (item) {
    htmlcode += ` <div class="card old"><input type="checkbox" id="${id}"  onClick='onCheckUncheck()' /><label for="${id}">${item}</label><button class='delete' onClick='deleteFunc(this.parentElement.childNodes[0].id)'><img src='images/icon-cross.svg'/></button></div>`;
    id++;
  });
  document.querySelector(".card-data").innerHTML =
    htmlcode +
    `<div class="card last">
    <span>${ary.length} items left</span>
    <div>
      <span id="show-all" onClick='initialLoad(arr)' >All</span>
      <span id="show-active" onClick='notCompleted()'>Active</span>
      <span id="show-completed" onClick='Completed()'>Completed</span>
    </div>
  </div>`;
}

// add new item

let text = document.querySelector(".new");

text.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    htmlcode = "";
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click

    if (document.querySelector("#new-text").value.length > 0) {
      arr.push(document.querySelector("#new-text").value);
      document.querySelector("#new-text").value = "";
    }

    initialLoad(arr);
  }
});

// Delete Items

const deleteFunc = (item) => {
  arr.splice(item, 1);
  initialLoad(arr);
};

let filterArr = [];

const Completed = () => {
  initialLoad(fa);
};

let activeIndex = [];
const notCompleted = () => {
  initialLoad(active);
};

function onCheckUncheck() {
  activeIndex = [];
  active = [];
  fa = [];
  filterArr = [];

  const ele = document.querySelectorAll(".old");

  ele.forEach(function (item) {
    if (!item.firstChild.checked) {
      activeIndex.push(item.firstChild.id);
    }
  });

  activeIndex.forEach((item) => {
    active.push(arr[item]);
  });

  ele.forEach(function (item) {
    if (item.firstChild.checked) {
      filterArr.push(item.firstChild.id);
    }
  });

  filterArr.forEach((item) => {
    fa.push(arr[item]);
  });
}

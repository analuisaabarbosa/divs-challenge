document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const myDivs = document.getElementById("myDivs");
  const boxes = Array.from(document.querySelectorAll(".box"));

  myDivs.addEventListener("click", (event) => handleBoxClick(event, boxes));
}

function getElementPosition(box) {
  const { top, left, zIndex } = getComputedStyle(box);
  return { top, left, zIndex };
}

function swapElementPositions(index1, index2, boxes) {
  const position1 = getElementPosition(boxes[index1]);
  const position2 = getElementPosition(boxes[index2]);

  boxes[index1].style.top = position2.top;
  boxes[index1].style.left = position2.left;
  boxes[index1].style.zIndex = position2.zIndex;

  boxes[index2].style.top = position1.top;
  boxes[index2].style.left = position1.left;
  boxes[index2].style.zIndex = position1.zIndex;

  [boxes[index1], boxes[index2]] = [boxes[index2], boxes[index1]];
}

function handleBoxClick(event, boxes) {
  const clickedDiv = event.target;
  if (!clickedDiv.classList.contains("box")) return;

  const clickedIndex = boxes.indexOf(clickedDiv);
  const targetIndex = clickedIndex === 0 ? 3 : clickedIndex - 1;
  swapElementPositions(clickedIndex, targetIndex, boxes);
}
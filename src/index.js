import { Observable } from "rxjs";
import "./index.css";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
  .map(e => {
    return { x: e.clientX, y: e.clientY };
  })
  .filter(v => v.x < 1000)
  .delay(250);

const onNext = v => {
  circle.style.left = v.x + "px";
  circle.style.top = v.y + "px";
};

source.subscribe(
  onNext,
  // console.log(onNext),
  console.log,
  e => console.log(`error: ${e}`),
  () => console.log("complete")
);

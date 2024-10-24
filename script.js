var apiData = [];
var paraEle = document.getElementById("one");

function submitData(e) {
  e.preventDefault();

  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d219fdc42ae080207ec6b2803e9bc622&units=metric`
  )
    .then((data) => data.json())
    .then((data) => (apiData = data))
    .then(() => {
      Display();
    })
    .catch((err) => console.log(err));
}

function Display() {
  console.log(apiData);
  paraEle.innerHTML =
    paraEle.innerHTML=apiData["main"]["temp"] + " " + apiData["main"]["humidity"];
}

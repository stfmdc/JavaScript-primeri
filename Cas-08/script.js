// // Load the JSON data from the file using AJAX
// $.getJSON("http://127.0.0.1:5500/trainer.json", function (data) {
//   // Parse the JSON data into a JavaScript object
//   var trainerObj = JSON.parse(JSON.stringify(data));
//   console.log(trainerObj);
//   // Access the properties of the JavaScript object
//   var name = trainerObj.trainer.name;
//   var age = trainerObj.trainer.age;
//   var courses = trainerObj.trainer.courses;
//   var email = trainerObj.trainer.contact.email;
//   var phone = trainerObj.trainer.contact.phone;
//   console.log(courses);
 
//   // Display the data on the page
//   var trainerInfo = "<h2>" + name + "</h2>";
//   trainerInfo += "<p>Age: " + age + "</p>";
//   trainerInfo += "<p>Courses: " + courses.join(", ") + "</p>";
//   trainerInfo += "<p>Contact: " + email + ", " + phone + "</p>";
//   $("#trainer-info").html(trainerInfo);
 
//   // Convert the JavaScript object back into JSON string
//   var jsonString = JSON.stringify(trainerObj);
//   console.log(jsonString);
// });
 
// import { axios } from "@pipedream/platform"
// export default defineComponent({
//   props: {
//     swapi: {
//       type: "app",
//       app: "swapi",
//     }
//   },
//   async run({steps, $}) {
//     return await axios($, {
//       url: `https://swapi.dev/api/films/1/`,
//     })
//   },
// })
$(document).ready(function () {
  function callStarWarsCharacter(number) {
    let result = $("#title");
    console.log(number);
    $.ajax({
      method: "GET",
      url: "https://swapi.dev/api/people/" + number,
      success: function (data) {
        showInfo(data, result);
        console.log(data);
      },
    });
  }
  function showInfo(data, resultElement) {
    resultElement.after(
      `<p>Im and actor. I weight ${data.mass}kg and my height is ${data.height} cm, gender is ${data.gender}.</p>`
    );
    resultElement.after(`<h3>My name is ${data.name}</h3>`);
  }
  $("#btn").on("click", function () {
    callStarWarsCharacter(Math.floor(Math.random() * 27));
  });
});
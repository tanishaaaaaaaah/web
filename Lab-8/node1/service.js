function greeting(req, res) {
  var fn = req.query.firstname;
  res.send("Greetings, " + fn);
}

function additon(req, res) {
  var n1 = req.body.num1,
    n2 = req.body.num2,
    sum = Number(n1) + Number(n2);
  res.send(n1 + " plus " + n2 + " is equal to " + sum);
}

function subtraction(req, res) {
  var n1 = req.body.num1,
    n2 = req.body.num2,
    sum = Number(n1) - Number(n2);
  res.send(n1 + " minus " + n2 + " is equal to " + sum);
}

function multiplication(req, res) {
  var n1 = req.body.num1,
    n2 = req.body.num2,
    sum = Number(n1) * Number(n2);
  res.send(n1 + " multiplied by " + n2 + " is equal to " + sum);
}

function division(req, res) {
  var n1 = req.body.num1,
    n2 = req.body.num2,
    sum = Number(n1) / Number(n2);
  res.send(n1 + " divided by " + n2 + " is equal to " + sum);
}

function concatenation(req, res) {
  var n1 = req.body.num1,
    n2 = req.body.num2,
    temp = n1.concat(n2);
  res.send(" Concatenated numbers are " + temp);
}

function concatenationString(req, res) {
  var n1 = req.query.string1;
  var n2 = req.query.string2;
  var temp = n1.concat(n2);
  res.send(" Concatenated string is " + temp);
}

function reverse_String(req, res) {
  var n1 = req.query.string1;
  var temp = n1.split("");
  var reversedString = temp.reverse();
  var joinedString = reversedString.join("");
  //var joinedString = reversedString.split(",").join("");
  res.send(" Reversed string is " + joinedString);
}

function length_String(req, res) {
  var n1 = req.query.string1;
  var temp = n1.length;
  res.send(" Length of string is " + temp);
}

function sort_String(req, res) {
  //var n1 = req.query.string1;
  //var temp = n1.split(" ");
  //var sorted string = temp.sort()
  //res.send(" Sorted string is " + temp);

  //var string = req.query.string1;
  //var splittedstring = string.split(" ");
  //var sortedstring = splittedstring.sort();
  //var result = sortedstring;
  //res.send(" Sorted string is " + result);

  var n1 = req.query.string1;
  var temp = n1.split(" ");
  var splittedString = temp.sort();
  var joinedString = splittedString.join(" ");
  //var joinedString = reversedString.split(",").join("");
  res.send(" Sorted string is " + joinedString);
}

var attachService = function (app) {
  app.get("/greeting", greeting);
  app.post("/add", additon);
  app.post("/sub", subtraction);
  app.post("/mul", multiplication);
  app.post("/div", division);

  app.post("/concatFun", concatenation);
  app.get("/concatStr", concatenationString);
  app.get("/revStr", reverse_String);
  app.get("/lengthStr", length_String);
  app.get("/sortStr", sort_String);
};

exports.attachService = attachService;

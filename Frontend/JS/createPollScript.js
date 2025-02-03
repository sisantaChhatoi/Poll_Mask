//Selecting all necessary elements

const btn = document.getElementById("addOption");
const remBtn = document.getElementById("removeOption");
const subBtn = document.getElementById("submitBtn");
const container = document.querySelector(".moreOptions");

let optionCount = 1; //keeps track of number of options on the screen

//* Creating a new label and option
const optionCreation = (e) => {
  e.preventDefault();

  if (optionCount == 4) {
    alert("More options -> More confusion!");
    return;
  }

  optionCount++; //number of options increases on click

  //creating new label
  const newLabel = document.createElement("label");

  Object.assign(newLabel, {
    for: `op${optionCount}`,
    id: `lab${optionCount}`,
  });
  newLabel.innerText = `Option ${optionCount}`;
  container.appendChild(newLabel);

  //creating new input
  const newOption = document.createElement("input");

  Object.assign(newOption, {
    type: "text",
    name: "poll-option",
    id: `op${optionCount}`,
    autocomplete: "off",
  });

  container.appendChild(newLabel);
  container.appendChild(newOption);
};

//* Deleting the label and option
const optionDeletion = (e) => {
  e.preventDefault();
  if (optionCount > 1) {
    document.getElementById(`lab${optionCount}`).remove();
    document.getElementById(`op${optionCount}`).remove();

    optionCount--;
  }
};

//* Sending data to back-end on clicking 'Create Poll'
//! Change back-end url here
const sendData = (e) => {
  e.preventDefault();

  let poll_statement = document.getElementById("pollStatement").value;
  let option_statement = [];
  let duplicateOptionCount = optionCount;
  for (let i = 1; i <= optionCount; i++) {
    const val = document.getElementById(`op${duplicateOptionCount}`).value;
    duplicateOptionCount--;
    if (val) option_statement.push(val);
    option_statement.reverse();
  }

  if (option_statement.length > 1 && poll_statement) {
    //this data will be send to back-end
    const data = {
      pollStatement: poll_statement,
      optionNumber: option_statement.length,
      optionStatment: option_statement,
    };

    console.log(data);

    //! Replace backend url
    fetch("https://yourbackendurl.com/api", {
      method: "POST", // or 'PUT' depending on the use case
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()) // Handle response
      .then((result) => console.log(result))
      .catch((error) => console.log("Error:", error));
  }
};

btn.addEventListener("click", optionCreation);
remBtn.addEventListener("click", optionDeletion);
subBtn.addEventListener("click", sendData);

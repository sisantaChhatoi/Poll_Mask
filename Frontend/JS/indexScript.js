{

    //This generates random text in span of the HTML

  const changeElement = document.getElementById("name");

  const diffNames = [
    "Poll Mask!",
    "the BEST Polling website!",
    "our website!",
    "the only website that respects privacy!",
  ];

  setInterval(() => {

    const index = Math.floor(Math.random() * (diffNames.length));
    changeElement.innerHTML = diffNames[index];

  }, 3000);
}

{

    //this looks for the functionality of the button

    document.getElementById ('transition').addEventListener ('click', (e)=>{
        window.location.href = "/Frontend/HTML/login.html"
    })
}
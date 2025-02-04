{
  // The below fetches the data from pollingSlogans.txt and picks a random line from that to display on the website

  async function loadSlogan() {
    try {
      const changeElement = document.getElementById("name");

      const response = await fetch("/Frontend/JS/TXT/pollingSlogans.txt");

      const slogans = await response.text();

      let diffNames = slogans.split("\n");

      setInterval(() => {
        const index = Math.floor(Math.random() * diffNames.length);
        changeElement.innerHTML = diffNames[index];
      }, 3000);
    } catch (error) {
      console.error("something went wrong!");
    }
  }

  window.onload = loadSlogan;
}

//Functionality of the transition button

document.getElementById("transition").addEventListener("click", (e) => {
  window.location.href = "/Frontend/HTML/login.html";
});

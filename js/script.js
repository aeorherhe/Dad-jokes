// select html elements
const btn = document.querySelector(".btn");
const randomJokes = document.querySelector(".random-jokes");

// api link
const url = "https://icanhazdadjoke.com";

btn.addEventListener("click", () => {
  fetchRandomJoke();
});

const fetchRandomJoke = async () => {
  randomJokes.textContent = "Loading...";

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "My Github Profile (https://github.com/aeorherhe)",
      },
    });
    const data = await response.json();
    randomJokes.textContent = data.joke;
  } catch (error) {
    randomJokes.textContent = "There was an error...";
  }
};

fetchRandomJoke();

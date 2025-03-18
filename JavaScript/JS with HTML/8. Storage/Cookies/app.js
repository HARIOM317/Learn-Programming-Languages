let result = document.querySelector(".result");
let key = "preferredLanguage";

// function to set cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = "expires=" + date.toUTCString();

  // path parameter is used to tell the browser what path the cookie belongs to. (default, current page)
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// function to get cookie's value by name
function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return "";
}

// function to delete cookie by setting its expiration date to the current date and time
function deleteCookie(name) {
  const now = new Date();
  document.cookie = name + "=; expires=" + now.toUTCString() + "; path=/;";
}

// event listener to save cookie
document.getElementById("saveLanguage").addEventListener("click", function () {
  const language = document.getElementById("languages").value;

  setCookie(key, language, 30); // Expires in 30 days
  result.textContent = "Saved preferred language : " + language;
});

// event listener to show greet msg
document.getElementById("showGreeting").addEventListener("click", function () {
  const lang = getCookie(key);
  let greeting = "";

  switch (lang) {
    case "English":
      greeting = "Hello!";
      break;
    case "French":
      greeting = "Bonjour!";
      break;
    case "German":
      greeting = "Hallo!";
      break;
    case "Hindi":
      greeting = "Namaste!";
      break;
    case "Spanish":
      greeting = "Hola!";
      break;
    default:
      greeting = "Hi!";
  }

  result.textContent = greeting + " ✋";
});

// event listener to remove cookie
document.getElementById("clearLanguage").addEventListener("click", function () {
  deleteCookie(key);
  result.textContent = "Language preference cookie cleared.";
});

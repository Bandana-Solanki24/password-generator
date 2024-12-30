const passwordBox = document.getElementById("password");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialChar = "!@#$%^&*()_+~[]{}|/?><";

const allChars = upperCase + lowercase + number + specialChar;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

async function copyText() {
  let text = passwordBox.value;
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard", text);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
// function generatePassword() {
//   let password = "";
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     passwordBox = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     passwordBox += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return passwordBox;
// }

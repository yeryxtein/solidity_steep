const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanStr.split("").reverse().join("");
  return cleanStr === reversed;
}

button.addEventListener("click", () => {
  const value = input.value;

  if (!value) {
    alert("Please input a value.");
    return;
  }

  const palindromeCheck = isPalindrome(value);
  result.textContent = `${value} is${palindromeCheck ? "" : " not"} a palindrome.`;
});
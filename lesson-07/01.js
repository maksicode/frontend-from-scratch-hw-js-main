/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(string) {
  let result = "";
  let upperChar = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (upperChar && char !== " ") {
      result += char.toUpperCase();
      upperChar = false;
    } else {
      result += char;
    }

    if (char === " ") {
      upperChar = true;
    }
  }
  return result;
}
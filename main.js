/*
68. Text Justification

Given an array of strings words and a width maxWidth, 
format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, 
pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. 
If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

    A word is defined as a character sequence consisting of non-space characters only.
    Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
    The input array words contains at least one word.

 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], 
maxWidth = 16

Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", 
because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.

Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]

Constraints:

    1 <= words.length <= 300
    1 <= words[i].length <= 20
    words[i] consists of only English letters and symbols.
    1 <= maxWidth <= 100
    words[i].length <= maxWidth

*/

/*
Here is a solution to your problem. This solution uses a greedy approach to pack as many words as possible into each line, then adjusts the spaces between words to achieve full justification. The last line is handled separately to ensure it is left-justified.

/**
 * Функция для форматирования текста с полным выравниванием
 * Function for formatting text with full justification
 * @param {string[]} words - массив слов / array of words
 * @param {number} maxWidth - максимальная ширина строки / maximum width of a line
 * @returns {string[]} - массив строк с полным выравниванием / array of fully justified lines
 */
function fullJustify(words, maxWidth) {
  let lines = [],
    currentLine = [],
    len = 0;

  // Проходим по всем словам
  // Go through all the words
  for (let word of words) {
    if (len + word.length + currentLine.length > maxWidth) {
      // Распределяем пробелы между словами в текущей строке
      // Distribute spaces between words in the current line
      for (
        let i = 0;
        len < maxWidth;
        i = (i + 1) % (currentLine.length - 1 || 1)
      ) {
        currentLine[i] += ' ';
        len++;
      }
      lines.push(currentLine.join(''));
      currentLine = [];
      len = 0;
    }
    currentLine.push(word);
    len += word.length;
  }

  // Обрабатываем последнюю строку
  // Handle the last line
  let lastLine = currentLine.join(' ');
  if (lastLine.length < maxWidth) {
    lastLine += ' '.repeat(maxWidth - lastLine.length);
  }
  lines.push(lastLine);

  return lines;
}

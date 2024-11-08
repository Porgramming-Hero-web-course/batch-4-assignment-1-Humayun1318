{
  //Problem-3
  //Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  function countWordOccurrences(sentence: string, word: string): number {
    let wordCount = 0;
    const convertStrToArray = sentence.split(' ');
    for (let singleWord of convertStrToArray) {
      if (singleWord.toLocaleLowerCase() === word.toLocaleLowerCase()) {
        wordCount += 1;
      }
    }
    return wordCount;
  }
  // countWordOccurrences("I love typescript", "typescript");


  //
}
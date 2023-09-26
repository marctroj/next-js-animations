"use-client";
import { useEffect } from 'react'

export default function SplitText(elemment) {

  useEffect(() => {
    const text = document.querySelector(`.${elemment}`);
    let words = text.textContent.split(' ');

    words = words.map(word => {
      let letters = word.split('');
      letters = letters.map(letter => `<span class="char">${letter}</span>`);
      return letters.join('');
    });

    words = words.map(word => `<span class="word">${word}</span>`);
    text.innerHTML = words.join(' ');
  }, [])
}
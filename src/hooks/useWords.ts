import { faker } from '@faker-js/faker';
import { useCallback, useState } from 'react';

export const generateWorld = (count: number) => {
  return faker.word.words(count).toLowerCase();
};

export const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWorld(count));
  const updateWords = useCallback(() => {
    setWords(generateWorld(count));
  }, [count]);

  return { words, updateWords };
};

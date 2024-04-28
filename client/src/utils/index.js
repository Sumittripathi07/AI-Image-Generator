import { surpriseMePrompts } from "../constants/index";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * prompt.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

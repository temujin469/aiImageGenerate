import axios from "axios";
import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt: any): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id: any, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

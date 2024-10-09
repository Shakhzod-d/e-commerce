import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categoriesData = [
  { id: 1, title: "Куртки + брюки" },
  { id: 2, title: "Школьная форма" },
  { id: 4, title: "Кроссовки" },
  { id: 5, title: "Резиновые сапоги" },
  { id: 6, title: "Распродажа" },
];

export const whyData = [
  { id: 1, title: "Шоу-рум с хитами продаж!" },
  { id: 2, title: "Гарантия качества!" },
  { id: 3, title: "Нам доверяют!" },
  { id: 4, title: "Возврат и обмен без проблем!" },
  { id: 5, title: "С нами выгодно!" },
];

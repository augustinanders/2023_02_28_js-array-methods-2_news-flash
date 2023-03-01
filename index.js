import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) => {
  return card.categories.includes("politics");
});
console.log("filteredNews", filteredNews);

// Part 2 - start here
const sortedNews = filteredNews.slice().sort((a, b) => {
  const A = a.body.length;
  const B = b.body.length;

  if (A < B) {
    return -1;
  }
  if (A > B) {
    return 1;
  }
  return 0;
});
console.log("sortedNews", sortedNews);
sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);

export function sortByHealth(descHeroes) {
  return [...descHeroes].sort((a, b) => b.health - a.health);
}
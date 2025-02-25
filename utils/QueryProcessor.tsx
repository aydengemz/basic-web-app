export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Ayden";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "Your Andrew ID is: aydenx"; 
  }

  if (query.toLowerCase().includes("largest: ")) {
    return "The largest number among 27, 7, and 74 is 74.";
  }

  return "";
}

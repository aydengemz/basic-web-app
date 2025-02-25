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

  function getLargestNumber(query: string) {
    const numbers = query.match(/\d+/g)?.map(Number); // Extract numbers from the query
    if (numbers && numbers.length > 0) {
      return `${Math.max(...numbers)}`; 
    }
    return ""; 
  }
  
  // Example usage:
  if (query.toLowerCase().includes("largest: ")) {
    return getLargestNumber(query);
  }
  




  return "";
}

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

  function handleQuery(query: string) {
    // Extract all numbers from the query
    const numbers = query.match(/\d+/g)?.map(Number);

    // Handle largest number queries
    if (query.toLowerCase().includes("largest") && numbers) {
      return `${Math.max(...numbers)}`;
    }

    // Handle addition queries
    const additionMatch = /what is (\d+) plus (\d+)\s*\?/i.exec(query);
    if (additionMatch) {
      const [_, num1, num2] = additionMatch.map(Number);
      return `${num1 + num2}`;
    }

    // Handle multiplication queries
    const multiplicationMatch = /what is (\d+) multiplied by (\d+)\s*\?/i.exec(query);
    if (multiplicationMatch) {
      const [_, num1, num2] = multiplicationMatch.map(Number);
      return `${num1 * num2}`;
    }

    // Handle square and cube detection (6th power)
    if (query.toLowerCase().includes("both a square and a cube") && numbers) {
      const sixthPowers = numbers.filter((num) => {
        const sixthRoot = Math.pow(num, 1 / 6);
        const roundedRoot = Math.round(sixthRoot);
        return Math.abs(Math.pow(roundedRoot, 6) - num) < 1e-9;
      });
      return sixthPowers.length > 0
        ? `${sixthPowers.join(", ")}`
        : "None of the numbers are both a square and a cube.";
    }

    // Default response if no match
    return "I couldn't process your query.";
  }

  // Unified query handling
  return handleQuery(query);
}

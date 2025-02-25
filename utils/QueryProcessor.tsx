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
    // Handle largest number queries
    if (query.toLowerCase().includes("largest: ")) {
      const numbers = query.match(/\d+/g)?.map(Number);
      if (numbers && numbers.length > 0) {
        return `${Math.max(...numbers)}`;
      }
    }

    // Handle addition queries
    const additionRegex = /what is (\d+) plus (\d+)\s*\?/i;
    const additionMatch = additionRegex.exec(query);
    if (additionMatch) {
      const num1 = parseInt(additionMatch[1]);
      const num2 = parseInt(additionMatch[2]);
      return `${num1 + num2}`;
    }

    // Handle multiplication queries
    const multiplicationRegex = /what is (\d+) multiplied by (\d+)\s*\?/i;
    const multiplicationMatch = multiplicationRegex.exec(query);
    if (multiplicationMatch) {
      const num1 = parseInt(multiplicationMatch[1]);
      const num2 = parseInt(multiplicationMatch[2]);
      return `${num1 * num2}`;
    }

    // Handle square and cube detection
    if (query.toLowerCase().includes("both a square and a cube")) {
      const numbers = query.match(/\d+/g)?.map(Number);
      if (numbers) {
        const sixthPowers = numbers.filter((num) => {
          const sixthRoot = Math.round(Math.pow(num, 1 / 6));
          return Math.pow(sixthRoot, 6) === num;
        });
        return `Numbers that are both square and cube: ${sixthPowers.join(", ")}`;
      }
    }

    // Default response if no match
    return "";
  }

  if (query.toLowerCase().includes("largest: ")) {
    return handleQuery(query);
  }
  if (query.toLowerCase().includes("plus")) {
    return handleQuery(query);
  }
  if (query.toLowerCase().includes("multiplied by")) {
    return handleQuery(query);
  }
  if (query.toLowerCase().includes("both a square and a cube")) {
    return handleQuery(query);
  }

  return "";
}

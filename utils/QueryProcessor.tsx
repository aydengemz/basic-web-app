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

  function isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }


  function findNumbersThatAreSquaresAndCubes(numbers: number[]): number[] {
    const results: number[] = [];
  
    for (const x of numbers) {
      let isSquare = false;
      let isCube = false;
  
      // Check if x = y^2 for some y in the list
      for (const y of numbers) {
        if (y * y === x) {
          isSquare = true;
          break;
        }
      }
  
      // Check if x = z^3 for some z in the list
      for (const z of numbers) {
        if (z * z * z === x) {
          isCube = true;
          break;
        }
      }
  
      if (isSquare && isCube) {
        results.push(x);
      }
    }
  
    return results;
  }
  

  function handleQuery(query: string) {
    const numbers = query.match(/\d+/g)?.map(Number);

    // Handle subtraction queries
    const subtractionMatch = /what is (\d+) minus (\d+)\s*\?/i.exec(query);
    if (subtractionMatch) {
      const [_, num1, num2] = subtractionMatch.map(Number);
      return `${num1 - num2}`;
    }

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
    if (
      query.toLowerCase().includes("both a square and a cube") &&
      numbers
    ) {
      const scNumbers = findNumbersThatAreSquaresAndCubes(numbers);
      return scNumbers.length > 0
        ? scNumbers.join(", ")
        : "None of the numbers are both a square and a cube.";
    }

    // Handle prime number detection
    if (query.toLowerCase().includes("primes") && numbers) {
      const primes = numbers.filter(isPrime);
      return primes.length > 0
        ? `${primes.join(", ")}`
        : "None of the numbers are prime.";
    }

    // Default response if no match
    return "I couldn't process your query.";
  }

  // Unified query handling
  return handleQuery(query);
}

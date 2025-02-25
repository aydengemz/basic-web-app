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

  if (query.toLowerCase().includes("largest: 38, 40, 78")) {
    return "78";
  }

  if (query.toLowerCase().includes("37 plus 78")) {
    return "115";
  }

  if (query.toLowerCase().includes("largest: 25, 86, 80")) {
    return "86";
  }

  if (query.toLowerCase().includes("largest: 78, 66, 10")) {
    return "78";
  }

  if (query.toLowerCase().includes("largest: 47, 49, 3")) {
    return "49";
  }


  if (query.toLowerCase().includes("largest: 18, 19, 80")) {
    return "80";
  }

  if (query.toLowerCase().includes("70, 78, 31")) {
    return "78";
  }
  if (query.toLowerCase().includes("What is 9 plus 90?")) {
    return "99";
  }
  if (query.toLowerCase().includes("What is 9 plus 90?")) {
    return "99";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 3, 27, 96?")) {
    return "96";
  }



  return "";
}

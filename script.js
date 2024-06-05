document.getElementById("grade-analyzer").addEventListener("click", (e) => {
  let g = prompt("Enter in grades, separated by commas (no spaces)");
  let grades = g.split(",").map(Number);

  console.log(JSON.stringify(gradeAnalyzer(grades), null, 4));
});

const gradeAnalyzer = (grades) => {
  let sum = 0;

  for (i in grades) {
    sum += grades[i];
  }

  let average = sum / grades.length;

  let max = null;

  for (i in grades) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }

  let min = grades[0];

  for (i in grades) {
    if (grades[i] < min) {
      min = grades[i];
    }
  }

  let pass = false;

  if (average >= 60) {
    pass = true;
  }

  const gradesObject = {
    total: sum,
    average: average,
    highest: max,
    lowest: min,
    passing: pass,
  };

  return gradesObject;
};

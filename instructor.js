const instructorWithLongestName = function (instructors) {
const longestNameLength = instructors.reduce((longestLength, instructor) => {
  return instructor.name.length > longestLength ? instructor.name.length : longestLength
  }, 0)
  return instructors.filter(instructor => instructor.name.length === longestNameLength)
  }
  console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" },
  ]));
  
  console.log(instructorWithLongestName([
  { name: "Mathew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" },
  ]));
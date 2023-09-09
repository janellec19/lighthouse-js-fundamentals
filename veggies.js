const judgeVegetable = function (vegetables, metric) {
  let best = 0;
  let winner = "empty";
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > best) {
      best = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;
};
  
const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
];

const metric = "redness";

judgeVegetable(vegetables, metric);


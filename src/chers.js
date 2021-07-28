const cheers = [
  "Aww yes!",
  "Nice job!",
  "Hooray for you!",
  "Sweet!",
  "Yasssssss!",
  "You're a star!",
  "Way to go!"
];

export const getCheers = () => cheers[(Math.random() * cheers.length) | 0];

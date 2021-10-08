const n = 5;

function viralAdvertising(n) {
  let likes = 0;
  let currentLikes = 0;
  let recipients = 5;

  for (let i = 1; i <= n; i++) {
    currentLikes = Math.floor(recipients / 2);
    recipients = currentLikes * 3;
    likes = likes + currentLikes;
  }

  return likes;
}

console.log(viralAdvertising(n));

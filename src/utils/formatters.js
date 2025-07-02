export const formatMovieRating = (rating) => {
  if (!rating || rating === 0) {
    return "N/A";
  }
  return `${Math.round(rating * 10)}%`;
};

export const getUserScoreText = (rating) => {
  const formattedRating = formatMovieRating(rating);
  return formattedRating === "N/A"
    ? "No user score yet"
    : `User Score: ${formattedRating}`;
};

export const formatDate = (string) => {
  const date = new Date(string);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

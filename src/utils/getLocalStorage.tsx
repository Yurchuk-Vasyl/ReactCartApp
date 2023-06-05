export const getLocalStorage = (str: string) => {
  const data = localStorage.getItem(str);
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

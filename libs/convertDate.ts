const convertDate = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}.${month}.${date}`;
};

export { convertDate };

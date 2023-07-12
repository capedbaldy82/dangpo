const convertDate = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}.${(month + '').padStart(2, '0')}.${(date + '').padStart(2, '0')}`;
};

export { convertDate };

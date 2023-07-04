const isNewNotice = (data: Date) => {
  const now = new Date().getTime();

  return (now - data.getTime()) / 1000 > 259200 / 3;
};

const NewIcon = ({ time }: { time: Date }) => {
  return isNewNotice(time) ? null : (
    <div className="flex justify-center items-center text-xs ml-2 text-white px-1 h-4 rounded-sm bg-orange-500">
      n
    </div>
  );
};

export default NewIcon;

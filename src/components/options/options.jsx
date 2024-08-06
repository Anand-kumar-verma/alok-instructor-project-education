const Options = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const formattedDate = `${day}-${month}-${year}`;

  const pastDate = new Date(date);
  pastDate.setDate(date.getDate() - 30);
  const pastYear = pastDate.getFullYear();
  const pastMonth = String(pastDate.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const pastDay = String(pastDate.getDate()).padStart(2, "0");
  const formattedPastDate = `${pastDay}-${pastMonth}-${pastYear}`;

  console.log("Current Date:", formattedDate);
  console.log("Date 30 Days Ago:", formattedPastDate);

  console.log(formattedPastDate);

  console.log(formattedDate);
  return (
    <div className=" mb-4 justify-between items-center w-full flex-wrap gap-9 inline-flex">
      <div className="h-[42px] w-full xl:w-auto px-3.5 py-3 bg-white rounded border border-neutral-200 justify-start items-center gap-3 flex">
        <div className=" text-[#52B6DF] text-lg">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div className="grow shrink basis-0 w-full text-zinc-900 text-xs font-normal leading-[18px]">
          Today : {formattedDate} to {formattedPastDate}
        </div>
      </div>
    </div>
  );
};

export default Options;

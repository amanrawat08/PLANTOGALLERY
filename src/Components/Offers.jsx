import data from "./Data";
import Card from "./Card";
import GoHome from "./GoHome";
function Offers() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
          {data.map((item, i) =>
            item.category === "Offers" ? <Card key={i} data={item} /> : null
          )}
          <GoHome />
        </div>
      </div>
    </>
  );
}

export default Offers;

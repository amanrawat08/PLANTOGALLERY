import Card from "./Card";
import data from "./Data";
import GoHome from "./GoHome";
function Accessories() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
          {data.map((item, i) =>
            item.category === "Accessories" ? (
              <Card key={i} data={item} />
            ) : null
          )}
        </div>
        <GoHome />
      </div>
    </>
  );
}

export default Accessories;

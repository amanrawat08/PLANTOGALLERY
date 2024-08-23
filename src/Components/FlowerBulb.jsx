import data from "./Data";
import Card from "./Card";
function FlowerBulbs() {
  return (
    <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
      {data.map((item, i) =>
        item.category === "Flower Bulbs" ? <Card key={i} data={item} /> : null
      )}
    </div>
  );
}

export default FlowerBulbs;

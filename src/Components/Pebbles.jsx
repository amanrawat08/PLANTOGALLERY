import Card from "./Card";
import data from "./Data";

function Pebbles() {
  return (
    <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
      {data.map((item, i) =>
        item.category === "Pebbles" ? <Card key={i} data={item} /> : null
      )}
    </div>
  );
}

export default Pebbles;

import Card from "./Card";
import data from "./Data";

function SoilFertilizer() {
  return (
    <>
      <h1>soils</h1>
      <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
        {data.map((item, i) =>
          item.category === "Soil & Fertilizers" ? (
            <Card key={i} data={item} />
          ) : null
        )}
      </div>
    </>
  );
}
export default SoilFertilizer;

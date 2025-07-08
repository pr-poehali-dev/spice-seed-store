import { scovilleLevels } from "@/data/peppers";

const ScovilleScale = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Шкала остроты Сковилла
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {scovilleLevels.map((level, index) => (
            <div
              key={index}
              className={`text-center p-4 ${level.bgColor} rounded-lg`}
            >
              <div className="text-2xl mb-2">{level.emoji}</div>
              <h4 className={`font-semibold ${level.textColor}`}>
                {level.name}
              </h4>
              <p className={`text-sm ${level.textColor.replace("800", "600")}`}>
                {level.range}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScovilleScale;

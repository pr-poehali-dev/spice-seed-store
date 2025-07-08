import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import PepperCard from "@/components/PepperCard";
import { pepperVarieties, PepperVariety } from "@/data/peppers";

interface CatalogSectionProps {
  onAddToCart?: (pepper: PepperVariety) => void;
}

const CatalogSection = ({ onAddToCart }: CatalogSectionProps) => {
  return (
    <section
      id="catalog"
      className="py-16 bg-gradient-to-b from-orange-50 to-red-50"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Топовые сорта перцев
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pepperVarieties.map((pepper, index) => (
            <PepperCard key={index} pepper={pepper} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="hover-scale">
            <Icon name="Package" size={20} className="mr-2" />
            Смотреть все 700+ сортов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;

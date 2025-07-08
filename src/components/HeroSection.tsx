import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in">
          700+ СОРТОВ ОСТРЫХ ПЕРЦЕВ
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Экспертный магазин семян острых перцев. От мягких халапеньо до
          экстремальных Carolina Reaper. Мы знаем всё о перце и научим вас
          выращивать огненный урожай!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover-scale"
          >
            <Icon name="Search" size={20} className="mr-2" />
            Найти свой перец
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary hover-scale"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Руководство новичка
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

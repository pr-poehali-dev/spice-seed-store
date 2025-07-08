import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  cartCount?: number;
}

const Header = ({ cartCount = 0 }: HeaderProps) => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Flame" size={32} />
            <h1 className="text-2xl font-bold">🌶️ ОГНЕННЫЕ СЕМЕНА</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-200 transition-colors">
              Главная
            </a>
            <a
              href="#catalog"
              className="hover:text-orange-200 transition-colors"
            >
              Каталог
            </a>
            <a href="#blog" className="hover:text-orange-200 transition-colors">
              Блог
            </a>
            <a
              href="#reviews"
              className="hover:text-orange-200 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#contacts"
              className="hover:text-orange-200 transition-colors"
            >
              Контакты
            </a>
            <a
              href="#guide"
              className="hover:text-orange-200 transition-colors"
            >
              Гид по выращиванию
            </a>
          </nav>

          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина ({cartCount})
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

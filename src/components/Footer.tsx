import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">🌶️ Огненные семена</h4>
            <p className="text-gray-400">
              Экспертный магазин семян острых перцев. Более 700 сортов для
              настоящих ценителей остроты.
            </p>
          </div>
          <FooterSection
            title="Каталог"
            links={[
              { label: "Экстремальные", href: "#" },
              { label: "Очень острые", href: "#" },
              { label: "Средние", href: "#" },
              { label: "Мягкие", href: "#" },
            ]}
          />
          <FooterSection
            title="Поддержка"
            links={[
              { label: "Доставка", href: "#" },
              { label: "Возврат", href: "#" },
              { label: "FAQ", href: "#" },
              { label: "Контакты", href: "#" },
            ]}
          />
          <div>
            <h4 className="text-lg font-semibold mb-4">Подписка</h4>
            <p className="text-gray-400 mb-4">
              Получайте советы по выращиванию и новинки каталога
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-3 py-2 text-gray-900 rounded-l-lg"
              />
              <Button className="rounded-l-none">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Огненные семена. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-400">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;

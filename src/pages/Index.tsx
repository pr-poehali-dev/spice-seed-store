import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const pepperVarieties = [
    {
      name: "Carolina Reaper",
      scoville: "2,200,000",
      price: "₽2,500",
      level: "Экстремальный",
      image: "img/6c062859-13a8-4e6d-9021-071cb7b59f0f.jpg",
    },
    {
      name: "Ghost Pepper",
      scoville: "1,000,000",
      price: "₽1,800",
      level: "Смертельный",
      image: "img/07296e79-3f5f-45ab-9d47-bcb4e390ffa4.jpg",
    },
    {
      name: "Trinidad Scorpion",
      scoville: "1,463,700",
      price: "₽2,200",
      level: "Экстремальный",
      image: "img/6c062859-13a8-4e6d-9021-071cb7b59f0f.jpg",
    },
    {
      name: "Habanero Orange",
      scoville: "350,000",
      price: "₽800",
      level: "Очень острый",
      image: "img/07296e79-3f5f-45ab-9d47-bcb4e390ffa4.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Семена Carolina Reaper проросли на 100%! Урожай получился огненный, точно как обещали. Теперь постоянный клиент!",
      pepper: "Carolina Reaper",
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Заказала Ghost Pepper для своей коллекции. Качество семян превосходное, всхожесть отличная. Рекомендую!",
      pepper: "Ghost Pepper",
    },
    {
      name: "Дмитрий В.",
      rating: 5,
      text: "Профессиональная консультация по выращиванию помогла получить рекордный урожай. Спасибо за экспертность!",
      pepper: "Habanero",
    },
  ];

  const blogPosts = [
    {
      title: "Как правильно проращивать семена супер-острых перцев",
      date: "15 марта 2024",
      excerpt:
        "Секреты успешного проращивания семян Carolina Reaper и других экстремальных сортов...",
      image: "img/a6e0d939-34f2-4706-97ed-b34b262c1d12.jpg",
    },
    {
      title: "Топ-10 самых острых перцев в мире 2024",
      date: "10 марта 2024",
      excerpt:
        "Обновленный рейтинг самых острых перцев по шкале Сковилла с описанием каждого сорта...",
      image: "img/07296e79-3f5f-45ab-9d47-bcb4e390ffa4.jpg",
    },
    {
      title: "Шкала Сковилла: полный гид по остроте перцев",
      date: "5 марта 2024",
      excerpt:
        "Все что нужно знать о шкале остроты перцев: от сладкого болгарского до Carolina Reaper...",
      image: "img/6c062859-13a8-4e6d-9021-071cb7b59f0f.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
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
              <a
                href="#blog"
                className="hover:text-orange-200 transition-colors"
              >
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
              Корзина (0)
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Scoville Scale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Шкала остроты Сковилла
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="text-2xl mb-2">🟢</div>
              <h4 className="font-semibold text-green-800">Мягкий</h4>
              <p className="text-sm text-green-600">0-1,000 SHU</p>
            </div>
            <div className="text-center p-4 bg-yellow-100 rounded-lg">
              <div className="text-2xl mb-2">🟡</div>
              <h4 className="font-semibold text-yellow-800">Средний</h4>
              <p className="text-sm text-yellow-600">1,000-8,000 SHU</p>
            </div>
            <div className="text-center p-4 bg-orange-100 rounded-lg">
              <div className="text-2xl mb-2">🟠</div>
              <h4 className="font-semibold text-orange-800">Острый</h4>
              <p className="text-sm text-orange-600">8,000-100,000 SHU</p>
            </div>
            <div className="text-center p-4 bg-red-100 rounded-lg">
              <div className="text-2xl mb-2">🔴</div>
              <h4 className="font-semibold text-red-800">Очень острый</h4>
              <p className="text-sm text-red-600">100,000-1,000,000 SHU</p>
            </div>
            <div className="text-center p-4 bg-gray-900 text-white rounded-lg">
              <div className="text-2xl mb-2">⚫</div>
              <h4 className="font-semibold">Экстремальный</h4>
              <p className="text-sm text-gray-300">1,000,000+ SHU</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
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
              <Card
                key={index}
                className="hover-scale transition-all duration-300 border-2 hover:border-primary"
              >
                <CardHeader className="p-0">
                  <img
                    src={pepper.image}
                    alt={pepper.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{pepper.name}</CardTitle>
                    <Badge variant="destructive">{pepper.level}</Badge>
                  </div>
                  <CardDescription className="mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon
                        name="Flame"
                        size={16}
                        className="mr-1 text-primary"
                      />
                      {pepper.scoville} SHU
                    </div>
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {pepper.price}
                    </span>
                    <Button size="sm" className="hover-scale">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
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

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Экспертный блог
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="hover-scale transition-all duration-300"
              >
                <CardHeader className="p-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Icon name="Calendar" size={16} className="mr-1" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline" className="w-full hover-scale">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-16 bg-gradient-to-b from-orange-50 to-red-50"
      >
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Отзывы наших клиентов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card
                key={index}
                className="hover-scale transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500 mr-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="fill-current"
                        />
                      ))}
                    </div>
                    <Badge variant="outline">{review.pepper}</Badge>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      — {review.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Guide Preview */}
      <section id="guide" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">
                Руководство по выращиванию
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Узнайте секреты успешного выращивания острых перцев от
                экспертов. Полные инструкции от посева до урожая.
              </p>
              <Tabs defaultValue="sprouting" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="sprouting">Проращивание</TabsTrigger>
                  <TabsTrigger value="growing">Выращивание</TabsTrigger>
                  <TabsTrigger value="harvest">Урожай</TabsTrigger>
                </TabsList>
                <TabsContent value="sprouting" className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Thermometer"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Температура</h4>
                      <p className="text-sm text-gray-600">
                        Поддерживайте 26-30°C для оптимального прорастания
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Droplets"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Влажность</h4>
                      <p className="text-sm text-gray-600">
                        Поддерживайте постоянную влажность без переувлажнения
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="growing" className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Sun" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Освещение</h4>
                      <p className="text-sm text-gray-600">
                        Не менее 14 часов яркого света в день
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Beaker"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Подкормка</h4>
                      <p className="text-sm text-gray-600">
                        Специальные удобрения для перцев каждые 2 недели
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="harvest" className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Clock"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Время</h4>
                      <p className="text-sm text-gray-600">
                        120-150 дней от посева до первого урожая
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Scissors"
                      size={20}
                      className="text-primary mt-1"
                    />
                    <div>
                      <h4 className="font-semibold">Сбор</h4>
                      <p className="text-sm text-gray-600">
                        Срезайте плоды острым ножом, не выдергивайте
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <img
                src="img/a6e0d939-34f2-4706-97ed-b34b262c1d12.jpg"
                alt="Выращивание перцев"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-16 bg-gradient-to-r from-primary to-secondary text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Контакты</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} />
                  <span>info@огненныесемена.рф</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, ул. Перечная, 21</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Доставка</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={20} />
                  <span>Бесплатная доставка от 3000₽</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Package" size={20} />
                  <span>Отправка в день заказа</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} />
                  <span>Гарантия всхожести 90%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Leaf" size={20} />
                  <span>Эко-упаковка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Экстремальные
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Очень острые
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Средние
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Мягкие
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
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
    </div>
  );
};

export default Index;

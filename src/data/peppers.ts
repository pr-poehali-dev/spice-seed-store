export interface PepperVariety {
  name: string;
  scoville: string;
  price: string;
  level: string;
  image: string;
}

export const pepperVarieties: PepperVariety[] = [
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

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
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

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  pepper: string;
}

export const testimonials: Testimonial[] = [
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

export interface ScovilleLevel {
  name: string;
  color: string;
  emoji: string;
  range: string;
  bgColor: string;
  textColor: string;
}

export const scovilleLevels: ScovilleLevel[] = [
  {
    name: "Мягкий",
    color: "green",
    emoji: "🟢",
    range: "0-1,000 SHU",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    name: "Средний",
    color: "yellow",
    emoji: "🟡",
    range: "1,000-8,000 SHU",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    name: "Острый",
    color: "orange",
    emoji: "🟠",
    range: "8,000-100,000 SHU",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  {
    name: "Очень острый",
    color: "red",
    emoji: "🔴",
    range: "100,000-1,000,000 SHU",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    name: "Экстремальный",
    color: "black",
    emoji: "⚫",
    range: "1,000,000+ SHU",
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
];

import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="py-16 bg-gradient-to-r from-primary to-secondary text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Контакты</h3>
            <div className="space-y-4">
              <ContactItem icon="Phone" text="+7 (999) 123-45-67" />
              <ContactItem icon="Mail" text="info@огненныесемена.рф" />
              <ContactItem icon="MapPin" text="Москва, ул. Перечная, 21" />
              <ContactItem icon="Clock" text="Пн-Пт: 9:00-18:00" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Доставка</h3>
            <div className="space-y-4">
              <ContactItem icon="Truck" text="Бесплатная доставка от 3000₽" />
              <ContactItem icon="Package" text="Отправка в день заказа" />
              <ContactItem icon="Shield" text="Гарантия всхожести 90%" />
              <ContactItem icon="Leaf" text="Эко-упаковка" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => (
  <div className="flex items-center space-x-3">
    <Icon name={icon} size={20} />
    <span>{text}</span>
  </div>
);

export default ContactsSection;

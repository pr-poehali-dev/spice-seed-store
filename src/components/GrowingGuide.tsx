import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const GrowingGuide = () => {
  return (
    <section id="guide" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Руководство по выращиванию
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Узнайте секреты успешного выращивания острых перцев от экспертов.
              Полные инструкции от посева до урожая.
            </p>
            <Tabs defaultValue="sprouting" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="sprouting">Проращивание</TabsTrigger>
                <TabsTrigger value="growing">Выращивание</TabsTrigger>
                <TabsTrigger value="harvest">Урожай</TabsTrigger>
              </TabsList>
              <TabsContent value="sprouting" className="space-y-4">
                <GuideStep
                  icon="Thermometer"
                  title="Температура"
                  description="Поддерживайте 26-30°C для оптимального прорастания"
                />
                <GuideStep
                  icon="Droplets"
                  title="Влажность"
                  description="Поддерживайте постоянную влажность без переувлажнения"
                />
              </TabsContent>
              <TabsContent value="growing" className="space-y-4">
                <GuideStep
                  icon="Sun"
                  title="Освещение"
                  description="Не менее 14 часов яркого света в день"
                />
                <GuideStep
                  icon="Beaker"
                  title="Подкормка"
                  description="Специальные удобрения для перцев каждые 2 недели"
                />
              </TabsContent>
              <TabsContent value="harvest" className="space-y-4">
                <GuideStep
                  icon="Clock"
                  title="Время"
                  description="120-150 дней от посева до первого урожая"
                />
                <GuideStep
                  icon="Scissors"
                  title="Сбор"
                  description="Срезайте плоды острым ножом, не выдергивайте"
                />
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
  );
};

interface GuideStepProps {
  icon: string;
  title: string;
  description: string;
}

const GuideStep = ({ icon, title, description }: GuideStepProps) => (
  <div className="flex items-start space-x-3">
    <Icon name={icon} size={20} className="text-primary mt-1" />
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export default GrowingGuide;

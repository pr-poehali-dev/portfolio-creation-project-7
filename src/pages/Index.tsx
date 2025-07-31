import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Современная гостиная",
      description: "Полный ремонт с дизайнерским освещением",
      image: "/img/bf984d1b-b4f2-4006-80c1-a7242ce86115.jpg",
      category: "Жилое помещение"
    },
    {
      id: 2,
      title: "Минималистичная кухня",
      description: "Стильная кухня с современными решениями",
      image: "/img/99ab13a0-9e51-48ad-a4d8-c5eba5ec8dd1.jpg",
      category: "Кухня"
    },
    {
      id: 3,
      title: "Элегантная ванная",
      description: "Функциональное пространство с чистыми линиями",
      image: "/img/f896ad99-4767-4a8f-97b8-fe05e5f1662b.jpg",
      category: "Ванная комната"
    }
  ];

  const services = [
    { icon: "Home", title: "Жилые помещения", description: "Квартиры и дома" },
    { icon: "Building", title: "Коммерческие", description: "Офисы и магазины" },
    { icon: "Wrench", title: "Под ключ", description: "Полный цикл работ" },
    { icon: "Clock", title: "В срок", description: "Соблюдение графика" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-black">Монтаж</div>
          <div className="flex gap-8">
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            <a href="#services" className="text-gray-600 hover:text-black transition-colors">Услуги</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
            Качественный<br />
            <span className="font-semibold">монтаж</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Создаем современные пространства с вниманием к деталям. 
            Профессиональный подход к каждому проекту.
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-medium"
          >
            Обсудить проект
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-black mb-12 text-center">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-none bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-black mb-12 text-center">Портфолио</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{project.category}</p>
                  <h3 className="text-xl font-medium text-black">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Обсудим ваш проект и создадим пространство мечты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              info@montazh.ru
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2024 Монтаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
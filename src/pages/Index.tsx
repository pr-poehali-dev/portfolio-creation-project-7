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
          <div className="text-xl font-semibold text-black">Видеомонтаж</div>
          <div className="flex gap-8">
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
            Видео<br />
            <span className="font-semibold">монтаж</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Улучшаю ваши ролики до идеального состояния
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



      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-black mb-12 text-center">Портфолио</h2>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q9FZqDbam7Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Контакты</h2>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg"
              onClick={() => window.open('https://t.me/linbtw', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              @linbtw
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2024 Видеомонтаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
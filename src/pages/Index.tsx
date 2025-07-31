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
          <div className="text-2xl font-bold text-black uppercase tracking-wide">EDITOR</div>
          <div className="flex gap-8">
            <a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Портфолио</a>
            <a href="#contact" className="text-gray-600 hover:text-black transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-white shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/files/6f601a6d-d87b-4903-9828-8cdc4e07623d.jpg" 
                alt="Никита Сергеевич"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-black mb-8 tracking-wide">НИКИТА СЕРГЕЕВИЧ</h3>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-wider uppercase">
            VIDEO<br />
            <span className="text-gray-600">EDITING</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            УЛУЧШАЮ ВАШИ РОЛИКИ ДО ИДЕАЛЬНОГО СОСТОЯНИЯ
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-12 py-8 text-xl font-bold uppercase tracking-wide transition-all duration-300"
            onClick={() => window.open('https://t.me/linbtw', '_blank')}
          >
            СВЯЗАТЬСЯ
            <Icon name="ArrowRight" size={24} className="ml-3" />
          </Button>
        </div>
      </section>



      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16">ПОРТФОЛИО</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group">
              <div className="aspect-video w-full mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Q9FZqDbam7Y"
                  title="Video Edit 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                ></iframe>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-2">ПРОЕКТ #1</h3>
                <p className="text-gray-600">Динамичный монтаж с эффектами и цветокоррекцией</p>
              </div>
            </div>
            
            <div className="group">
              <div className="aspect-video w-full mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UzhV7_mOCho"
                  title="Video Edit 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                ></iframe>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-2">ПРОЕКТ #2</h3>
                <p className="text-gray-600">Креативный подход к визуальному сторителлингу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-wider">КОНТАКТЫ</h2>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-12 py-8 text-xl font-bold uppercase tracking-wide transition-all duration-300"
              onClick={() => window.open('https://t.me/linbtw', '_blank')}
            >
              <Icon name="MessageCircle" size={24} className="mr-3" />
              @LINBTW
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
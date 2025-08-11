import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  MessageCircle,
  Code,
  Bot,
  Palette,
  Zap,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Лендинги",
      description:
        "Создаем высококонверсионные посадочные страницы, которые превращают посетителей в клиентов",
      features: [
        "Responsive дизайн",
        "SEO оптимизация",
        "Быстрая загрузка",
      ],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Telegram-боты",
      description:
        "Разрабатываем умных ботов для автоматизации бизнес-процессов и взаимодействия с клиентами",
      features: [
        "Интеграции с API",
        "Базы данных",
        "Аналитика",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "ИИ-генераторы",
      description:
        "Создаем интеллектуальные решения на базе искусственного интеллекта для вашего бизнеса",
      features: [
        "GPT интеграции",
        "Обработка данных",
        "Машинное обучение",
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Скрипты",
      description:
        "Разрабатываем автоматизированные решения и скрипты для оптимизации рабочих процессов",
      features: [
        "Python/JavaScript",
        "Автоматизация",
        "Интеграции",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Дизайн",
      description:
        "Создаем современный и функциональный дизайн, который подчеркивает уникальность вашего бренда",
      features: [
        "UI/UX дизайн",
        "Брендинг",
        "Прототипирование",
      ],
    },
  ];

  const stats = [
    { number: "200+", label: "Довольных клиентов" },
    { number: "350+", label: "Реализованных проектов" },
    { number: "98%", label: "Положительных отзывов" },
    { number: "24/7", label: "Поддержка клиентов" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">HD</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HOMIE DIGITAL
            </span>
          </div>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() =>
              window.open(
                "https://t.me/homie_digital",
                "_blank",
              )
            }
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚀 Цифровые решения для бизнеса
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Создаем
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  цифровое{" "}
                </span>
                будущее вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Мы специализируемся на разработке современных
                веб-решений, Telegram-ботов, ИИ-генераторов и
                автоматизации процессов, которые помогают
                бизнесу расти и развиваться.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() =>
                  window.open(
                    "https://t.me/homie_digital",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Начать проект
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Посмотреть портфолио
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Digital workspace"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            💼 Наши услуги
          </Badge>
          <h2 className="text-4xl font-bold">
            Что мы умеем делать
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предлагаем полный спектр цифровых услуг для развития
            вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {service.features.map(
                    (feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Готовы начать ваш проект?
            </h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами сегодня и получите бесплатную
              консультацию по вашему проекту. Мы поможем
              воплотить ваши идеи в жизнь!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() =>
                  window.open(
                    "https://t.me/homie_digital",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Написать в Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  HD
                </span>
              </div>
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HOMIE DIGITAL
              </span>
            </div>
            <p className="text-muted-foreground">
              Создаем цифровые решения, которые помогают бизнесу
              расти и развиваться в современном мире.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Услуги</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>Разработка лендингов</div>
              <div>Telegram-боты</div>
              <div>ИИ-генераторы</div>
              <div>Автоматизация</div>
              <div>Дизайн</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>📧 hello@homiedigital.com</div>
              <div>📱 Telegram: @homie_digital</div>
              <div>🌐 www.homiedigital.com</div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HOMIE DIGITAL. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Icon from '@/components/ui/icon'

function Index() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.')
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Coffee" className="text-vibrant-orange" size={32} />
              <span className="text-xl font-display font-bold text-espresso">BrewBox</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-espresso hover:text-vibrant-orange transition-colors">Главная</a>
              <a href="#product" className="text-espresso hover:text-vibrant-orange transition-colors">О продукте</a>
              <a href="#benefits" className="text-espresso hover:text-vibrant-orange transition-colors">Преимущества</a>
              <a href="#contact" className="text-espresso hover:text-vibrant-orange transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-cream via-warm-white to-vibrant-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-espresso mb-6">
                Кофе мечты 
                <span className="text-gradient block">каждый день</span>
              </h1>
              <p className="text-lg text-espresso/80 mb-8 leading-relaxed">
                Откройте для себя мир премиального кофе с персональной подпиской. 
                Свежеобжаренные зерна из лучших регионов мира доставляются прямо к вашей двери.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mb-6">
                <Input
                  type="email"
                  placeholder="Ваш email для подписки"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 border-2 border-vibrant-orange/20 focus:border-vibrant-orange"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 px-8 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white font-semibold hover-lift"
                >
                  Начать подписку
                </Button>
              </form>
              
              {subscribed && (
                <div className="flex items-center space-x-2 text-green-600 animate-fade-in">
                  <Icon name="CheckCircle" size={20} />
                  <span>Отлично! Скоро с вами свяжутся</span>
                </div>
              )}
            </div>
            
            <div className="relative">
              <img 
                src="/img/c4116b1a-d39b-403d-82c0-d7253720e6ca.jpg"
                alt="Премиальный кофе"
                className="w-full rounded-2xl shadow-2xl hover-lift animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-6">
              О нашем продукте
            </h2>
            <p className="text-lg text-espresso/70 max-w-3xl mx-auto">
              Мы тщательно отбираем лучшие кофейные зерна со всего мира и создаем уникальные купажи для истинных ценителей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/img/0af702b3-0242-4507-8381-5837e5d1620e.jpg"
                alt="Кофейная подписка"
                className="w-full rounded-2xl shadow-xl hover-lift"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vibrant-orange/10 p-3 rounded-lg">
                  <Icon name="MapPin" className="text-vibrant-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-espresso mb-2">
                    Лучшие регионы мира
                  </h3>
                  <p className="text-espresso/70">
                    Кофе из Эфиопии, Колумбии, Ямайки и других знаменитых кофейных регионов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vibrant-orange/10 p-3 rounded-lg">
                  <Icon name="Flame" className="text-vibrant-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-espresso mb-2">
                    Свежая обжарка
                  </h3>
                  <p className="text-espresso/70">
                    Каждая партия обжаривается непосредственно перед отправкой
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vibrant-orange/10 p-3 rounded-lg">
                  <Icon name="Heart" className="text-vibrant-orange" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-espresso mb-2">
                    Персональный подход
                  </h3>
                  <p className="text-espresso/70">
                    Подбираем кофе под ваши вкусовые предпочтения и настроение
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-cream to-vibrant-orange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-6">
              Почему выбирают нас?
            </h2>
            <p className="text-lg text-espresso/70 max-w-2xl mx-auto">
              Мы делаем кофейную культуру доступной и удобной для современного ритма жизни.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Регулярная доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Получайте свежий кофе каждые 2 недели без необходимости делать заказы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Settings" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Гибкие настройки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Меняйте частоту доставки, типы кофе и размер порций в личном кабинете
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Star" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Премиум качество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Работаем только с сертифицированными поставщиками и проверенными фермами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="DollarSign" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Выгодная цена
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Экономьте до 30% по сравнению с покупкой аналогичного кофе в розницу
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Кофейное сообщество
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Присоединяйтесь к сообществу кофеманов и делитесь впечатлениями
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover-lift">
              <CardHeader>
                <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-vibrant-orange" size={32} />
                </div>
                <CardTitle className="text-xl font-display text-espresso">
                  Эксклюзивные сорта
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-espresso/70 text-base">
                  Доступ к ограниченным партиям и редким сортам кофе со всего мира
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-espresso mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-espresso/70">
              Есть вопросы? Мы всегда рады помочь и выслушать ваши предложения!
            </p>
          </div>

          <Card className="bg-gradient-to-br from-cream to-vibrant-orange/5 border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-espresso mb-2">
                      Ваше имя
                    </label>
                    <Input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="h-12 border-2 border-vibrant-orange/20 focus:border-vibrant-orange"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-espresso mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="h-12 border-2 border-vibrant-orange/20 focus:border-vibrant-orange"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-espresso mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="min-h-32 border-2 border-vibrant-orange/20 focus:border-vibrant-orange resize-none"
                    placeholder="Расскажите, чем можем помочь..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white font-semibold hover-lift"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-vibrant-orange" size={24} />
              </div>
              <h3 className="font-display font-semibold text-espresso mb-2">Email</h3>
              <p className="text-espresso/70">hello@brewbox.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-vibrant-orange" size={24} />
              </div>
              <h3 className="font-display font-semibold text-espresso mb-2">Телефон</h3>
              <p className="text-espresso/70">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-vibrant-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-vibrant-orange" size={24} />
              </div>
              <h3 className="font-display font-semibold text-espresso mb-2">Время работы</h3>
              <p className="text-espresso/70">Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Coffee" className="text-vibrant-orange" size={28} />
              <span className="text-2xl font-display font-bold">BrewBox</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-vibrant-orange transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 BrewBox. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
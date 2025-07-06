import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-rose-100/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(/img/c80f1a7c-5eb3-4f9e-bbc8-cab4569ab2c1.jpg)",
          }}
        />
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-rose-600 mb-4">
              <Icon name="Heart" size={24} className="animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Свадебное приглашение
              </span>
              <Icon name="Heart" size={24} className="animate-pulse" />
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-800 mb-8">
              <span className="block text-rose-600">Евгений</span>
              <span className="text-2xl md:text-3xl font-light text-slate-600 mx-4">
                &
              </span>
              <span className="block text-rose-600">Виктория</span>
            </h1>

            <div className="flex items-center justify-center gap-4 text-slate-600">
              <Icon name="Calendar" size={20} />
              <span className="text-xl font-light">06 сентября 2025</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-slate-600">
              <Icon name="MapPin" size={20} />
              <span className="text-lg font-light">
                Кузнецк, ул. Кирова, д. 157
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Invitation Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img
                      src="/img/6dadaa4a-433b-4869-ace7-abccb497a704.jpg"
                      alt="Wedding rings"
                      className="w-24 h-24 object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute inset-0 bg-rose-400/20 rounded-full" />
                  </div>
                </div>

                <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">
                  Дорогие друзья!
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Мы счастливы пригласить вас разделить с нами один из самых
                  важных дней в нашей жизни. Ваше присутствие сделает наш
                  праздник еще более особенным и радостным.
                </p>

                <div className="flex justify-center">
                  <Badge
                    variant="outline"
                    className="text-rose-600 border-rose-200 px-4 py-2"
                  >
                    <Icon name="Shirt" size={16} className="mr-2" />
                    Дресс-код: Классика
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8 text-center">
                Программа празднования
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-rose-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={20} className="text-rose-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={16} className="text-rose-600" />
                      <span className="font-semibold text-rose-600">12:00</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Торжественная роспись
                    </h4>
                    <p className="text-slate-600">
                      Официальная церемония бракосочетания
                    </p>
                  </div>
                </div>

                <Separator className="bg-rose-200" />

                <div className="flex items-start gap-4 p-4 rounded-lg bg-rose-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Icon name="Camera" size={20} className="text-rose-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={16} className="text-rose-600" />
                      <span className="font-semibold text-rose-600">12:30</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Фотосессия
                    </h4>
                    <p className="text-slate-600">
                      Запечатлеем самые яркие моменты
                    </p>
                  </div>
                </div>

                <Separator className="bg-rose-200" />

                <div className="flex items-start gap-4 p-4 rounded-lg bg-rose-50/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="PartyPopper"
                        size={20}
                        className="text-rose-600"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={16} className="text-rose-600" />
                      <span className="font-semibold text-rose-600">15:00</span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      Праздничный банкет
                    </h4>
                    <p className="text-slate-600">
                      Ужин, танцы и веселье до утра
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* RSVP Section */}
          <Card className="bg-gradient-to-r from-rose-100 to-pink-100 border-rose-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Подтверждение участия
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                Пожалуйста, подтвердите свое участие до 25 августа 2025 года
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3"
                >
                  <Icon name="Check" size={20} className="mr-2" />
                  Буду участвовать
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-rose-200 text-rose-600 hover:bg-rose-50 px-8 py-3"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <p className="text-slate-500 text-sm mb-4">
              С любовью и нетерпением ждем встречи с вами!
            </p>
            <div className="flex justify-center gap-2">
              <Icon name="Heart" size={16} className="text-rose-400" />
              <Icon name="Heart" size={16} className="text-rose-400" />
              <Icon name="Heart" size={16} className="text-rose-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

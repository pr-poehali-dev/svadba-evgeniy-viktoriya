import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-12 max-w-3xl mx-auto">
          <div className="space-y-2">
            <p className="text-sm font-light text-slate-400 tracking-widest uppercase">
              Свадебное приглашение
            </p>
            <div className="w-12 h-px bg-slate-200 mx-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-slate-900 tracking-tight">
            <span className="block">Евгений</span>
            <span className="text-sm font-light text-slate-400 tracking-widest my-6 block">
              &
            </span>
            <span className="block">Виктория</span>
          </h1>

          <div className="space-y-4 text-slate-600">
            <p className="text-lg font-light tracking-wide">06.09.2025</p>
            <p className="text-base font-light">Кузнецк, ул. Кирова, 157</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto space-y-16">
          {/* Invitation Text */}
          <div className="text-center space-y-8">
            <div className="w-12 h-px bg-slate-300 mx-auto" />

            <p className="text-base text-slate-600 leading-relaxed font-light max-w-lg mx-auto">
              Мы счастливы пригласить вас разделить с нами один из самых важных
              дней в нашей жизни
            </p>

            <div className="inline-block border border-slate-200 px-6 py-2">
              <span className="text-xs text-slate-500 font-light tracking-widest uppercase">
                Дресс-код: Классика
              </span>
            </div>
          </div>

          {/* Schedule */}
          <div className="space-y-8">
            <div className="w-12 h-px bg-slate-300 mx-auto" />

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-light text-slate-900">
                    Торжественная роспись
                  </h4>
                  <p className="text-xs text-slate-500">
                    Официальная церемония
                  </p>
                </div>
                <span className="text-sm font-light text-slate-900">12:00</span>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <div>
                  <h4 className="text-sm font-light text-slate-900">
                    Фотосессия
                  </h4>
                  <p className="text-xs text-slate-500">
                    Запечатлеем яркие моменты
                  </p>
                </div>
                <span className="text-sm font-light text-slate-900">12:30</span>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <h4 className="text-sm font-light text-slate-900">
                    Праздничный банкет
                  </h4>
                  <p className="text-xs text-slate-500">
                    Ужин, танцы и веселье
                  </p>
                </div>
                <span className="text-sm font-light text-slate-900">15:00</span>
              </div>
            </div>
          </div>

          {/* RSVP Section */}
          <div className="text-center space-y-8">
            <div className="w-12 h-px bg-slate-300 mx-auto" />

            <div className="space-y-6">
              <p className="text-sm text-slate-600 font-light">
                Подтвердите участие до 25 августа
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-300 text-slate-900 hover:bg-slate-50 px-8 py-2 font-light"
                >
                  Буду участвовать
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-600 hover:bg-slate-50 px-8 py-2 font-light"
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-12">
            <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
            <p className="text-xs text-slate-400 font-light tracking-wide">
              С любовью
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

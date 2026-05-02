import { useNavigate } from "react-router";
import { ArrowLeft, ShieldCheck, Star, TrendingUp, Eye, Award, CheckCircle2 } from "lucide-react";
import { Button, Card, CardContent } from "../components/ui";

export function VerificationInfo() {
  const navigate = useNavigate();

  const benefits = [
    { icon: Eye, title: "Повышенная видимость", desc: "Ваши товары показываются выше в поиске и каталоге" },
    { icon: Star, title: "Значок доверия", desc: "Зелёный значок «Честный поставщик» виден покупателям" },
    { icon: TrendingUp, title: "Больше продаж", desc: "В среднем на 35% больше заказов по сравнению с неверифицированными" },
    { icon: Award, title: "Приоритетная поддержка", desc: "Выделенный менеджер и быстрая модерация товаров" },
  ];

  const requirements = [
    "Действующая регистрация ИП/ООО",
    "Декларации соответствия на продукцию",
    "Сертификаты био/органик (при наличии)",
    "Фото производства или склада",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-4 py-4 pt-10 border-b border-gray-100 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0 -ml-2 text-gray-600 hover:bg-gray-100/50 rounded-full w-10 h-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Честный поставщик</h1>
      </div>

      <div className="p-4 space-y-6 pb-24">
        <Card className="border-emerald-200 bg-emerald-50 shadow-sm">
          <CardContent className="p-5 flex flex-col items-center text-center gap-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 border-2 border-emerald-200">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-emerald-900">Ваш статус: Активен</h2>
            <p className="text-sm text-emerald-700/80">Вы прошли верификацию и получили все преимущества программы «Честный поставщик»</p>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 px-1 text-sm">Преимущества статуса</h3>
          <div className="space-y-3">
            {benefits.map((b) => (
              <Card key={b.title} className="border-gray-100 shadow-sm">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 px-1 text-sm">Требования для получения</h3>
          <Card className="border-gray-100 shadow-sm">
            <CardContent className="p-4 space-y-3">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

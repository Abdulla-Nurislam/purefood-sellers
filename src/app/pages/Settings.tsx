import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Bell, Moon, Globe, Lock, HelpCircle, FileText, ChevronRight, Shield } from "lucide-react";
import { Button, Card, CardContent } from "../components/ui";
import { toast } from "sonner";

export function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = (value: boolean, setter: (v: boolean) => void, label: string) => {
    setter(!value);
    toast.success(`${label} ${!value ? "включены" : "выключены"}`);
  };

  const settingsGroups = [
    {
      title: "Основные",
      items: [
        {
          icon: Bell,
          label: "Уведомления",
          toggle: true,
          value: notifications,
          onToggle: () => toggleSwitch(notifications, setNotifications, "Уведомления"),
        },
        {
          icon: Moon,
          label: "Тёмная тема",
          toggle: true,
          value: darkMode,
          onToggle: () => toggleSwitch(darkMode, setDarkMode, "Тёмная тема"),
        },
        {
          icon: Globe,
          label: "Язык",
          subtitle: "Русский",
          onClick: () => toast.info("Доступен только русский язык"),
        },
      ],
    },
    {
      title: "Безопасность",
      items: [
        {
          icon: Lock,
          label: "Изменить пароль",
          onClick: () => toast.info("Функция в разработке"),
        },
        {
          icon: Shield,
          label: "Двухфакторная аутентификация",
          onClick: () => toast.info("Функция в разработке"),
        },
      ],
    },
    {
      title: "Поддержка",
      items: [
        {
          icon: HelpCircle,
          label: "Центр помощи",
          onClick: () => toast.info("Центр помощи откроется в новом окне"),
        },
        {
          icon: FileText,
          label: "Условия использования",
          onClick: () => toast.info("Документ откроется в новом окне"),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-4 py-4 pt-10 border-b border-gray-100 flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0 -ml-2 text-gray-600 hover:bg-gray-100/50 rounded-full w-10 h-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold tracking-tight text-gray-900">Настройки</h1>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {settingsGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="font-semibold text-gray-900 px-1 text-sm">{group.title}</h3>
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-0 divide-y divide-gray-50">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.toggle ? item.onToggle : item.onClick}
                    className="w-full flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-900">{item.label}</p>
                        {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                      </div>
                    </div>
                    {item.toggle ? (
                      <div className={`w-11 h-6 rounded-full transition-colors relative ${item.value ? "bg-emerald-600" : "bg-gray-300"}`}>
                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${item.value ? "translate-x-5.5" : "translate-x-0.5"}`} />
                      </div>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

        <p className="text-center text-xs text-gray-400 pt-4">PureFood Sellers v1.0.0</p>
      </div>
    </div>
  );
}

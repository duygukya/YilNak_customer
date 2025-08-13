import { TrendingUp, TrendingDown, Truck, Package, Clock, AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  {
    title: "Toplam Sevkiyat",
    value: "1,247",
    change: "+12%",
    trend: "up",
    subtitle: "Geçen aydan artış",
    icon: Truck,
    color: "emerald",
  },
  {
    title: "Tamamlanan",
    value: "1,089",
    change: "+8%",
    trend: "up",
    subtitle: "Geçen aydan artış",
    icon: Package,
    color: "green",
  },
  {
    title: "Devam Eden",
    value: "158",
    change: "+15%",
    trend: "up",
    subtitle: "Geçen aydan artış",
    icon: Clock,
    color: "blue",
  },
  {
    title: "Bekleyen",
    value: "23",
    change: "-5%",
    trend: "down",
    subtitle: "Tartışmada",
    icon: AlertTriangle,
    color: "amber",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="group relative overflow-hidden gradient-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <stat.icon className="w-24 h-24 text-primary animate-float" />
          </div>

          <div className="relative p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl bg-gradient-to-br ${
                    stat.color === "emerald"
                      ? "from-emerald-500 to-emerald-600"
                      : stat.color === "green"
                        ? "from-green-500 to-green-600"
                        : stat.color === "blue"
                          ? "from-blue-500 to-blue-600"
                          : "from-amber-500 to-amber-600"
                  } shadow-lg`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">{stat.title}</h3>
              </div>
              <div
                className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full font-medium ${
                  stat.trend === "up"
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {stat.trend === "up" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-medium">{stat.subtitle}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

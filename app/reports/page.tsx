"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Package, Clock, Download } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  AreaChart,
  Area,
  Pie,
} from "recharts"

const monthlyData = [
  { month: "Ocak", sevkiyat: 45, maliyet: 125000 },
  { month: "Şubat", sevkiyat: 52, maliyet: 142000 },
  { month: "Mart", sevkiyat: 48, maliyet: 138000 },
  { month: "Nisan", sevkiyat: 61, maliyet: 165000 },
  { month: "Mayıs", sevkiyat: 55, maliyet: 158000 },
  { month: "Haziran", sevkiyat: 67, maliyet: 178000 },
  { month: "Temmuz", sevkiyat: 59, maliyet: 162000 },
  { month: "Ağustos", sevkiyat: 72, maliyet: 195000 },
  { month: "Eylül", sevkiyat: 68, maliyet: 185000 },
  { month: "Ekim", sevkiyat: 74, maliyet: 198000 },
  { month: "Kasım", sevkiyat: 69, maliyet: 188000 },
  { month: "Aralık", sevkiyat: 78, maliyet: 210000 },
]

const shipmentTypeData = [
  { name: "Ağır Yük", value: 35, color: "#FFC107" },
  { name: "Proje Lojistiği", value: 30, color: "#6B7280" },
  { name: "Gabari Yük", value: 22, color: "#374151" },
  { name: "Diğer", value: 13, color: "#9CA3AF" },
]

const performanceData = [
  { metric: "Zamanında", value: 96.8, color: "#FFC107" },
  { metric: "Erken", value: 12.4, color: "#6B7280" },
  { metric: "Geç", value: 3.2, color: "#374151" },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CustomerNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Raporlar ve Analitik</h1>
          <p className="text-gray-600">Sevkiyat performansınızı ve istatistiklerinizi görüntüleyin</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="shipments">Sevkiyat Analizi</TabsTrigger>
            <TabsTrigger value="costs">Maliyet Analizi</TabsTrigger>
            <TabsTrigger value="performance">Performans</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Toplam Sevkiyat</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                    </div>
                    <Package className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600">+12%</span>
                    <span className="text-gray-500 ml-1">bu ay</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ortalama Süre</p>
                      <p className="text-2xl font-bold text-gray-900">3.2 gün</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600">-8%</span>
                    <span className="text-gray-500 ml-1">geçen aya göre</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Başarı Oranı</p>
                      <p className="text-2xl font-bold text-gray-900">98.5%</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600">+2%</span>
                    <span className="text-gray-500 ml-1">bu çeyrek</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Toplam Ağırlık</p>
                      <p className="text-2xl font-bold text-gray-900">2,847 ton</p>
                    </div>
                    <Package className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600">+18%</span>
                    <span className="text-gray-500 ml-1">bu ay</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Aylık Sevkiyat Trendi</CardTitle>
                  <CardDescription>Son 12 ayın sevkiyat performansı</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Rapor İndir
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#111110ff",
                          border: "none",
                          borderRadius: "8px",
                          color: "#e3d1d1ff",
                        }}
                      />
                      <Bar dataKey="sevkiyat" fill="#FFC107" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipments" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sevkiyat Türü Dağılımı</CardTitle>
                  <CardDescription>Sevkiyat türlerine göre dağılım analizi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={shipmentTypeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {shipmentTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#2c7af7ff",
                            border: "none",
                            borderRadius: "8px",
                            color: "#f9f9f9ff",
                          }}
                        />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {shipmentTypeData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                        <span className="text-sm font-semibold">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sevkiyat Detayları</CardTitle>
                  <CardDescription>Türlere göre detaylı analiz</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                      <div>
                        <h4 className="font-semibold text-gray-900">Ağır Yük Taşımacılığı</h4>
                        <p className="text-sm text-gray-600">45 sevkiyat</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-yellow-600">%35</p>
                        <div className="w-20 h-2 bg-yellow-200 rounded-full">
                          <div className="w-14 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                      <div>
                        <h4 className="font-semibold text-gray-900">Proje Lojistiği</h4>
                        <p className="text-sm text-gray-600">38 sevkiyat</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-600">%30</p>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border-l-4 border-gray-700">
                      <div>
                        <h4 className="font-semibold text-gray-900">Gabari Yük</h4>
                        <p className="text-sm text-gray-600">28 sevkiyat</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-700">%22</p>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-9 h-2 bg-gray-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="costs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Maliyet Analizi</CardTitle>
                <CardDescription>Aylık maliyet dağılımı ve trend analizi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                      <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₺${value.toLocaleString()}`} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#374151",
                          border: "none",
                          borderRadius: "8px",
                          color: "#fff",
                        }}
                        formatter={(value) => [`₺${value.toLocaleString()}`, "Maliyet"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="maliyet"
                        stroke="#FFC107"
                        fill="#FFC107"
                        fillOpacity={0.3}
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Toplam Maliyet</p>
                    <p className="text-2xl font-bold text-gray-900">₺2,044,000</p>
                    <p className="text-sm text-green-600 mt-1">+15% bu yıl</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Ortalama Sevkiyat Maliyeti</p>
                    <p className="text-2xl font-bold text-gray-900">₺13,100</p>
                    <p className="text-sm text-yellow-600 mt-1">-3% geçen aya göre</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">En Yüksek Aylık</p>
                    <p className="text-2xl font-bold text-gray-900">₺210,000</p>
                    <p className="text-sm text-gray-600 mt-1">Aralık 2024</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Teslimat Performansı</CardTitle>
                  <CardDescription>Teslimat zamanlaması dağılımı</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis type="number" stroke="#6B7280" fontSize={12} />
                        <YAxis type="category" dataKey="metric" stroke="#6B7280" fontSize={12} width={60} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#FFC107",
                            border: "none",
                            borderRadius: "8px",
                            color: "#000",
                          }}
                          formatter={(value) => [`${value}%`, "Oran"]}
                        />
                        <Bar dataKey="value" fill="#FFC107" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performans Metrikleri</CardTitle>
                  <CardDescription>Teslimat performansı ve müşteri memnuniyeti</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Teslimat Performansı</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Zamanında Teslimat</span>
                          <span className="font-semibold text-yellow-600">96.8%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Erken Teslimat</span>
                          <span className="font-semibold text-gray-600">12.4%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Geç Teslimat</span>
                          <span className="font-semibold text-gray-800">3.2%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Kalite Metrikleri</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Hasarsız Teslimat</span>
                          <span className="font-semibold text-yellow-600">99.1%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Müşteri Memnuniyeti</span>
                          <span className="font-semibold text-gray-600">4.8/5</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Tekrar Tercih Oranı</span>
                          <span className="font-semibold text-gray-800">94.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Package, Clock, Download, Calendar } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"

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
                <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Grafik yükleniyor...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sevkiyat Türü Dağılımı</CardTitle>
                <CardDescription>Sevkiyat türlerine göre dağılım analizi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Ağır Yük Taşımacılığı</h4>
                      <p className="text-sm text-gray-600">45 sevkiyat</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">%35</p>
                      <div className="w-20 h-2 bg-yellow-200 rounded-full">
                        <div className="w-14 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Proje Lojistiği</h4>
                      <p className="text-sm text-gray-600">38 sevkiyat</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">%30</p>
                      <div className="w-20 h-2 bg-blue-200 rounded-full">
                        <div className="w-12 h-2 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Gabari Yük</h4>
                      <p className="text-sm text-gray-600">28 sevkiyat</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">%22</p>
                      <div className="w-20 h-2 bg-green-200 rounded-full">
                        <div className="w-9 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="costs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Maliyet Analizi</CardTitle>
                <CardDescription>Aylık maliyet dağılımı ve trend analizi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Maliyet analizi hazırlanıyor...</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
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
                        <span className="font-semibold">96.8%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Erken Teslimat</span>
                        <span className="font-semibold">12.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Geç Teslimat</span>
                        <span className="font-semibold">3.2%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Kalite Metrikleri</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Hasarsız Teslimat</span>
                        <span className="font-semibold">99.1%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Müşteri Memnuniyeti</span>
                        <span className="font-semibold">4.8/5</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tekrar Tercih Oranı</span>
                        <span className="font-semibold">94.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

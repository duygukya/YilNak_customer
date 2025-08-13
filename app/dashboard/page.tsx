"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Package, Truck, MapPin, Clock, FileText, Plus } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    localStorage.removeItem("customerAuth")
    window.location.href = "/login"
  }

  const shipments = [
    {
      id: "YN-2024-001",
      description: "Endüstriyel Makine Taşıması",
      origin: "İstanbul",
      destination: "Ankara",
      status: "transit",
      progress: 75,
      estimatedDelivery: "2024-01-15",
      weight: "25 ton",
      type: "Ağır Yük",
    },
    {
      id: "YN-2024-002",
      description: "Proje Ekipmanları",
      origin: "Bursa",
      destination: "İzmir",
      status: "delivered",
      progress: 100,
      estimatedDelivery: "2024-01-10",
      weight: "18 ton",
      type: "Proje Lojistiği",
    },
    {
      id: "YN-2024-003",
      description: "İnşaat Malzemeleri",
      origin: "Ankara",
      destination: "Antalya",
      status: "preparing",
      progress: 25,
      estimatedDelivery: "2024-01-20",
      weight: "32 ton",
      type: "Gabari Yük",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500"
      case "transit":
        return "bg-yellow-400"
      case "preparing":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "delivered":
        return "Teslim Edildi"
      case "transit":
        return "Yolda"
      case "preparing":
        return "Hazırlanıyor"
      default:
        return "Bilinmiyor"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <CustomerNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hoş Geldiniz</h2>
          <p className="text-gray-600">
            1973'ten beri güvenilir lojistik ortağınız YılNak ile sevkiyatlarınızı takip edin
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-yellow-400">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Search className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sevkiyat Takip</h3>
                  <p className="text-sm text-gray-600">Kargo durumunu sorgula</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plus className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teklif İste</h3>
                  <p className="text-sm text-gray-600">Yeni sevkiyat talebi</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Belgelerim</h3>
                  <p className="text-sm text-gray-600">Fatura ve evraklar</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Projelerim</h3>
                  <p className="text-sm text-gray-600">Proje takibi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="shipments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="shipments">Aktif Sevkiyatlar</TabsTrigger>
            <TabsTrigger value="tracking">Sevkiyat Takip</TabsTrigger>
            <TabsTrigger value="history">Geçmiş</TabsTrigger>
          </TabsList>

          <TabsContent value="shipments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-yellow-600" />
                  <span>Aktif Sevkiyatlarınız</span>
                </CardTitle>
                <CardDescription>Devam eden sevkiyatlarınızın durumunu görüntüleyin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {shipments.map((shipment) => (
                    <div key={shipment.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900">{shipment.description}</h4>
                          <p className="text-sm text-gray-600">Sevkiyat No: {shipment.id}</p>
                        </div>
                        <Badge className={`${getStatusColor(shipment.status)} text-white`}>
                          {getStatusText(shipment.status)}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">
                            {shipment.origin} → {shipment.destination}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">
                            {shipment.weight} - {shipment.type}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Tahmini: {shipment.estimatedDelivery}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>İlerleme</span>
                          <span>{shipment.progress}%</span>
                        </div>
                        <Progress value={shipment.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sevkiyat Takip</CardTitle>
                <CardDescription>Sevkiyat numaranızı girerek kargonuzun durumunu sorgulayın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2 mb-6">
                  <Input
                    placeholder="Sevkiyat numarasını girin (örn: YN-2024-001)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Search className="h-4 w-4 mr-2" />
                    Sorgula
                  </Button>
                </div>

                {searchQuery && (
                  <div className="border rounded-lg p-6 bg-yellow-50">
                    <h4 className="font-semibold mb-4">Sevkiyat Detayları</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durum:</span>
                        <Badge className="bg-yellow-400 text-black">Yolda</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Konum:</span>
                        <span>Eskişehir - Ankara Yolu</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tahmini Varış:</span>
                        <span>15 Ocak 2024, 14:00</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sevkiyat Geçmişi</CardTitle>
                <CardDescription>Tamamlanan sevkiyatlarınızın listesi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Henüz tamamlanmış sevkiyat bulunmuyor</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

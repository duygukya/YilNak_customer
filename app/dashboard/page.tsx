"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Package, Truck, MapPin, Clock, FileText, Plus, TrendingUp, Users, Globe, BarChart3  } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"

export default function CustomerDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showCorporateImage, setShowCorporateImage] = useState(false)

  const backgroundImages = ["/yilnak1.jpg", "/yilnak2.jpeg", "/yilnak3.webp"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

useEffect(() => {
  let timeoutId: NodeJS.Timeout;

  const loopAnimation = () => {
    setShowCorporateImage(true); // Görsel göster
    timeoutId = setTimeout(() => {
      setShowCorporateImage(false); // Görsel gizle
      timeoutId = setTimeout(loopAnimation, 2000); // 3 saniye sonra tekrar göster
    }, 3000); // 3 saniye durma süresi
  };

  loopAnimation(); // İlk başlatma

  return () => clearTimeout(timeoutId); // Temizleme
}, []);


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
        return "bg-cyan-500"
      case "preparing":
        return "bg-pink-500"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-500 via-gray-600 to-slate-700">
      {/* Header */}
      <CustomerNavigation />

      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        {/* Rotating Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`YılNak Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Hoş Geldiniz - YılNak Lojistik</h1>
          <p className="text-xl mb-8 opacity-90">1973'ten beri güvenilir lojistik ortağınız</p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
            Sevkiyatınızı Takip Edin
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left side - Customer satisfaction cards */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white mb-4">Müşteri Memnuniyeti</h2>
              <p className="text-gray-300 text-lg">50 yıllık deneyimimizle size en iyi hizmeti sunuyoruz</p>
            </div>

            <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
  <Card className="border-l-4 border-l-amber-500 hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
    <CardContent className="p-2">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-amber-100 rounded-lg">
          <TrendingUp className="h-10 w-10 text-amber-800" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">1,247</h3>
          <p className="text-sm text-gray-600">Toplam Sevkiyat</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 bg-white border-gray-200">
    <CardContent className="p-2">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Users className="h-10 w-10 text-blue-600" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">98.5%</h3>
          <p className="text-sm text-gray-600">Müşteri Memnuniyeti</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

<div className="flex justify-center">
  <Card className="border-l-4 border-l-gray-500 hover:shadow-lg transition-all duration-300 w-64 bg-white border-gray-200">
    <CardContent className="p-2">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-gray-100 rounded-lg">
          <Globe className="h-10 w-10 text-gray-600" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900">47</h3>
          <p className="text-sm text-gray-600">Ülke Kapsamı</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>

            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div
              className={`transition-all duration-1000 ${showCorporateImage ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-20"}`}
            >
              <img
                src="/yilnak4.jpg"
                alt="YılNak Since 1978"
                className="w-full max-w-lg h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
<div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 cursor-pointer
                 border-0 group bg-gradient-to-br from-slate-900 to-slate-800 text-white
                 hover:scale-105 overflow-hidden relative ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Search className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Sevkiyat Takip</h3>
                    <p className="text-sm text-white/80">Kargo durumunu sorgula</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 cursor-pointer
                 border-0 group bg-gradient-to-br from-slate-900 to-slate-800 text-white
                 hover:scale-105 overflow-hidden relative ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Plus className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Teklif İste</h3>
                    <p className="text-sm text-white/80">Yeni sevkiyat talebi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 cursor-pointer
                 border-0 group bg-gradient-to-br from-slate-900 to-slate-800 text-white
                 hover:scale-105 overflow-hidden relative ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FileText className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">Belgelerim</h3>
                    <p className="text-sm text-white/80">Fatura ve evraklar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

           <Card className="hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 cursor-pointer
                 border-0 group bg-gradient-to-br from-slate-900 to-slate-800 text-white
                 hover:scale-105 overflow-hidden relative ring-1 ring-white/10">
  {/* Hover'da hafif sıcak parıltı */}
  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

  <CardContent className="p-8 relative z-10">
    <div className="flex items-center space-x-4">
      {/* İkon kutusu: sıcak degrade kalsın */}
      <div className="p-4 bg-gradient-to-br from-amber-600 to-orange-500 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <Package className="h-7 w-7 text-white" />
      </div>

      <div>
        <h3 className="font-bold text-white text-lg mb-1">Projelerim</h3>
        <p className="text-sm text-white/80">Proje takibi</p>
      </div>
    </div>
  </CardContent>
</Card>

          </div>

        {/* Main Content */}
<Tabs defaultValue="shipments" className="space-y-6">
  <TabsList className="grid w-full grid-cols-3 bg-gray-100 border-gray-200 p-1 rounded-lg">
    <TabsTrigger
      value="shipments"
      className="text-gray-700 rounded-md px-3 py-2 transition
                 data-[state=active]:bg-amber-500 data-[state=active]:text-white
                 data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-amber-600
                 hover:bg-amber-50"
    >
      Aktif Sevkiyatlar
    </TabsTrigger>
    <TabsTrigger
      value="tracking"
      className="text-gray-700 rounded-md px-3 py-2 transition
                 data-[state=active]:bg-amber-500 data-[state=active]:text-white
                 data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-amber-600
                 hover:bg-amber-50"
    >
      Sevkiyat Takip
    </TabsTrigger>
    <TabsTrigger
      value="history"
      className="text-gray-700 rounded-md px-3 py-2 transition
                 data-[state=active]:bg-amber-500 data-[state=active]:text-white
                 data-[state=active]:shadow data-[state=active]:ring-1 data-[state=active]:ring-amber-600
                 hover:bg-amber-50"
    >
      Geçmiş
    </TabsTrigger>
  </TabsList>
            <TabsContent value="shipments" className="space-y-6">
              <Card className="border-0 bg-white shadow-lg border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-cyan-600" />
                    <span className="text-gray-900">Aktif Sevkiyatlarınız</span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Devam eden sevkiyatlarınızın durumunu görüntüleyin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {shipments.map((shipment, index) => (
                      <div
                        key={shipment.id}
                        className="border border-gray-200 rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 bg-white shadow-sm"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">{shipment.description}</h4>
                            <p className="text-sm text-gray-600">Sevkiyat No: {shipment.id}</p>
                          </div>
                          <Badge className={`${getStatusColor(shipment.status)} text-white px-3 py-1`}>
                            {getStatusText(shipment.status)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">
                              {shipment.origin} → {shipment.destination}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">
                              {shipment.weight} - {shipment.type}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm text-gray-700">Tahmini: {shipment.estimatedDelivery}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">İlerleme</span>
                            <span className="font-semibold text-gray-900">{shipment.progress}%</span>
                          </div>
                          <Progress value={shipment.progress} className="h-3 bg-gray-200">
                            <div
                              className="h-full bg-gradient-to-r from-amber-500 to-blue-500 rounded-full transition-all duration-500"
                              style={{ width: `${shipment.progress}%` }}
                            ></div>
                          </Progress>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-6">
              <Card className="border-0 bg-white shadow-lg border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Sevkiyat Takip</CardTitle>
                  <CardDescription className="text-gray-600">
                    Sevkiyat numaranızı girerek kargonuzun durumunu sorgulayın
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2 mb-6">
                    <Input
                      placeholder="Sevkiyat numarasını girin (örn: YN-2024-001)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    />
                    <Button className="bg-gradient-to-r from-amber-500 to-blue-500 hover:from-amber-600 hover:to-blue-600 text-white px-6 h-12">
                      <Search className="h-4 w-4 mr-2" />
                      Sorgula
                    </Button>
                  </div>

                  {searchQuery && (
                    <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                      <h4 className="font-semibold mb-4 text-gray-900">Sevkiyat Detayları</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Durum:</span>
                          <Badge className="bg-gradient-to-r from-amber-500 to-blue-500 text-white">Yolda</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Konum:</span>
                          <span className="font-semibold text-gray-900">Eskişehir - Ankara Yolu</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tahmini Varış:</span>
                          <span className="font-semibold text-gray-900">15 Ocak 2024, 14:00</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-6">
              <Card className="border-0 bg-white shadow-lg border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Sevkiyat Geçmişi</CardTitle>
                  <CardDescription className="text-gray-600">Tamamlanan sevkiyatlarınızın listesi</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <div className="p-6 bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <Package className="h-12 w-12 text-gray-400" />
                    </div>
                    <p className="text-lg">Henüz tamamlanmış sevkiyat bulunmuyor</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

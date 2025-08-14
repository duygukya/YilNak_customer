"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, MapPin, Clock, Package, Truck, CheckCircle, Phone, User, Calendar, Weight } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        id: trackingNumber,
        description: "Endüstriyel Makine Taşıması",
        status: "transit",
        progress: 75,
        currentLocation: "Eskişehir - Ankara Yolu",
        estimatedDelivery: "15 Ocak 2024, 14:00",
        origin: "İstanbul",
        destination: "Ankara",
        weight: "25 ton",
        driver: "Mehmet Yılmaz",
        driverPhone: "+90 532 123 45 67",
        vehicle: "34 ABC 123",
        departureTime: "12 Ocak 2024, 11:30",
        estimatedDistance: "450 km",
        remainingDistance: "112 km",
        timeline: [
          { status: "Yükleme Tamamlandı", location: "İstanbul Depo", time: "12 Ocak 2024, 09:00", completed: true },
          { status: "Yola Çıktı", location: "İstanbul", time: "12 Ocak 2024, 11:30", completed: true },
          { status: "Transit Noktası", location: "Eskişehir", time: "14 Ocak 2024, 16:45", completed: true },
          { status: "Teslimata Çıktı", location: "Ankara", time: "15 Ocak 2024, 13:00", completed: false },
          { status: "Teslim Edildi", location: "Ankara Depo", time: "15 Ocak 2024, 14:00", completed: false },
        ],
      })
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
  <img
    src="/yilnak5.jpg" // kendi resim yolunu buraya yaz
    alt="YılNak Lojistik"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40"></div>
</div>


      <div className="relative z-10">
        <CustomerNavigation />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              Sevkiyat Takip Sistemi
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto drop-shadow-md">
              YılNak Lojistik güvencesiyle sevkiyat numaranızı girerek kargonuzun anlık durumunu öğrenin
            </p>
          </div>

          <Card className="mb-8 border-0 shadow-2xl bg-white/95 backdrop-blur-md">
            <CardHeader className=" text-black rounded-t-lg">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                  <Search className="h-5 w-5" />
                </div>
                <span>Sevkiyat Sorgulama</span>
              </CardTitle>
              <CardDescription className="text-black/80 text-base">
                Sevkiyat numaranızı girerek detaylı takip bilgilerine anında ulaşın
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  placeholder="Sevkiyat numarasını girin (örn: YN-2024-001)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 h-12 text-lg border-2 border-yellow-200 focus:border-yellow-400 focus:ring-yellow-400/20"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                />
                <Button
                  onClick={handleTrack}
                  disabled={isLoading || !trackingNumber.trim()}
                  className="h-12 px-8 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-500 hover:to-amber-500 text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-3"></div>
                  ) : (
                    <Search className="h-5 w-5 mr-3" />
                  )}
                  Sorgula
                </Button>
              </div>
            </CardContent>
          </Card>

          {trackingResult && (
            <div className="space-y-8">
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
                <CardHeader className=" text-black">
                  <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Package className="h-5 w-5 text-black" />
                      </div>
                      <span>Sevkiyat Detayları</span>
                    </div>
                    <Badge className="bg-yellow-400 text-black text-sm px-4 py-2">
                      {trackingResult.status === "transit" ? "🚛 Yolda" : "❓ Bilinmiyor"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
                        <h4 className="font-bold text-xl text-gray-900 mb-2">{trackingResult.description}</h4>
                        <p className="text-gray-600 text-lg">
                          Sevkiyat No: <span className="font-semibold text-yellow-600">{trackingResult.id}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                            <MapPin className="h-6 w-6 text-blue-600" />
                            <div>
                              <p className="text-sm text-gray-600">Güzergah</p>
                              <p className="font-semibold text-gray-900">
                                {trackingResult.origin} → {trackingResult.destination}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                            <Weight className="h-6 w-6 text-green-600" />
                            <div>
                              <p className="text-sm text-gray-600">Ağırlık</p>
                              <p className="font-semibold text-gray-900">{trackingResult.weight}</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                            <Clock className="h-6 w-6 text-purple-600" />
                            <div>
                              <p className="text-sm text-gray-600">Tahmini Varış</p>
                              <p className="font-semibold text-gray-900">{trackingResult.estimatedDelivery}</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                            <Calendar className="h-6 w-6 text-orange-600" />
                            <div>
                              <p className="text-sm text-gray-600">Kalkış Zamanı</p>
                              <p className="font-semibold text-gray-900">{trackingResult.departureTime}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-yellow-400 to-amber-400 p-6 rounded-xl text-black">
                        <h4 className="font-bold text-lg mb-4">📍 Mevcut Konum</h4>
                        <div className="flex items-center space-x-3 mb-4">
                          <Truck className="h-6 w-6" />
                          <span className="font-semibold">{trackingResult.currentLocation}</span>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span>İlerleme Durumu</span>
                              <span className="font-bold">{trackingResult.progress}%</span>
                            </div>
                            <Progress value={trackingResult.progress} className="h-3 bg-black/20" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="opacity-80">Toplam Mesafe</p>
                              <p className="font-bold">{trackingResult.estimatedDistance}</p>
                            </div>
                            <div>
                              <p className="opacity-80">Kalan Mesafe</p>
                              <p className="font-bold">{trackingResult.remainingDistance}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-lg text-gray-900 mb-4">👨‍💼 Sürücü Bilgileri</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-600">Sürücü</p>
                              <p className="font-semibold text-gray-900">{trackingResult.driver}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-600">İletişim</p>
                              <p className="font-semibold text-gray-900">{trackingResult.driverPhone}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Truck className="h-5 w-5 text-gray-600" />
                            <div>
                              <p className="text-sm text-gray-600">Araç Plakası</p>
                              <p className="font-semibold text-gray-900">{trackingResult.vehicle}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-md">
                <CardHeader className=" text-black">
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span>Sevkiyat Geçmişi</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {trackingResult.timeline.map((event, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-100 rounded-lg">
                        <CheckCircle className={`h-6 w-6 ${event.completed ? "text-green-600" : "text-red-600"}`} />
                        <div>
                          <p className="text-sm text-gray-600">{event.status}</p>
                          <p className="font-semibold text-gray-900">{event.location}</p>
                          <p className="text-sm text-gray-600">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, MapPin, Clock, Package, Truck, CheckCircle } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CustomerNavigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sevkiyat Takip</h1>
          <p className="text-gray-600">Sevkiyat numaranızı girerek kargonuzun anlık durumunu öğrenin</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5 text-yellow-600" />
              <span>Sevkiyat Sorgula</span>
            </CardTitle>
            <CardDescription>Sevkiyat numaranızı girerek detaylı takip bilgilerine ulaşın</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                placeholder="Sevkiyat numarasını girin (örn: YN-2024-001)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
              />
              <Button
                onClick={handleTrack}
                disabled={isLoading || !trackingNumber.trim()}
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                ) : (
                  <Search className="h-4 w-4 mr-2" />
                )}
                Sorgula
              </Button>
            </div>
          </CardContent>
        </Card>

        {trackingResult && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Sevkiyat Detayları</span>
                  <Badge className="bg-yellow-400 text-black">
                    {trackingResult.status === "transit" ? "Yolda" : "Bilinmiyor"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{trackingResult.description}</h4>
                      <p className="text-sm text-gray-600">Sevkiyat No: {trackingResult.id}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {trackingResult.origin} → {trackingResult.destination}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Package className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{trackingResult.weight}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Tahmini Varış: {trackingResult.estimatedDelivery}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mevcut Konum</h4>
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">{trackingResult.currentLocation}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>İlerleme</span>
                        <span>{trackingResult.progress}%</span>
                      </div>
                      <Progress value={trackingResult.progress} className="h-3" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sevkiyat Geçmişi</CardTitle>
                <CardDescription>Sevkiyatınızın detaylı takip geçmişi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingResult.timeline.map((event: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          event.completed ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        {event.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className={`text-sm font-medium ${event.completed ? "text-gray-900" : "text-gray-500"}`}>
                            {event.status}
                          </h4>
                          <span className="text-xs text-gray-500">{event.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{event.location}</p>
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
  )
}

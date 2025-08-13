"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Package } from "lucide-react"
import CustomerNavigation from "@/components/customer-navigation"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const events = [
    {
      id: 1,
      title: "Makine Yüklemesi",
      date: "2024-01-15",
      time: "09:00",
      type: "pickup",
      location: "İstanbul Depo",
      shipmentId: "YN-2024-001",
    },
    {
      id: 2,
      title: "Proje Ekipmanları Teslim",
      date: "2024-01-16",
      time: "14:00",
      type: "delivery",
      location: "Ankara Şantiye",
      shipmentId: "YN-2024-002",
    },
    {
      id: 3,
      title: "Gabari Yük Kontrolü",
      date: "2024-01-18",
      time: "11:30",
      type: "inspection",
      location: "Bursa Depo",
      shipmentId: "YN-2024-003",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "pickup":
        return "bg-blue-100 text-blue-800"
      case "delivery":
        return "bg-green-100 text-green-800"
      case "inspection":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEventTypeText = (type: string) => {
    switch (type) {
      case "pickup":
        return "Yükleme"
      case "delivery":
        return "Teslimat"
      case "inspection":
        return "Kontrol"
      default:
        return "Etkinlik"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CustomerNavigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Takvim</h1>
          <p className="text-gray-600">Sevkiyat programınızı ve önemli tarihleri takip edin</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    <span>Ocak 2024</span>
                  </CardTitle>
                  <CardDescription>Sevkiyat programınız ve önemli etkinlikler</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6 + 1
                    const isCurrentMonth = day > 0 && day <= 31
                    const hasEvent = isCurrentMonth && [15, 16, 18].includes(day)

                    return (
                      <div
                        key={i}
                        className={`p-2 h-12 text-center text-sm border rounded-lg cursor-pointer transition-colors ${
                          isCurrentMonth
                            ? hasEvent
                              ? "bg-yellow-100 border-yellow-200 text-yellow-800 font-semibold"
                              : "hover:bg-gray-50 border-gray-200"
                            : "text-gray-300 border-gray-100"
                        }`}
                      >
                        {isCurrentMonth ? day : ""}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Yaklaşan Etkinlikler</CardTitle>
                <CardDescription>Bu haftaki programınız</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <Badge className={getEventTypeColor(event.type)}>{getEventTypeText(event.type)}</Badge>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            {event.date} - {event.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="h-4 w-4" />
                          <span>{event.shipmentId}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Bu Ay Özeti</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Toplam Etkinlik</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Yükleme</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Teslimat</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Kontrol</span>
                    <span className="font-semibold">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

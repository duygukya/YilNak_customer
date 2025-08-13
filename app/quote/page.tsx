"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calculator, FileText, Package, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    description: "",
    urgency: "",
    specialRequirements: [] as string[],
    contactName: "",
    contactPhone: "",
    contactEmail: "",
  })

  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceTypes = [
    { value: "heavy", label: "Ağır & Gabari Yük Taşımacılığı", icon: "🏗️" },
    { value: "project", label: "Proje & Lojistik Yönetimi", icon: "📋" },
    { value: "engineering", label: "Mühendislik Hizmetleri", icon: "⚙️" },
    { value: "rental", label: "Özel Ekipman Kiralama", icon: "🚛" },
    { value: "forwarding", label: "Global Forwarding", icon: "🌍" },
    { value: "storage", label: "Depolama & Gümrükleme", icon: "📦" },
  ]

  const specialRequirements = [
    "Özel İzin Gerekli",
    "Escort Araç",
    "Kargo Sigortası",
    "Soğuk Zincir",
    "Hassas Yük",
    "Tehlikeli Madde",
    "Acil Teslimat",
    "Montaj Hizmeti",
  ]

  const handleSpecialRequirementChange = (requirement: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        specialRequirements: [...prev.specialRequirements, requirement],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        specialRequirements: prev.specialRequirements.filter((req) => req !== requirement),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Teklif Talebiniz Alındı!</h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Teklif talebiniz başarıyla iletildi. Uzman ekibimiz en kısa sürede sizinle iletişime geçecek. Teklif
              numaranız: <strong>YN-QUOTE-2024-001</strong>
            </p>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Dashboard'a Dön</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false)
                  setStep(1)
                  setFormData({
                    serviceType: "",
                    origin: "",
                    destination: "",
                    weight: "",
                    dimensions: "",
                    description: "",
                    urgency: "",
                    specialRequirements: [],
                    contactName: "",
                    contactPhone: "",
                    contactEmail: "",
                  })
                }}
              >
                Yeni Teklif İste
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Geri
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Teklif Talebi</h1>
              <p className="text-sm text-gray-600">Lojistik ihtiyaçlarınız için teklif alın</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-yellow-400" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">
                {step === 1 && "Hizmet Türü"}
                {step === 2 && "Sevkiyat Detayları"}
                {step === 3 && "İletişim Bilgileri"}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-yellow-600" />
                  <span>Hizmet Türü Seçin</span>
                </CardTitle>
                <CardDescription>İhtiyacınıza en uygun hizmet türünü seçerek devam edin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <div
                      key={service.value}
                      className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                        formData.serviceType === service.value
                          ? "border-yellow-400 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, serviceType: service.value }))}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <h3 className="font-medium text-gray-900">{service.label}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.serviceType}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    Devam Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-yellow-600" />
                  <span>Sevkiyat Detayları</span>
                </CardTitle>
                <CardDescription>Yükünüz ve sevkiyat detayları hakkında bilgi verin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="origin">Çıkış Noktası</Label>
                    <Input
                      id="origin"
                      placeholder="İl/İlçe"
                      value={formData.origin}
                      onChange={(e) => setFormData((prev) => ({ ...prev, origin: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Varış Noktası</Label>
                    <Input
                      id="destination"
                      placeholder="İl/İlçe"
                      value={formData.destination}
                      onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Ağırlık</Label>
                    <Input
                      id="weight"
                      placeholder="Ton cinsinden"
                      value={formData.weight}
                      onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dimensions">Boyutlar</Label>
                    <Input
                      id="dimensions"
                      placeholder="En x Boy x Yükseklik (m)"
                      value={formData.dimensions}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dimensions: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Yük Açıklaması</Label>
                  <Textarea
                    id="description"
                    placeholder="Taşınacak yükün detaylı açıklaması..."
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Aciliyet Durumu</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Aciliyet seviyesi seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal (7-14 gün)</SelectItem>
                      <SelectItem value="urgent">Acil (3-7 gün)</SelectItem>
                      <SelectItem value="emergency">Çok Acil (1-3 gün)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Özel Gereksinimler</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {specialRequirements.map((requirement) => (
                      <div key={requirement} className="flex items-center space-x-2">
                        <Checkbox
                          id={requirement}
                          checked={formData.specialRequirements.includes(requirement)}
                          onCheckedChange={(checked) => handleSpecialRequirementChange(requirement, checked as boolean)}
                        />
                        <Label htmlFor={requirement} className="text-sm">
                          {requirement}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Geri
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black"
                  >
                    Devam Et
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-yellow-600" />
                  <span>İletişim Bilgileri</span>
                </CardTitle>
                <CardDescription>Teklif için iletişim bilgilerinizi girin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Ad Soyad</Label>
                  <Input
                    id="contactName"
                    placeholder="Adınız ve soyadınız"
                    value={formData.contactName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, contactName: e.target.value }))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Telefon</Label>
                    <Input
                      id="contactPhone"
                      placeholder="0555 123 45 67"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, contactPhone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">E-posta</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="ornek@email.com"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData((prev) => ({ ...prev, contactEmail: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Teklif Özeti</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hizmet Türü:</span>
                      <span>{serviceTypes.find((s) => s.value === formData.serviceType)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Güzergah:</span>
                      <span>
                        {formData.origin} → {formData.destination}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ağırlık:</span>
                      <span>{formData.weight} ton</span>
                    </div>
                    {formData.specialRequirements.length > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Özel Gereksinimler:</span>
                        <div className="flex flex-wrap gap-1">
                          {formData.specialRequirements.map((req) => (
                            <Badge key={req} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Geri
                  </Button>
                  <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    Teklif Talebini Gönder
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </div>
    </div>
  )
}

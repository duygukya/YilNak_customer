"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  FileText,
  Download,
  Search,
  Calendar,
  Eye,
  Filter,
  Receipt,
  Truck,
  Shield,
  FileCheck,
} from "lucide-react"
import Link from "next/link"

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const documents = [
    {
      id: "DOC-2024-001",
      name: "Sevkiyat Faturası - YN-2024-001",
      type: "invoice",
      category: "Faturalar",
      date: "2024-01-15",
      size: "245 KB",
      status: "paid",
      shipmentId: "YN-2024-001",
      description: "Endüstriyel makine taşıması faturası",
    },
    {
      id: "DOC-2024-002",
      name: "Taşıma İzin Belgesi - Ankara",
      type: "permit",
      category: "İzin Belgeleri",
      date: "2024-01-12",
      size: "180 KB",
      status: "approved",
      shipmentId: "YN-2024-001",
      description: "Ağır yük taşıma özel izin belgesi",
    },
    {
      id: "DOC-2024-003",
      name: "Sigorta Poliçesi - Proje A",
      type: "insurance",
      category: "Sigorta",
      date: "2024-01-10",
      size: "320 KB",
      status: "active",
      shipmentId: "YN-2024-001",
      description: "Kargo sigorta poliçesi ve koşulları",
    },
    {
      id: "DOC-2024-004",
      name: "Teslim Tutanağı - Bursa",
      type: "delivery",
      category: "Teslim Belgeleri",
      date: "2024-01-08",
      size: "156 KB",
      status: "completed",
      shipmentId: "YN-2024-002",
      description: "Malların teslim alındığına dair tutanak",
    },
    {
      id: "DOC-2024-005",
      name: "Teknik Rapor - Ekipman Analizi",
      type: "report",
      category: "Raporlar",
      date: "2024-01-05",
      size: "890 KB",
      status: "final",
      shipmentId: "PRJ-2024-001",
      description: "Taşınan ekipmanların teknik analiz raporu",
    },
    {
      id: "DOC-2023-089",
      name: "Yıllık Hizmet Özeti 2023",
      type: "summary",
      category: "Raporlar",
      date: "2023-12-31",
      size: "1.2 MB",
      status: "final",
      shipmentId: null,
      description: "2023 yılı hizmet özeti ve istatistikleri",
    },
  ]

  const categories = [
    { value: "all", label: "Tüm Belgeler", icon: FileText },
    { value: "Faturalar", label: "Faturalar", icon: Receipt },
    { value: "İzin Belgeleri", label: "İzin Belgeleri", icon: FileCheck },
    { value: "Sigorta", label: "Sigorta", icon: Shield },
    { value: "Teslim Belgeleri", label: "Teslim Belgeleri", icon: Truck },
    { value: "Raporlar", label: "Raporlar", icon: FileText },
  ]

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case "invoice":
        return <Receipt className="h-5 w-5 text-green-600" />
      case "permit":
        return <FileCheck className="h-5 w-5 text-blue-600" />
      case "insurance":
        return <Shield className="h-5 w-5 text-purple-600" />
      case "delivery":
        return <Truck className="h-5 w-5 text-orange-600" />
      case "report":
      case "summary":
        return <FileText className="h-5 w-5 text-gray-600" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
      case "completed":
      case "approved":
      case "final":
        return "bg-green-500"
      case "active":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-400"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "paid":
        return "Ödendi"
      case "completed":
        return "Tamamlandı"
      case "approved":
        return "Onaylandı"
      case "active":
        return "Aktif"
      case "final":
        return "Kesinleşti"
      case "pending":
        return "Bekliyor"
      default:
        return "Bilinmiyor"
    }
  }

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <h1 className="text-xl font-bold text-gray-900">Belgelerim</h1>
              <p className="text-sm text-gray-600">Fatura, izin ve diğer belgeleriniz</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Document Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-yellow-400">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Toplam Belge</p>
                  <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
                </div>
                <FileText className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Faturalar</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {documents.filter((d) => d.type === "invoice").length}
                  </p>
                </div>
                <Receipt className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">İzin Belgeleri</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {documents.filter((d) => d.type === "permit").length}
                  </p>
                </div>
                <FileCheck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bu Ay</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {documents.filter((d) => d.date.startsWith("2024-01")).length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Belge adı veya açıklama ile ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrele
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document Categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value} className="text-xs">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="space-y-4">
            {filteredDocuments.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Belge bulunamadı</h3>
                  <p className="text-gray-600">
                    {searchQuery ? "Arama kriterlerinize uygun belge bulunamadı." : "Bu kategoride henüz belge yok."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredDocuments.map((document) => (
                  <Card key={document.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          {getDocumentIcon(document.type)}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{document.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{document.description}</p>
                            {document.shipmentId && (
                              <p className="text-xs text-blue-600">Sevkiyat: {document.shipmentId}</p>
                            )}
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(document.status)} text-white`}>
                          {getStatusText(document.status)}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{document.date}</span>
                          </span>
                          <span>{document.size}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Görüntüle
                        </Button>
                        <Button size="sm" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">
                          <Download className="h-4 w-4 mr-2" />
                          İndir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

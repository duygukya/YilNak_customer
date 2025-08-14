"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Package,
  FileText,
  AlertCircle,
  CheckCircle2,
  Truck, 
  BarChart3 ,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projects = [
    {
      id: "PRJ-2024-001",
      name: "Fabrika Taşıma Projesi",
      client: "ABC Sanayi A.Ş.",
      status: "active",
      progress: 65,
      startDate: "2024-01-01",
      endDate: "2024-03-15",
      location: "İstanbul → Bursa",
      totalWeight: "450 ton",
      equipmentCount: 12,
      teamSize: 8,
      description: "Endüstriyel makine ve ekipmanların fabrikadan yeni tesise taşınması",
      milestones: [
        { name: "Planlama ve İzin", status: "completed", date: "2024-01-15" },
        { name: "Ekipman Demontajı", status: "completed", date: "2024-01-30" },
        { name: "Taşıma İşlemi", status: "active", date: "2024-02-15" },
        { name: "Montaj ve Test", status: "pending", date: "2024-03-01" },
        { name: "Teslim", status: "pending", date: "2024-03-15" },
      ],
      recentUpdates: [
        { date: "2024-01-12", message: "3 numaralı makine başarıyla taşındı" },
        { date: "2024-01-10", message: "Özel izin belgesi onaylandı" },
        { date: "2024-01-08", message: "Escort araç planlaması tamamlandı" },
      ],
    },
    {
      id: "PRJ-2024-002",
      name: "Köprü İnşaat Projesi",
      client: "XYZ İnşaat Ltd.",
      status: "planning",
      progress: 25,
      startDate: "2024-02-01",
      endDate: "2024-06-30",
      location: "Ankara → Konya",
      totalWeight: "680 ton",
      equipmentCount: 18,
      teamSize: 12,
      description: "Köprü inşaatı için çelik konstrüksiyon ve beton elemanların taşınması",
      milestones: [
        { name: "Teknik Planlama", status: "active", date: "2024-02-15" },
        { name: "Rota Analizi", status: "pending", date: "2024-02-28" },
        { name: "İlk Sevkiyat", status: "pending", date: "2024-03-15" },
        { name: "Ana Taşıma", status: "pending", date: "2024-04-01" },
        { name: "Proje Tamamlama", status: "pending", date: "2024-06-30" },
      ],
      recentUpdates: [
        { date: "2024-01-15", message: "Proje ekibi oluşturuldu" },
        { date: "2024-01-12", message: "Müşteri ile ilk toplantı gerçekleştirildi" },
      ],
    },
    {
      id: "PRJ-2023-015",
      name: "Enerji Santrali Projesi",
      client: "Enerji A.Ş.",
      status: "completed",
      progress: 100,
      startDate: "2023-08-01",
      endDate: "2023-12-20",
      location: "İzmir → Adana",
      totalWeight: "1200 ton",
      equipmentCount: 25,
      teamSize: 15,
      description: "Enerji santrali türbin ve jeneratör taşıma projesi",
      milestones: [
        { name: "Planlama", status: "completed", date: "2023-08-15" },
        { name: "Özel Ekipman Hazırlığı", status: "completed", date: "2023-09-01" },
        { name: "Ana Taşıma", status: "completed", date: "2023-10-15" },
        { name: "Montaj Desteği", status: "completed", date: "2023-11-30" },
        { name: "Proje Teslimi", status: "completed", date: "2023-12-20" },
      ],
      recentUpdates: [
        { date: "2023-12-20", message: "Proje başarıyla tamamlandı" },
        { date: "2023-12-15", message: "Son kontroller yapıldı" },
      ],
    },
  ]
const totalWeightTons = projects.reduce((sum, p) => {
  const n = parseInt(String(p.totalWeight).replace(/\D/g, ""), 10) || 0; // "450 ton" -> 450
  return sum + n;
}, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "active":
        return "bg-yellow-400"
      case "planning":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Tamamlandı"
      case "active":
        return "Aktif"
      case "planning":
        return "Planlama"
      default:
        return "Bilinmiyor"
    }
  }

  const getMilestoneIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "active":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />
    }
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  return (
   <div className="min-h-screen bg-white">
      {/* Header */}
     
<header className="bg-slate-900/60 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center h-16">
      <Link href="/dashboard">
        <Button variant="ghost" size="sm" className="mr-4 text-white hover:bg-white/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Geri
        </Button>
      </Link>
      <div>
        <h1 className="text-xl font-bold text-white">Projelerim</h1>
        <p className="text-sm text-white/70">Proje lojistiği takip ve yönetimi</p>
      </div>
    </div>
  </div>
</header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedProject ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
  <StatCard
    title="Toplam Proje"
    value={projects.length}
    Icon={Package}
    accentFrom="from-amber-500"
    accentTo="to-yellow-500"
    delay={0}
  />
  <StatCard
    title="Aktif Proje"
    value={projects.filter(p => p.status === "active").length}
    Icon={Truck}
    accentFrom="from-blue-500"
    accentTo="to-cyan-500"
    delay={100}
  />
  <StatCard
    title="Tamamlanan"
    value={projects.filter(p => p.status === "completed").length}
    Icon={CheckCircle2}
    accentFrom="from-green-500"
    accentTo="to-emerald-500"
    delay={200}
  />
  <StatCard
    title="Toplam Ağırlık"
    value={`${totalWeightTons} ton`}
    Icon={BarChart3}
    accentFrom="from-purple-500"
    accentTo="to-pink-500"
    delay={300}
  />
</div>


            {/* Projects List */}
            <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/10 p-1 rounded-lg">
  <TabsTrigger
    value="active"
    className="rounded-md text-black/80 hover:bg-white/10
               data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Aktif Projeler
  </TabsTrigger>

  <TabsTrigger
    value="planning"
    className="rounded-md text-black/80 hover:bg-white/10
               data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Planlama
  </TabsTrigger>

  <TabsTrigger
    value="completed"
    className="rounded-md text-black/80 hover:bg-white/10
               data-[state=active]:bg-amber-500 data-[state=active]:text-black"
  >
    Tamamlanan
  </TabsTrigger>
</TabsList>


              <TabsContent value="active" className="space-y-4">
                {projects
                  .filter((project) => project.status === "active")
                  .map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6" onClick={() => setSelectedProject(project.id)}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                            <p className="text-sm text-gray-600">{project.client}</p>
                          </div>
                          <Badge className={`${getStatusColor(project.status)} text-white`}>
                            {getStatusText(project.status)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.totalWeight}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.teamSize} kişi</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>İlerleme</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="planning" className="space-y-4">
                {projects
                  .filter((project) => project.status === "planning")
                  .map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6" onClick={() => setSelectedProject(project.id)}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                            <p className="text-sm text-gray-600">{project.client}</p>
                          </div>
                          <Badge className={`${getStatusColor(project.status)} text-white`}>
                            {getStatusText(project.status)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.totalWeight}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">Başlangıç: {project.startDate}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>İlerleme</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {projects
                  .filter((project) => project.status === "completed")
                  .map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6" onClick={() => setSelectedProject(project.id)}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                            <p className="text-sm text-gray-600">{project.client}</p>
                          </div>
                          <Badge className={`${getStatusColor(project.status)} text-white`}>
                            {getStatusText(project.status)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Package className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{project.totalWeight}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">Tamamlandı: {project.endDate}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>İlerleme</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </>
        ) : (
          /* Project Detail View */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setSelectedProject(null)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Projelere Dön
              </Button>
            </div>

            {selectedProjectData && (
              <>
                {/* Project Header */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{selectedProjectData.name}</CardTitle>
                        <CardDescription className="text-lg">{selectedProjectData.client}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(selectedProjectData.status)} text-white`}>
                        {getStatusText(selectedProjectData.status)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{selectedProjectData.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Package className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Toplam Ağırlık</p>
                        <p className="font-semibold">{selectedProjectData.totalWeight}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Truck className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Ekipman Sayısı</p>
                        <p className="font-semibold">{selectedProjectData.equipmentCount}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Users className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Ekip Büyüklüğü</p>
                        <p className="font-semibold">{selectedProjectData.teamSize} kişi</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm text-gray-600">Süre</p>
                        <p className="font-semibold">
                          {selectedProjectData.startDate} - {selectedProjectData.endDate}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Genel İlerleme</span>
                        <span>{selectedProjectData.progress}%</span>
                      </div>
                      <Progress value={selectedProjectData.progress} className="h-3" />
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Milestones */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-yellow-600" />
                        <span>Proje Aşamaları</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedProjectData.milestones.map((milestone, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            {getMilestoneIcon(milestone.status)}
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{milestone.name}</p>
                              <p className="text-sm text-gray-600">{milestone.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Updates */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="h-5 w-5 text-yellow-600" />
                        <span>Son Güncellemeler</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedProjectData.recentUpdates.map((update, index) => (
                          <div key={index} className="border-l-2 border-yellow-400 pl-4">
                            <p className="text-sm text-gray-900">{update.message}</p>
                            <p className="text-xs text-gray-500">{update.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
  function StatCard({
  title,
  value,
  Icon,
  accentFrom,
  accentTo,
  delay = 0,
}: {
  title: string
  value: React.ReactNode
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  accentFrom: string
  accentTo: string
  delay?: number
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10
                 bg-gradient-to-br from-slate-900 to-slate-800 text-white
                 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-amber-600/20
                 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* hover’da sağa kayan parlama */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%]
                   transition-transform duration-700 ease-out
                   bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      {/* sıcak vurgu (hover’da belirgin) */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-r ${accentFrom} ${accentTo}`}
      />
      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-2xl shadow-xl transition-all duration-300
                           group-hover:scale-110 group-hover:rotate-6
                           bg-gradient-to-br ${accentFrom} ${accentTo}`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div className="animate-float-slow">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white/90">{value}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

}

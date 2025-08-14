"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Truck, Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const router = useRouter()

  const backgroundImages = ["/yilnak3.webp", "/yilnak1.jpg", "/yilnak2.jpeg" ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (email === "customer@customer.com" && password === "123456") {
      localStorage.setItem("customerAuth", "true")
      localStorage.setItem("customerEmail", email)
      router.push("/dashboard")
    } else {
      setError("Geçersiz email veya şifre")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          
          <h1 className="relative text-4xl font-bold font-serif bg-gradient-to-r from-yellow-900 via-gray-900 to-black bg-clip-text text-transparent">
<span className="absolute inset-0 bg-yellow-50/60 rounded-lg px-4 -z-10 h-11"></span>
  YılNak Lojistik
</h1>


          <p className="text-white text-lg font-medium">Müşteri Portalı</p>
          <p className="text-white/80 text-sm mt-1">1973'ten beri güvenilir ortağınız</p>
        </div>

     <Card className="backdrop-blur-sm bg-black/60 border-0 shadow-2xl text-white">
  <CardHeader className="space-y-1 pb-6">
    <CardTitle className="text-2xl font-semibold text-center text-white font-serif">
      Hoş Geldiniz
    </CardTitle>
    <CardDescription className="text-center text-gray-200">
      Lojistik hizmetlerinizi yönetmek için giriş yapın
    </CardDescription>
  </CardHeader>

  <CardContent>
    <form onSubmit={handleLogin} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-white">
          Email Adresiniz
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
          <Input
            id="email"
            type="email"
            placeholder="email@sirketiniz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 border-gray-400 bg-white/10 text-white placeholder-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium text-white">
          Şifreniz
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 w-4 h-4" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-12 border-gray-400 bg-white/10 text-white placeholder-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-gray-100"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="text-red-400 text-sm text-center bg-red-900/40 p-3 rounded-lg border border-red-500/50">
          {error}
        </div>
      )}

      <div className="bg-yellow-500/20 p-4 rounded-lg border border-yellow-400">
        <p className="text-sm text-yellow-200 font-medium mb-2">Demo Giriş Bilgileri:</p>
        <div className="space-y-1">
          <p className="text-sm text-yellow-100">
            <strong>Email:</strong> customer@customer.com
          </p>
          <p className="text-sm text-yellow-100">
            <strong>Şifre:</strong> 123456
          </p>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium shadow-lg hover:shadow-xl transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            <span>Giriş yapılıyor...</span>
          </div>
        ) : (
          "Portala Giriş Yap"
        )}
      </Button>
    </form>
  </CardContent>
</Card>


        <div className="text-center mt-8 text-sm text-white/80">
          © 2024 YılNak Lojistik. 1973'ten beri güvenilir hizmet.
        </div>
      </div>
    </div>
  )
}

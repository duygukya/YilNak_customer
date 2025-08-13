"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface AuthWrapperProps {
  children: React.ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated")
      const role = localStorage.getItem("userRole")
      const isAuth = authStatus === "true"

      setIsAuthenticated(isAuth)
      setUserRole(role)

      if (pathname.startsWith("/admin")) {
        if (!isAuth || role !== "admin") {
          router.push("/login")
          return
        }
      }

      // If not authenticated and not on login page, redirect to login
      if (!isAuth && pathname !== "/login") {
        router.push("/login")
      }
      // If authenticated and on login page, redirect based on role
      else if (isAuth && pathname === "/login") {
        if (role === "admin") {
          router.push("/admin")
        } else {
          router.push("/")
        }
      }
    }

    checkAuth()
  }, [router, pathname])

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-blue-600 font-medium">Yükleniyor...</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

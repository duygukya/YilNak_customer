"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface CustomerAuthWrapperProps {
  children: React.ReactNode
}

export default function CustomerAuthWrapper({ children }: CustomerAuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem("customerAuth")
      const isLoggedIn = auth === "true"
      setIsAuthenticated(isLoggedIn)

      if (!isLoggedIn && pathname !== "/login") {
        router.push("/login")
      } else if (isLoggedIn && pathname === "/login") {
        router.push("/dashboard")
      }
    }

    checkAuth()
  }, [pathname, router])

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  if (!isAuthenticated && pathname !== "/login") {
    return null
  }

  return <>{children}</>
}

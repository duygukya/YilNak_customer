"use client"

import type React from "react"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("userEmail")
    router.push("/login")
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="border-b bg-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between p-4">
            <div></div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              <span>Çıkış</span>
            </Button>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}

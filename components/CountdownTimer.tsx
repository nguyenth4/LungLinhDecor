'use client'
// components/CountdownTimer.tsx
// Đồng hồ đếm ngược Flash Sale — tạo cảm giác cấp bách để mua hàng

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  label?: string
}

export default function CountdownTimer({ label = 'Flash Sale kết thúc sau' }: CountdownTimerProps) {
  // Tạo thời gian kết thúc ngẫu nhiên trong 2-6 tiếng tới
  const [endTime] = useState(() => {
    const now = Date.now()
    const hoursLeft = 2 + Math.floor(Math.random() * 4)
    const minsLeft = Math.floor(Math.random() * 60)
    return now + hoursLeft * 3600000 + minsLeft * 60000
  })

  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endTime - Date.now())
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ h, m, s })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [endTime])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl px-4 py-3">
      <div className="text-red-500 text-xl animate-pulse">⏰</div>
      <div className="flex-1">
        <p className="text-red-700 font-bold text-sm">{label}</p>
        <div className="flex items-center gap-1.5 mt-1">
          {[
            { value: timeLeft.h, label: 'giờ' },
            { value: timeLeft.m, label: 'phút' },
            { value: timeLeft.s, label: 'giây' },
          ].map((unit, i) => (
            <div key={unit.label} className="flex items-center gap-1">
              {i > 0 && <span className="text-red-400 font-black text-lg">:</span>}
              <div className="bg-red-500 text-white font-black text-lg px-2 py-0.5 rounded-lg min-w-[2.5rem] text-center font-mono">
                {pad(unit.value)}
              </div>
              <span className="text-red-400 text-xs font-medium">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

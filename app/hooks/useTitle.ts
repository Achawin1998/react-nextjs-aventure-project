'use client'
 import { useRef , useEffect } from "react"

 export const useTitle = (title: string) => {
    const defaultTitle = useRef<string>(document.title)

    useEffect(() => {
        document.title = title || defaultTitle.current // เวลาเข้าหน้าไหนจะเปลี่ยนชื่อตรงข้าง ๆ icon tab
    },[title])
 }
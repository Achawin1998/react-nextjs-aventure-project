'use client'

// หน้านี้เอาไว้แสดงข้อมูล

import { FC } from "react";
import { useLocation } from "wouter";
import { Heroes } from "../interfaces";

type HeroesItemProps = { // เอามาเก็บตัว Heroes จาก interfaces
    heroesProps: Heroes // ทำแบบนี้เพราะจเอาไปใช้กับ components
}


export const HeroesItem: FC<HeroesItemProps>  = ({ heroesProps  }) => {
    const { hero , img } = heroesProps ; // ดึงค่าที่ถูกส่งมาอันนี้้ดึงแค่ 2 ตัวพอ จริง ๆ มีทั้งหมด 6 ตัวตามในข้อมูล json
    const [ , setLocation] = useLocation(); // ใช้ในการย้ายหน้าถ้าคลิก hero ถ้าใช้ next-js ใช้ Link ก็ได้

    const containerClass = 'flex items-center gap-3 bg-blue-700 w-40 rounded-md hover:bg-blue-800 cursor-pointer p-3 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'

    return (
        <div className={containerClass}
        onClick={() => setLocation(`/heroes/${hero}`)}
        >
        
        <img src={img} className="h-12" alt={hero} loading="lazy" />
        <p className="text-gray-100 overflow-hidden whitespace-nowrap text-ellipsis font-mono text-lg">
            {hero}
        </p>
        </div>
    )

}
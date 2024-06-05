'use client'
import { useHeroes } from "../hooks/useHeroes" // เป็นการสร้าง custom hooks แล้วเอามาใช้
import { HeroesItem } from "./HeroesItem";

export const HeroesList = () => {
    const { loading , heroes} = useHeroes(); // เอาข้อมูลจาก hooks มาดึงค่า

    return (
        <div className="bg-gray-800 min-h-screen p-3">
            <h1 className="font-semibold text-white font-mono text-3xl text-center p-4">
                Heroes
            </h1>
            <div className="flex gap-4 lg:gap-6 flex-wrap justify-center">
                {loading ? (
                    <p>Loading...</p>
                ): (
                    heroes.map((data , index) => <HeroesItem key={index} heroes={data} />)  
                )}
                {/* ส่งค่าไปยังอีก components ที่เอาไว้แสดง Listheroes  */}
            </div>
        </div>
    )

}
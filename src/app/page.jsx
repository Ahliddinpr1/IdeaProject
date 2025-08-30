"use client";
import Btn from "@/components/btn";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Найдите Лучший Учебный Центр Для Себя
        </h1>
        <p className="mt-4 max-w-2xl text-gray-300 text-lg">
          Наш сервис собирает все учебные центры в одном месте. Сравнивайте,
          выбирайте и находите подходящие курсы для вашего развития и обучения.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/Courses">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md">
              Начать Поиск
            </button>
          </Link>
          <Link href="/About">
            <button className="bg-black border border-gray-600 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md shadow-md">
              Узнать Больше
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Всё, что нужно для выбора центра
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Мы предоставляем все инструменты, чтобы легко находить, сравнивать и
          выбирать учебные центры.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-left shadow-md border border-gray-200 hover:shadow-lg transition">
            <div className="text-green-600 text-3xl mb-4">📚</div>
            <h3 className="text-lg font-bold text-gray-800">
              Найдите нужный курс
            </h3>
            <p className="mt-2 text-gray-600">
              Сравнивайте десятки учебных центров и выбирайте курс, который
              подходит именно вам.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-left shadow-md border border-gray-200 hover:shadow-lg transition">
            <div className="text-green-600 text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold text-gray-800">Удобные фильтры</h3>
            <p className="mt-2 text-gray-600">
              Фильтруйте учебные центры по городу, категории и стоимости, чтобы
              быстрее найти подходящий вариант.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-left shadow-md border border-gray-200 hover:shadow-lg transition">
            <div className="text-green-600 text-3xl mb-4">🏫</div>
            <h3 className="text-lg font-bold text-gray-800">
              Большой каталог заведений
            </h3>
            <p className="mt-2 text-gray-600">
              В нашей базе собраны десятки учебных заведений по всей стране —
              выбирайте центр поблизости или в любом городе.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

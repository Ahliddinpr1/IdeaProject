import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-200 text-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">О нашей платформе</h1>
      <p className="text-lg md:text-xl max-w-2xl text-center mb-6">
        Добро пожаловать на нашу платформу! Здесь собрана полная коллекция учебных
        заведений, включая школы, колледжи и учебные центры по всей стране. Наша
        цель — сделать процесс поиска и изучения образовательных возможностей
        простым и удобным для студентов и родителей.
      </p>
      <p className="text-md md:text-lg max-w-xl text-center mb-6">
        Платформа создана с использованием современных веб-технологий, она быстрая,
        адаптивная и удобная для пользователей. Вы можете просматривать заведения,
        фильтровать по категориям и получать всю необходимую информацию для
        принятия решений об образовании.
      </p>
      <p className="text-md md:text-lg max-w-xl text-center">
        Мы постоянно обновляем базу данных, добавляя новые учебные заведения и
        функции, чтобы пользователи всегда имели доступ к актуальным образовательным
        ресурсам.
      </p>
    </div>
  )
}

export default About
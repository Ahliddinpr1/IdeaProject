import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-green-600">📚 I want Study</h3>
          <p className="mt-3 text-gray-600">
            Каталог учебных заведений, курсов и спортивных секций по всей
            стране. Находите, сравнивайте и выбирайте лучшее.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Навигация</h4>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="/Courses"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Курсы
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-green-600 transition"
              >
                Добавить центр
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Контакты</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>📍 Душанбе, Таджикистан</li>
            <li>📧 support@iwantstudy.com</li>
            <li>📞 +992 999 44 29 77</li>
          </ul>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-green-600 transition">
              🌐
            </a>
            <a href="#" className="hover:text-green-600 transition">
              📘
            </a>
            <a href="#" className="hover:text-green-600 transition">
              📸
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} I want Study. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;

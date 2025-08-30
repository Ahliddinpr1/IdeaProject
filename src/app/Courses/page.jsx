"use client";
import axios from "axios";
import { useEffect, useState } from "react";
let api = "http://localhost:4000";

export default function Courses() {
  const [filteredCourses, setFilteredCourses] = useState([]);

  const [courses, setCourses] = useState([]);
  async function get() {
    let { data } = await axios.get(`${api}/courses`);
    setCourses(data);
    setFilteredCourses(data);
  }

  const [categories, setCategories] = useState([]);
  async function getCategories() {
    let { data } = await axios.get(`${api}/categories`);
    setCategories(data);
  }

  const [subcategories, setSubcategories] = useState([]);
  async function getSubcategories() {
    let { data } = await axios.get(`${api}/subcategories`);
    setSubcategories(data);
  }

  const [cities, setCities] = useState([]);
  async function getCities() {
    let { data } = await axios.get(`${api}/cities`);
    setCities(data);
  }

  useEffect(() => {
    get();
    getCategories();
    getSubcategories();
    getCities();
  }, []);

  let [search, setSearch] = useState("");
  let [filterCategory, setFilterCategory] = useState("");
  let [filterSubcategory, setFilterSubcategory] = useState("");
  let [filterCity, setFilterCity] = useState("");
  let [filterPrice, setFilterPrice] = useState(2000);

  function handleFilter(e) {
    e.preventDefault();
    let filtered = courses.filter((c) => {
      return (
        (search ? c.name.toLowerCase().includes(search.toLowerCase()) : true) &&
        (filterCategory ? c.category === filterCategory : true) &&
        (filterSubcategory ? c.subcategory === filterSubcategory : true) &&
        (filterCity ? c.city === filterCity : true) &&
        (filterPrice ? c.price <= filterPrice : true)
      );
    });
    setFilteredCourses(filtered);
  }

  return (
    <section className="min-h-screen bg-gray-100 p-8 flex items-start justify-between">
      <aside>
        <form
          onSubmit={handleFilter}
          className="flex flex-col gap-4 p-4 bg-white rounded-2xl shadow-lg w-75"
        >
          <input
            type="text"
            className="outline-0 text-xl p-2 border rounded-xl"
            name="search"
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <select
            name="selectCategory"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="outline-0 p-2 border rounded-xl"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            name="selectSubcategory"
            value={filterSubcategory}
            onChange={(e) => setFilterSubcategory(e.target.value)}
            className="outline-0 p-2 border rounded-xl"
          >
            {subcategories.map((subcategory) => (
              <option key={subcategory.id} value={subcategory.name}>
                {subcategory.name}
              </option>
            ))}
          </select>
          <select
            name="selectCity"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="outline-0 p-2 border rounded-xl"
          >
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          <input
            type="range"
            name="price"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="accent-green-500"
            min={0}
            max={2000}
          />
          <p>Price: {filterPrice}</p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setFilterCategory("");
              setFilterSubcategory("");
              setFilterCity("");
              setFilterPrice(2000);
              setFilteredCourses(courses);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Return All
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
          >
            Filter
          </button>
        </form>
      </aside>
      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          return (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-green-600 mb-2">
                {course.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Категория:</span>{" "}
                {course.category}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Подкатегория:</span>{" "}
                {course.subcategory}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Город:</span> {course.city}
              </p>
              <p className="text-gray-700 text-sm mb-3">{course.description}</p>
              <p className="text-sm text-gray-600 mb-2">📍 {course.location}</p>
              <a
                href={course.website}
                target="_blank"
                className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
              >
                🔗 Перейти
              </a>
            </div>
          );
        })}
      </aside>
    </section>
  );
}

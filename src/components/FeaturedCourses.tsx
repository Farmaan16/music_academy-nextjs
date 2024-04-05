"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { cn } from "@/utils/cn";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured === true
  );

  return (
    <div className="py-12 bg-neutral-950">
      <div>
        <div className="text-center">
          <h2 className="text-base text-cyan-700  font-bold tracking-wide uppercase">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-stone-300 sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full overflow-hidden">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-stone-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-stone-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/Courses/${course.slug}`}>Learn More </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href="/Courses"
          className="text-stone-300 font-bold uppercase text-xs border border-stone-200 rounded-3xl p-3 hover:bg-neutral-900 hover:text-stone-100 transition duration-200 "
        >
          {" "}
          view all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;

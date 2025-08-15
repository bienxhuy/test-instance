import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Selenium WebDriver Fundamentals',
      description: 'Master the basics of Selenium WebDriver with hands-on exercises and real-world examples.',
      duration: '8 weeks',
      students: '2,450',
      rating: 4.8,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Free'
    },
    {
      title: 'Advanced Cypress Testing',
      description: 'Deep dive into Cypress for modern web application testing with advanced patterns.',
      duration: '6 weeks',
      students: '1,890',
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$99'
    },
    {
      title: 'API Testing with Postman & Newman',
      description: 'Comprehensive guide to API testing, automation, and integration with CI/CD pipelines.',
      duration: '4 weeks',
      students: '3,200',
      rating: 4.7,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$79'
    },
    {
      title: 'Playwright End-to-End Testing',
      description: 'Learn Microsoft Playwright for reliable end-to-end testing across all browsers.',
      duration: '5 weeks',
      students: '1,560',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$89'
    },
    {
      title: 'Test Automation Framework Design',
      description: 'Build scalable, maintainable test automation frameworks from scratch.',
      duration: '10 weeks',
      students: '980',
      rating: 4.9,
      level: 'Expert',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$149'
    },
    {
      title: 'CI/CD for Test Automation',
      description: 'Integrate your tests with Jenkins, GitHub Actions, and other CI/CD tools.',
      duration: '3 weeks',
      students: '2,100',
      rating: 4.6,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$69'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of test automation courses, 
            designed by industry experts and updated regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600">
                    {course.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button id = {`enroll-button-${index}`} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                  <span>Enroll Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
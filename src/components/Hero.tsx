import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Test
                <span className="text-blue-600 block">Automation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn modern test automation techniques, tools, and best practices. 
                From beginner to expert, we'll guide you through your automation journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button id = 'start-learning-button' className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                <span>Start Learning</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button id = 'watch-demo-button' className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {[
                'Selenium WebDriver',
                'Cypress',
                'Playwright',
                'API Testing',
                'CI/CD Integration'
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <div className="space-y-2">
                    <div>$ npm install selenium-webdriver</div>
                    <div>$ npm test</div>
                    <div className="text-green-300">✓ Login test passed</div>
                    <div className="text-green-300">✓ Navigation test passed</div>
                    <div className="text-green-300">✓ Form submission test passed</div>
                    <div className="text-blue-300">Tests: 3 passed, 3 total</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
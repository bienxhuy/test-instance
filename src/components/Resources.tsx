import React from 'react';
import { BookOpen, Download, ExternalLink, FileText, Video, Code } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
      resources: [
        { name: 'Selenium WebDriver Guide', type: 'PDF', downloads: '15.2k' },
        { name: 'Cypress Best Practices', type: 'PDF', downloads: '8.9k' },
        { name: 'API Testing Checklist', type: 'PDF', downloads: '12.1k' },
        { name: 'Test Automation Patterns', type: 'PDF', downloads: '6.7k' }
      ]
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      color: 'bg-red-100 text-red-600',
      resources: [
        { name: 'Getting Started with Playwright', type: 'Video', downloads: '25.3k' },
        { name: 'Advanced Selenium Techniques', type: 'Video', downloads: '18.7k' },
        { name: 'CI/CD Integration Workshop', type: 'Video', downloads: '14.2k' },
        { name: 'Mobile Testing Fundamentals', type: 'Video', downloads: '11.8k' }
      ]
    },
    {
      title: 'Code Examples',
      icon: Code,
      color: 'bg-green-100 text-green-600',
      resources: [
        { name: 'Selenium Java Framework', type: 'GitHub', downloads: '9.4k' },
        { name: 'Cypress TypeScript Examples', type: 'GitHub', downloads: '7.2k' },
        { name: 'REST API Test Suite', type: 'GitHub', downloads: '5.8k' },
        { name: 'Page Object Model Templates', type: 'GitHub', downloads: '13.1k' }
      ]
    }
  ];

  const tools = [
    {
      name: 'Selenium WebDriver',
      description: 'Browser automation framework for web applications',
      logo: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Web Testing'
    },
    {
      name: 'Cypress',
      description: 'Fast, easy and reliable testing for anything that runs in a browser',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'E2E Testing'
    },
    {
      name: 'Playwright',
      description: 'Reliable end-to-end testing for modern web apps',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Cross-browser'
    },
    {
      name: 'Postman',
      description: 'API development and testing platform',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'API Testing'
    },
    {
      name: 'TestNG',
      description: 'Testing framework for Java applications',
      logo: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Framework'
    },
    {
      name: 'Jenkins',
      description: 'Open source automation server for CI/CD',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'CI/CD'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of guides, tutorials, and tools to accelerate your test automation journey.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div>
                          <p className="font-medium text-gray-900">{resource.name}</p>
                          <p className="text-sm text-gray-500">{resource.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{resource.downloads}</span>
                        <Download className="h-4 w-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Popular Tools */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Testing Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-start space-x-4">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {tool.name}
                      </h4>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tool.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
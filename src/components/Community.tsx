import React from 'react';
import { MessageCircle, Users, Calendar, Award, TrendingUp, Heart } from 'lucide-react';

const Community = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '25,000+', color: 'text-blue-600' },
    { icon: MessageCircle, label: 'Discussions', value: '15,000+', color: 'text-green-600' },
    { icon: Calendar, label: 'Events Monthly', value: '20+', color: 'text-purple-600' },
    { icon: Award, label: 'Certifications', value: '5,000+', color: 'text-orange-600' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior QA Engineer at TechCorp',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'The community here is incredible. I\'ve learned more in 6 months than I did in years of self-study. The mentorship program connected me with industry experts.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Test Automation Lead at StartupXYZ',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'From beginner to leading a team of 8 automation engineers. The structured learning path and hands-on projects made all the difference in my career.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'DevOps Engineer at CloudTech',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'The CI/CD integration course was a game-changer. Now I\'m implementing test automation pipelines that have reduced our deployment time by 70%.',
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      title: 'Selenium 4 New Features Workshop',
      date: 'March 15, 2024',
      time: '2:00 PM EST',
      attendees: 245,
      type: 'Workshop'
    },
    {
      title: 'API Testing Best Practices Webinar',
      date: 'March 22, 2024',
      time: '1:00 PM EST',
      attendees: 189,
      type: 'Webinar'
    },
    {
      title: 'Monthly Community Meetup',
      date: 'March 28, 2024',
      time: '6:00 PM EST',
      attendees: 156,
      type: 'Meetup'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow automation engineers, share knowledge, and grow together in a supportive environment.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-4`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              Success Stories
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{testimonial.content}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calendar className="h-6 w-6 text-blue-600 mr-2" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-gray-900 text-lg">{event.title}</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="space-y-1">
                      <p className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </p>
                      <p className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {event.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{event.attendees}</p>
                      <p className="text-xs">registered</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Join Our Discord</h4>
              <p className="mb-4 opacity-90">
                Get instant help, share your projects, and connect with 25,000+ automation engineers.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
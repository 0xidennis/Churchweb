import React from 'react'
import { 
    Heart, 
    Users, 
    Calendar, 
    MapPin, 
    Phone, 
    Mail, 
    Menu, 
    X, 
    Youtube, 
    Facebook, 
    Instagram,
    CreditCard,
    User,
    Lock,
  } from 'lucide-react';
import { useState } from 'react';


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('offering');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleDonation = (e) => {
    e.preventDefault();
    // In a real implementation, this would integrate with a payment processor like Stripe
    alert(`Thank you for your ${donationType} of $${donationAmount}! This would normally process through a secure payment gateway.`);
    setIsDonationOpen(false);
    setDonationAmount('');
    setCardDetails({ number: '', expiry: '', cvv: '', name: '' });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };
  return (
    <div className="min-h-screen bg-white overflow-y-auto ">
      {/* Navigation */}
      <nav className="bg-white/50 shadow-lg   z-50  fixed top-0 left-0 w-full backdrop-blur-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Heart className="h-8 w-8 text-blue-600 mr-2" />
                <span className="font-bold text-xl text-gray-900">Grace</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#events" className="text-gray-700 hover:text-blue-600 transition-colors">Events</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button 
                onClick={() => setIsDonationOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Give
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
                <a href="#events" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Events</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
                <button 
                  onClick={() => {setIsDonationOpen(true); setIsMenuOpen(false);}}
                  className="block w-full text-left px-3 py-2 text-blue-600 font-medium"
                >
                  Give
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to Our
              <span className="block text-yellow-400">Faith Community</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in worship, fellowship, and service as we grow together in faith and love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
                Join Us Sunday
              </button>
              <button 
                onClick={() => setIsDonationOpen(true)}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all"
              >
                Support Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex justify-center lg:space-x-6  space-x-2">
              <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-white hover:bg-gray-100 text-red-400 px-2 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Youtube className="h-6 w-6 text-red-400" />
                <span className="font-medium ">YouTube</span>
              </a>
              <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Facebook className="h-6 w-6 text-white" />
                <span className="font-medium text-white">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-2 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                <Instagram className="h-6 w-6 text-white" />
                <span className="font-medium text-white">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our Church</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a vibrant community of believers dedicated to spreading God's love and serving our neighbors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-shadow">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">Building lasting relationships and supporting one another through life's journey</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-shadow">
              <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Worship</h3>
              <p className="text-gray-600">Celebrating God's goodness through music, prayer, and heartfelt worship</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-shadow">
              <Users className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service</h3>
              <p className="text-gray-600">Making a difference in our community through acts of love and service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Times</h2>
            <p className="text-xl text-gray-600">Join us for worship and fellowship</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunday Worship</h3>
                <p className="text-gray-600 mb-4">Main worship service with music and message</p>
                <div className="text-3xl font-bold text-blue-600">9:00 AM & 11:00 AM</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Wednesday Bible Study</h3>
                <p className="text-gray-600 mb-4">Deep dive into God's word together</p>
                <div className="text-3xl font-bold text-green-600">7:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these special gatherings</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Community Outreach", date: "Oct 15", description: "Serving our local community with food and fellowship" },
              { title: "Youth Conference", date: "Oct 22", description: "Special weekend event for teens and young adults" },
              { title: "Harvest Festival", date: "Oct 29", description: "Family-friendly celebration with games and activities" }
            ].map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-orange-600 font-bold text-sm mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300">We'd love to hear from you</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-300">123 Faith Street<br />Your City, State 12345</p>
            </div>
            
            <div className="text-center">
              <Phone className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-300">(555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@gracechurch.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="font-bold">Grace Community Church</span>
            </div>
            <p className="text-gray-400">© 2024 Grace Community Church. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Donation Modal */}
      {isDonationOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Support Our Ministry</h2>
                <button 
                  onClick={() => setIsDonationOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleDonation} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Type
                  </label>
                  <select 
                    value={donationType}
                    onChange={(e) => setDonationType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="offering">Offering</option>
                    <option value="tithe">Tithe</option>
                    <option value="building-fund">Building Fund</option>
                    <option value="missions">Missions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button type="button" onClick={() => setDonationAmount('25')} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">$25</button>
                  <button type="button" onClick={() => setDonationAmount('50')} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">$50</button>
                  <button type="button" onClick={() => setDonationAmount('100')} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">$100</button>
                  <button type="button" onClick={() => setDonationAmount('250')} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg">$250</button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-1" />
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <CreditCard className="inline h-4 w-4 mr-1" />
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: formatCardNumber(e.target.value)})}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-1" />
                      Expiry
                    </label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: formatExpiry(e.target.value)})}
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Lock className="inline h-4 w-4 mr-1" />
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                      placeholder="123"
                      maxLength="4"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 mt-4">
                  <Lock className="h-4 w-4 mr-2" />
                  Your payment information is secure and encrypted
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors mt-6"
                  disabled={!donationAmount || !cardDetails.name || !cardDetails.number || !cardDetails.expiry || !cardDetails.cvv}
                >
                  Donate ${donationAmount || '0.00'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
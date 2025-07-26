import React, { useState, useEffect } from 'react';
import { Upload, X, ShoppingBag, Star, Eye, Trash2, Heart, Share2, Filter, Search, Phone, Mail, MapPin, Clock, Award, Sparkles } from 'lucide-react';

const CarpetShowcase = () => {
  const [carpets, setCarpets] = useState([
    {
      id: 1,
      name: "Royal Persian Masterpiece",
      category: "Traditional",
      price: "₹85,000",
      originalPrice: "₹1,20,000",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='persian-bg' cx='50%25' cy='50%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23800020'/%3E%3Cstop offset='100%25' stop-color='%234A0E0E'/%3E%3C/radialGradient%3E%3Cpattern id='persian-detail' patternUnits='userSpaceOnUse' width='60' height='60'%3E%3Crect width='60' height='60' fill='url(%23persian-bg)'/%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%23DAA520' stroke-width='2' opacity='0.8'/%3E%3Cpath d='M30,15 Q40,25 30,35 Q20,25 30,15' fill='%23FFD700' opacity='0.9'/%3E%3Cpath d='M15,30 Q25,20 35,30 Q25,40 15,30' fill='%23DAA520' opacity='0.7'/%3E%3Ccircle cx='30' cy='30' r='5' fill='%23FFD700'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23persian-detail)'/%3E%3C/svg%3E",
      rating: 4.9,
      reviews: 127,
      tags: ["Handwoven", "Silk", "Antique"],
      isNew: false,
      isBestseller: true
    },
    {
      id: 2,
      name: "Ultra Modern Geometric Wave",
      category: "Contemporary",
      price: "₹45,000",
      originalPrice: "₹65,000",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='modern-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23667eea'/%3E%3Cstop offset='50%25' stop-color='%23764ba2'/%3E%3Cstop offset='100%25' stop-color='%23f093fb'/%3E%3C/linearGradient%3E%3Cpattern id='waves' patternUnits='userSpaceOnUse' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23f8f9fa'/%3E%3Cpath d='M0,40 Q20,20 40,40 T80,40' stroke='url(%23modern-grad)' stroke-width='4' fill='none'/%3E%3Cpath d='M0,20 Q20,0 40,20 T80,20' stroke='url(%23modern-grad)' stroke-width='2' fill='none' opacity='0.6'/%3E%3Cpath d='M0,60 Q20,40 40,60 T80,60' stroke='url(%23modern-grad)' stroke-width='3' fill='none' opacity='0.8'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23waves)'/%3E%3C/svg%3E",
      rating: 4.7,
      reviews: 89,
      tags: ["Machine Made", "Synthetic", "Contemporary"],
      isNew: true,
      isBestseller: false
    },
    {
      id: 3,
      name: "Himalayan Luxury Shag",
      category: "Premium",
      price: "₹1,25,000",
      originalPrice: "₹1,80,000",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='luxury-grad' cx='50%25' cy='50%25' r='60%25'%3E%3Cstop offset='0%25' stop-color='%23f7f1e3'/%3E%3Cstop offset='100%25' stop-color='%23c9a96e'/%3E%3C/radialGradient%3E%3Cfilter id='luxury-texture' x='0%25' y='0%25' width='100%25' height='100%25'%3E%3CfeTurbulence baseFrequency='0.02 0.02' numOctaves='4' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.8 0 0 0 0 0.7 0 0 0 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23luxury-grad)'/%3E%3Crect width='400' height='300' fill='%23deb887' filter='url(%23luxury-texture)' opacity='0.4'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23f4e4bc' opacity='0.3'/%3E%3Ccircle cx='300' cy='200' r='40' fill='%23e6d3a3' opacity='0.2'/%3E%3C/svg%3E",
      rating: 5.0,
      reviews: 156,
      tags: ["Hand-knotted", "Tibetan Wool", "Luxury"],
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      name: "Vintage Rose Garden",
      category: "Classic",
      price: "₹55,000",
      originalPrice: "₹75,000",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='rose-bg' cx='50%25' cy='50%25' r='80%25'%3E%3Cstop offset='0%25' stop-color='%23fdf2f8'/%3E%3Cstop offset='100%25' stop-color='%23f1e8d4'/%3E%3C/radialGradient%3E%3Cpattern id='roses' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Crect width='100' height='100' fill='url(%23rose-bg)'/%3E%3Cg transform='translate(50,50)'%3E%3Ccircle r='25' fill='none' stroke='%23a3744d' stroke-width='1' opacity='0.4'/%3E%3Cpath d='M0,-15 Q8,-8 0,0 Q-8,-8 0,-15' fill='%23ec4899' opacity='0.8'/%3E%3Cpath d='M15,0 Q8,8 0,0 Q8,-8 15,0' fill='%23f472b6' opacity='0.7'/%3E%3Cpath d='M0,15 Q-8,8 0,0 Q8,8 0,15' fill='%23f9a8d4' opacity='0.6'/%3E%3Cpath d='M-15,0 Q-8,-8 0,0 Q-8,8 -15,0' fill='%23fbb6ce' opacity='0.5'/%3E%3Ccircle r='3' fill='%23fcd34d'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23roses)'/%3E%3C/svg%3E",
      rating: 4.8,
      reviews: 203,
      tags: ["Traditional", "Floral", "Vintage"],
      isNew: false,
      isBestseller: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isUploading, setIsUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [likedItems, setLikedItems] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ['All', 'Traditional', 'Contemporary', 'Premium', 'Classic'];

  // Auto-sliding hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setIsUploading(true);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newCarpet = {
          id: Date.now() + Math.random(),
          name: file.name.split('.')[0] || "New Luxury Carpet",
          category: "Premium",
          price: "₹0",
          originalPrice: "₹0",
          image: e.target.result,
          rating: 0,
          reviews: 0,
          tags: ["New", "Custom"],
          isNew: true,
          isBestseller: false
        };
        setCarpets(prev => [...prev, newCarpet]);
      };
      reader.readAsDataURL(file);
    });

    setTimeout(() => setIsUploading(false), 1500);
    event.target.value = '';
  };

  const deleteCarpet = (id) => {
    setCarpets(prev => prev.filter(carpet => carpet.id !== id));
  };

  const toggleLike = (id) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredCarpets = carpets.filter(carpet => {
    const matchesCategory = selectedCategory === 'All' || carpet.category === selectedCategory;
    const matchesSearch = carpet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         carpet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const heroSlides = [
    {
      title: "Luxury Redefined",
      subtitle: "Premium Persian & Designer Carpets",
      bg: "from-purple-900 via-rose-900 to-pink-900"
    },
    {
      title: "Timeless Elegance",
      subtitle: "Handcrafted Masterpieces Since 1985",
      bg: "from-amber-900 via-orange-900 to-red-900"
    },
    {
      title: "Modern Sophistication",
      subtitle: "Contemporary Designs for Today's Homes",
      bg: "from-blue-900 via-indigo-900 to-purple-900"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-gold-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-white font-bold text-lg">Mohit Enterprises</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white/90">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#collection" className="hover:text-white transition-colors">Collection</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
        <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bg} transition-all duration-1000`}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 leading-none">
              {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-2xl md:text-4xl text-white/80 font-light mb-12 animate-fade-in">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative group">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="hero-upload"
              />
              <label
                htmlFor="hero-upload"
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-gold-400 via-yellow-500 to-amber-600 text-black font-bold text-xl rounded-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 group-hover:from-yellow-300 group-hover:to-gold-500"
              >
                <Upload className="w-6 h-6 mr-3" />
                {isUploading ? 'Adding Magic...' : 'Add Your Collection'}
              </label>
            </div>
            
            <button className="px-12 py-6 border-2 border-white text-white font-bold text-xl rounded-2xl hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105">
              Explore Catalog
            </button>
          </div>
        </div>

        {/* Hero Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black py-12" id="collection">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search luxury carpets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-gold-400 to-amber-600 text-black shadow-lg'
                      : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Carpet Grid */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              Exquisite Collection
            </h2>
            <p className="text-xl text-gray-300">
              Each piece is a masterpiece of craftsmanship and luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCarpets.map((carpet, index) => (
              <div
                key={carpet.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-gold-500/20 transition-all duration-700 transform hover:-translate-y-4 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {carpet.isNew && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-600 text-black text-xs font-bold rounded-full shadow-lg animate-pulse">
                      NEW
                    </span>
                  )}
                  {carpet.isBestseller && (
                    <span className="px-3 py-1 bg-gradient-to-r from-gold-400 to-amber-600 text-black text-xs font-bold rounded-full shadow-lg">
                      ⭐ BESTSELLER
                    </span>
                  )}
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={carpet.image}
                    alt={carpet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => toggleLike(carpet.id)}
                      className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
                        likedItems.has(carpet.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(carpet.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 shadow-lg">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteCarpet(carpet.id)}
                      className="p-3 bg-red-500/80 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-all duration-300 shadow-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {carpet.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {carpet.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-lg border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  {carpet.rating > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(carpet.rating)
                                  ? 'text-gold-400 fill-current'
                                  : 'text-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-300">
                          {carpet.rating} ({carpet.reviews})
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-black bg-gradient-to-r from-gold-400 to-amber-600 bg-clip-text text-transparent">
                          {carpet.price}
                        </span>
                        {carpet.originalPrice !== carpet.price && (
                          <span className="text-sm text-gray-500 line-through">
                            {carpet.originalPrice}
                          </span>
                        )}
                      </div>
                      {carpet.originalPrice !== carpet.price && (
                        <span className="text-xs text-green-400 font-semibold">
                          Save {Math.round(((parseInt(carpet.originalPrice.replace(/[₹,]/g, '')) - parseInt(carpet.price.replace(/[₹,]/g, ''))) / parseInt(carpet.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                        </span>
                      )}
                    </div>
                    
                    <button className="px-6 py-3 bg-gradient-to-r from-gold-400 to-amber-600 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCarpets.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">No Results Found</h3>
              <p className="text-gray-400 text-lg">Try adjusting your search or browse our full collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Sparkles className="text-black w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Mohit Enterprises</h3>
                  <p className="text-gold-400">Luxury Since 1985</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transform your space with our exquisite collection of handcrafted carpets and premium wooden flooring. Every piece tells a story of unparalleled craftsmanship.
              </p>
              <div className="flex space-x-4">
                <Award className="w-6 h-6 text-gold-400" />
                <span className="text-gray-300">Award-winning designs</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">+91 94031 25819</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">website</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                  <span className="text-gray-300">Bhusari Colony , Paud Road Kothrud, Pune 411038</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">Mon-Sat: 10AM-8PM</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300">Get exclusive offers and new collection updates.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-gold-400 transition-all duration-300"
                />
                <button className="w-full px-6 py-3 bg-gradient-to-r from-gold-400 to-amber-600 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © Mohit Enterprises. All rights reserved. | Crafted with passion for luxury.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-gold-400 transition-colors">Warranty</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .text-gold-400 {
          color: #fbbf24;
        }
        
        .bg-gold-400 {
          background-color: #fbbf24;
        }
        
        .from-gold-400 {
          --tw-gradient-from: #fbbf24;
        }
        
        .to-gold-500 {
          --tw-gradient-to: #f59e0b;
        }
        
        .border-gold-400 {
          border-color: #fbbf24;
        }
        
        .shadow-gold-500\/20 {
          box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.2);
        }
        
        .shadow-gold-500\/50 {
          box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.5);
        }
        
        .hover\\:text-gold-400:hover {
          color: #fbbf24;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #f59e0b, #d97706);
        }
      `}</style>
    </div>
  );
};

export default CarpetShowcase;
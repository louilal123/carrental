// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  ShieldCheckIcon,
  ClockIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Find Your Perfect Ride, <br />
              <span className="text-amber-400">Anytime, Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Trusted by thousands. No hidden fees. Free cancellation.
            </p>

            {/* Search Widget - Core Feature */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {/* Location */}
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pick-up location"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Pick-up Date */}
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pick-up date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Return Date */}
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Return date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Age & Search */}
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <UserIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                      <option>Age 25+</option>
                      <option>21-24</option>
                      <option>18-20</option>
                    </select>
                  </div>
                  <button className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold px-4 py-3 rounded-lg flex items-center justify-center transition">
                    <MagnifyingGlassIcon className="h-5 w-5 md:mr-2" />
                    <span className="hidden md:inline">Search</span>
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-left">
                *Drivers under 25 may be subject to young driver fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <ShieldCheckIcon className="h-8 w-8 text-emerald-500" />
              <span className="font-medium">Fully Insured Fleet</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ClockIcon className="h-8 w-8 text-emerald-500" />
              <span className="font-medium">24/7 Roadside Assistance</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <BanknotesIcon className="h-8 w-8 text-emerald-500" />
              <span className="font-medium">No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>

<section className="container mx-auto px-4 py-12">
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-bold text-blue-900">Our Popular Fleet</h2>
    <Link to="/fleet" className="text-blue-600 hover:underline font-medium">
      View All →
    </Link>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Car Card 1 - Toyota Corolla */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <img
    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db0?w=600&auto=format&fit=crop"
    alt="Toyota Corolla"
    className="w-full h-48 object-cover"
  />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">Toyota Corolla</h3>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">Economy • 5 Seats • 2 Bags</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-900">₱2,500 <span className="text-sm font-normal text-gray-500">/day</span></span>
          <Link
            to="/fleet/1"
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>

    {/* Car Card 2 - Honda CR-V */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <img
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop"
        alt="Honda CR-V"
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">Honda CR-V</h3>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">SUV • 5 Seats • 3 Bags</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-900">₱4,200 <span className="text-sm font-normal text-gray-500">/day</span></span>
          <Link
            to="/fleet/2"
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>

    {/* Car Card 3 - BMW 3 Series (Deal) */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-amber-400 hover:shadow-lg transition relative">
      <div className="absolute top-3 right-3 bg-amber-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
        🔥 DEAL
      </div>
      <img
        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop"
        alt="BMW 3 Series"
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">BMW 3 Series</h3>
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
            Available
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">Luxury • 5 Seats • 2 Bags</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-900">₱5,500 <span className="text-sm font-normal text-gray-500">/day</span></span>
          <Link
            to="/fleet/3"
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
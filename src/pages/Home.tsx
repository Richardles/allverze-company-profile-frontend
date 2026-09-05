import { Link } from 'react-router-dom';

interface HomeProps {
  companyName?: string;
}

export default function Home({ companyName = 'Allverze Corporation' }: HomeProps) {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white px-6 py-16 sm:px-12 sm:py-24 shadow-2xl">
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-block px-3 py-1 bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider rounded-full border border-sky-400/30">
            Digital Transformation & Software
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Building next-generation digital experiences for <span className="text-sky-400">{companyName}</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl">
            We engineer high-performance web applications, scalable platforms, and cloud solutions designed to fuel modern business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl shadow-lg transition"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl">
            01
          </div>
          <h3 className="text-xl font-bold text-slate-900">Custom Engineering</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Tailored Web & App development built using modern technologies like React, TypeScript, and Vite.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl">
            02
          </div>
          <h3 className="text-xl font-bold text-slate-900">High Performance</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Optimized for maximum speed, accessibility, and sea-level responsiveness on every screen size.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold text-xl">
            03
          </div>
          <h3 className="text-xl font-bold text-slate-900">Enterprise Security</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Built-in protection against spam and security vulnerabilities right out of the box.
          </p>
        </div>
      </section>
    </div>
  );
}
const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'We build fast, secure, and scalable websites that turn your ideas into seamless digital experiences.',
    items: ['Responsive websites', 'Custom web applications', 'Performance & maintenance'],
  },
  {
    number: '02',
    title: 'UI/UX Design',
    description:
      'We create intuitive interfaces and thoughtful user journeys that make every interaction clear and memorable.',
    items: ['User research & strategy', 'Wireframes and prototypes', 'Visual design systems'],
  },
  {
    number: '03',
    title: 'Consulting',
    description:
      'We provide practical digital guidance to help your business choose the right direction and move forward with confidence.',
    items: ['Digital strategy', 'Technology recommendations', 'Product improvement'],
  },
];

export default function Service() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:px-10 lg:px-16 lg:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            What we do
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Services that move your business forward.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From strategy to launch, Allverze helps ambitious businesses build better digital products and experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <span className="text-sm font-semibold text-blue-600">{service.number}</span>
              <h2 className="mt-10 text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-700">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

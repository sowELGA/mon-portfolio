const formations = [
  {
    period: '2023 — 2026',
    title: 'Licence en Génie Logiciel',
    place: 'Université Dakar Bourguiba — Mention Très Bien, major de promotion',
  },
]

export default function Education() {
  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-600 mb-2">
            Formation
          </h2>
          <h3 className="text-3xl font-bold text-navy-900">Parcours académique</h3>
        </div>

        <div className="space-y-6">
          {formations.map((item) => (
            <div
              key={item.title}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-white border border-gray-200 rounded-lg p-6"
            >
              <span className="text-sm font-semibold text-accent-600 w-32 shrink-0">
                {item.period}
              </span>
              <div>
                <h4 className="font-bold text-navy-900">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
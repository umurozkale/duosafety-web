export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          Protecting Your Workforce, <br />
          <span className="text-blue-600">Securing Your Future.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          DUO Safety is your trusted partner in HSE Compliance, Risk Assessments, and CDM 2015 Regulations across the UK.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
            Our Services
          </button>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-slate-200 hover:border-blue-600 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}
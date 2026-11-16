import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { aiTools, categories } from '../../data/ai-tools';

export default function ToolsDirectory() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string>('All');
  const [pricing, setPricing] = useState<string>('All');
  const [sort, setSort] = useState<'name' | 'pricing'>('name');
  const list = useMemo(() => {
    let r = aiTools.filter((t) => (cat === 'All' || t.category === cat) && (pricing === 'All' || t.pricing === pricing) && (t.name + t.description + t.category).toLowerCase().includes(q.toLowerCase()));
    return r.sort((a, b) => sort === 'name' ? a.name.localeCompare(b.name) : a.pricing.localeCompare(b.pricing));
  }, [q, cat, pricing, sort]);
  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center">
        <label className="flex flex-1 min-w-56 items-center gap-2 glass px-3 py-2">
          <Search size={18} /><input aria-label="Search AI tools" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tools…" className="bg-transparent outline-none flex-1 text-white placeholder:text-slate-400" />
        </label>
        <select aria-label="Category filter" value={cat} onChange={(e) => setCat(e.target.value)} className="glass bg-black px-3 py-2 text-white">{categories.map((c) => <option key={c}>{c}</option>)}</select>
        <select aria-label="Free or paid filter" value={pricing} onChange={(e) => setPricing(e.target.value)} className="glass bg-black px-3 py-2 text-white">{['All', 'Free', 'Freemium', 'Paid'].map((p) => <option key={p}>{p}</option>)}</select>
        <select aria-label="Sort tools" value={sort} onChange={(e) => setSort(e.target.value as any)} className="glass bg-black px-3 py-2 text-white"><option value="name">Sort: Name</option><option value="pricing">Sort: Pricing</option></select>
      </div>
      <p className="mt-3 text-sm text-slate-400">{list.length} tool{list.length !== 1 ? 's' : ''} found. Pricing shown is the widely known free/paid status — no prices are invented.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <motion.article key={t.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="glass glow-border p-5">
            <div className="flex justify-between gap-2"><h3 className="text-lg font-bold text-white">{t.name}</h3><span className="text-xs rounded-full border border-cyan-400/50 px-2 py-1 text-cyan-200">{t.pricing}</span></div>
            <p className="text-xs text-violet-300 mt-1">{t.category}</p>
            <p className="mt-2 text-sm text-slate-300">{t.description}</p>
            <ul className="mt-3 list-disc pl-5 text-xs text-slate-400">{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a href={t.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300">Official website <ExternalLink size={14} /></a>
          </motion.article>
        ))}
        {list.length === 0 && <p className="text-slate-400">No tools match your filters. Try clearing the search.</p>}
      </div>
    </div>
  );
}

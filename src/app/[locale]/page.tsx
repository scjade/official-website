import { useTranslations, useLocale } from 'next-intl'; // Tambahkan useLocale
import Link from 'next/link'; // Tambahkan Link
import * as motion from "framer-motion/client";
import { ArrowRight, ShieldCheck, Cpu, CloudCog } from 'lucide-react';

import { TrustSection } from '@/components/TrustSection';

export default function HomePage() {
    const t = useTranslations('Hero');
    const s = useTranslations('Services');
    const locale = useLocale();

    return (
        <main className="min-h-screen bg-canvas text-slate-900 selection:bg-scalejade-600 selection:text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-scalejade-800/20 bg-surface text-scalejade-800 text-sm font-medium tracking-wide"
                >
                    <span className="w-2 h-2 rounded-full bg-scalejade-600 animate-pulse" />
                    {t('badge')}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl"
                >
                    {t('title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl font-light tracking-wide leading-relaxed"
                >
                    {t('subtitle')}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    {/* Tombol Kiri: Ke halaman Services */}
                    <Link
                        href={`/${locale}/services`}
                        className="bg-scalejade-600 hover:bg-scalejade-800 text-white px-8 py-4 rounded-md font-medium transition-all flex items-center justify-center gap-2 group shadow-sm"
                    >
                        {t('cta_primary')}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Tombol Kanan: Ke halaman Demo / Client Portal */}
                    <Link
                        href={`/${locale}/demo`}
                        className="bg-surface hover:bg-slate-100 text-slate-900 border border-slate-200 px-8 py-4 rounded-md font-medium transition-all flex items-center justify-center"
                    >
                        {t('cta_secondary')}
                    </Link>
                </motion.div>

            </section>

            <TrustSection />

            {/* Services Minimalist Cards */}
            <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: <Cpu className="w-6 h-6 text-scalejade-600" />, title: s('ai_title') },
                    { icon: <ShieldCheck className="w-6 h-6 text-scalejade-600" />, title: s('blockchain_title') },
                    { icon: <CloudCog className="w-6 h-6 text-scalejade-600" />, title: s('infra_title') }
                ].map((service, idx) => (
                    <div key={idx} className="p-8 rounded-xl border border-scalejade-800/10 bg-surface hover:border-scalejade-600/30 transition-colors group">
                        <div className="mb-4 p-3 bg-white rounded-lg inline-block shadow-sm">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-scalejade-800 transition-colors">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </section>
        </main>
    );
}
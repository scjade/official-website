import { useTranslations } from 'next-intl';
import * as motion from "framer-motion/client";
import { ShieldCheck, ActivitySquare, Globe, LockKeyhole } from 'lucide-react';

export default function AboutPage() {
    const t = useTranslations('About');

    const values = [
        { title: t('value_1_title'), desc: t('value_1_desc'), icon: ActivitySquare },
        { title: t('value_2_title'), desc: t('value_2_desc'), icon: LockKeyhole },
        { title: t('value_3_title'), desc: t('value_3_desc'), icon: Globe },
        { title: t('value_4_title'), desc: t('value_4_desc'), icon: ShieldCheck },
    ];

    return (
        <div className="min-h-screen bg-canvas pt-24 pb-32">

            {/* 1. Introduction (Hero) */}
            <section className="px-6 max-w-4xl mx-auto text-center mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-scalejade-800/20 bg-surface text-scalejade-800 text-sm font-medium tracking-wide uppercase"
                >
                    {t('intro_badge')}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8"
                >
                    {t('intro_title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed"
                >
                    {t('intro_text')}
                </motion.p>
            </section>

            {/* 2. Who We Are */}
            <section className="px-6 max-w-5xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-scalejade-600 pl-8 md:pl-12 py-4"
                >
                    <h2 className="text-sm font-bold text-scalejade-600 tracking-widest uppercase mb-4">
                        {t('who_we_are_title')}
                    </h2>
                    <p className="text-2xl md:text-4xl text-slate-900 font-medium tracking-tight leading-snug">
                        {t('who_we_are_text')}
                    </p>
                </motion.div>
            </section>

            {/* 3. Our Mission (High-Contrast Block) */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-scalejade-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    {/* Subtle geometric overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-scalejade-400 font-semibold tracking-widest uppercase text-sm mb-6">
                            {t('mission_title')}
                        </h2>
                        <p className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            "{t('mission_text')}"
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* 4. Our Values (2x2 Grid) */}
            <section className="px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {t('values_title')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {values.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface border border-slate-200 p-10 rounded-2xl hover:border-scalejade-600/50 hover:shadow-lg hover:shadow-scalejade-900/5 transition-all group"
                            >
                                <div className="mb-6 w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center group-hover:bg-scalejade-50 transition-colors">
                                    <Icon className="w-7 h-7 text-scalejade-800" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
}
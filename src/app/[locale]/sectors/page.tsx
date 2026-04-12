import { useTranslations } from 'next-intl';
import { Landmark, Factory, ActivitySquare } from 'lucide-react';
import * as motion from "framer-motion/client";

export default function SectorsPage() {
    const t = useTranslations('SectorDetails');
    const s = useTranslations('Sectors');

    const sectors = [
        { id: 'finance', title: s('finance'), desc: t('finance_desc'), icon: Landmark },
        { id: 'industrial', title: s('industrial'), desc: t('industrial_desc'), icon: Factory },
        { id: 'healthcare', title: s('healthcare'), desc: t('healthcare_desc'), icon: ActivitySquare },
    ];

    return (
        <div className="min-h-screen bg-canvas py-24 px-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-24"
                >
                    <span className="text-scalejade-600 font-semibold tracking-wide uppercase text-sm mb-4 block">
                        {t('header_badge')}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                        {t('header_title')}
                    </h1>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                        {t('header_sub')}
                    </p>
                </motion.div>

                {/* Vertical Sector List */}
                <div className="space-y-6">
                    {sectors.map((sector, idx) => {
                        const Icon = sector.icon;
                        return (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 border border-slate-200 rounded-2xl bg-white hover:shadow-xl hover:shadow-scalejade-900/5 transition-all group"
                            >
                                <div className="flex items-center gap-6 mb-6 md:mb-0">
                                    <div className="p-4 bg-scalejade-900 text-white rounded-xl group-hover:bg-scalejade-600 transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                            {sector.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="md:w-1/2 text-left md:text-right">
                                    <p className="text-slate-600 leading-relaxed">
                                        {sector.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
import createNextIntlPlugin from 'next-intl/plugin';

// Point the plugin to our new config file
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
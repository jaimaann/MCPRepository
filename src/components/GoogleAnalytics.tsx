'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

interface GoogleAnalyticsProps {
  gaId: string;
}

/**
 * Google Analytics integration component
 * @param {string} gaId - Google Analytics Measurement ID (format: G-7N91QXYZG4)
 */
export default function GoogleAnalyticsScript({ gaId }: GoogleAnalyticsProps) {
  return <GoogleAnalytics gaId={gaId} />;
}

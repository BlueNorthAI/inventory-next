import '@/app/styles/global.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import '@/app/styles/custom-grid-styles.css';
import '@/app/styles/aggrid.css';

import { inter } from './styles/fonts';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import '@/app/styles/kendo.css';
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey(
  '[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-057528}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 May 2024}____[v3]_[0102]_MTcxNTY0MTIwMDAwMA==6ff4143f8d6a412a9d66750abe4d9ae3'
);

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="@/public/favicon.ico" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

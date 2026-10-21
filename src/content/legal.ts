/*
 * Legal pages, with the text copied as-is from the current klaveness.com pages
 * (October 2026). The Recruitment privacy notice is now part of the Privacy policy.
 */

export type LegalSection = { id?: string; title?: string; updated?: string; markdown: string };

export type LegalPage = {
  path: string;
  title: string;
  description: string;
  updated?: string;
  sections: LegalSection[];
};

export const privacyPolicyPage = {
  path: "/privacy-policy",
  title: "Privacy policy",
  description:
    "How Klaveness processes personal data collected through klaveness.com, and how candidates’ personal data is handled in a recruitment process.",
  updated: "13 July 2018",
  sections: [
    {
      markdown: String.raw`
## 1\. Introduction

Klaveness AS (”Klaveness”) considers the privacy and security of visitors a top priority. We are committed to protecting the data you share with us. This privacy policy explains how Klaveness process information that can be used to directly or indirectly identify an individual (“Personal Data”) collected through the use of our website.

For the purposes of this policy. Klaveness defines the term “Visitor” as the individual that visits our front-end website, [www.klaveness.com](/).

Any information stored on our platform is treated as confidential. All information is stored securely and accessed by authorized personnel only. Klaveness implements and maintains appropriate technical, security and organisational measures to protect Personal Data against unauthorized or unlawful processing and use, and against accidental loss, destruction, damage, theft or disclosure.

**By using this Website you are agreeing to the use of your data as described in this Privacy Statement.**

The following section covers the collection and processing of data on website Visitors.

* * *

## 2\. The data we process and the purposes of the processing

By visiting this website, or when subscribing to our services, you consent to Klaveness’ collection and use of your Personal Data as described in this Privacy Policy.

Klaveness may collect, record and analyze information of Visitors to its website. We may record your IP address and use cookies (please see our cookie policy). Klaveness may add information collected by way of pageview activity.

Klaveness gathers data about visits to the website, including numbers of Visitors and visits, geo-location data, length of time spent on the site, pages clicked on or where Visitors have come from.

Klaveness uses the collected data to communicate and customize content for Visitors and to improve its website by analyzing how Visitors navigate the site.

Furthermore, Klaveness may collect and process any Personal Data that you volunteer to us in our website’s forms, such as when you sign up for information and newsletters. Such Personal Data may include your first and last name, your email address, telephone numbers, job title and areas of interest or certain information about the company you are working for (company name and address). Klaveness uses your Personal Data in order to be able to provide you with the services that you sign up for, such as sending you relevant information and newsletters.

If you are a potential candidate for employment in a Torvald Klaveness company, you will find more details on how personal data is processed throughout a recruitment process in the [Klaveness Recruitment Privacy Notice.](#recruitment-privacy-notice)

Klaveness’ processing of Personal Data is based on your explicit consent, which forms the legal basis for Klaveness’ processing of your Personal Data. Kindly note that any consent will be voluntary, and may at any time be withdrawn by you by contacting [KlavenessPrivacy@klaveness.com](mailto:KlavenessPrivacy@klaveness.com). However, if you do not grant the requested consent to the processing of your Personal Data, you may not use some of the services provided on this site.

* * *

## 3\. Sharing of Personal Data

We may provide your data and Personal Data to other entities within the Klaveness Network to provide you with information and service offers that could be of relevance to you.

Klaveness may also share such information with third party service vendors or contractors (data processors) to provide a requested service or in order to analyze the Visitor behavior on its website.

We will only use data processors that can provide sufficient guarantees regarding the confidentiality and security of your data. We will have written contracts with them which provide assurances regarding the protections that they will give to your Personal Data and their compliance with our data security standards and international transfer restrictions.

* * *

## 4\. Retention and deletion

Klaveness will not retain Personal Data longer than is necessary to fulfill the purposes for which it was collected (see above) or as required by applicable laws or regulations. When unsubscribing to a service or when your users account is terminated or expires, all Personal Data collected through the platform will be deleted as required by applicable law.

* * *

## 5\. Your rights as a data subject

As a data subject, you have the following rights concerning our processing of your Personal Data:

- You have the right to find out exactly what Personal Data we have stored about you, and the right to request access to your Personal Data. You have also the right to correct any errors or delete data which may be inaccurate.

- You have the right to withdraw your consent to any processing for which you have previously given that consent.

- Subject to certain conditions, you have the right to object to or ask us to restrict our data processing of your Personal Data, for example if you think that the Personal Data processed are inaccurate.

- Subject to certain conditions, you are also entitled, on certain grounds, to have your Personal Data erased, e.g. where you think that the information we are processing is inaccurate, or the processing is unlawful.

- Data portability – subject to certain conditions, you are entitled to receive the data which you have provided to us and which is processed by us by automated means, in a commonly-used machine readable format.

- If you consider that we are in breach of our obligations under applicable data protection laws, you may lodge a complaint with the competent Data Protection Authority.

* * *

## 6\. For further information

If you have any further questions regarding the Personal Data Klaveness collects, or how we use it, feel free to contact us by email at [KlavenessPrivacy@klaveness.com](mailto:KlavenessPrivacy@klaveness.com)

We reserve the right to change our privacy policy. Continued use of Klaveness website after having been informed of any such changes to these conditions implies acceptance of the revised privacy policy.
`,
    },
    {
      id: "recruitment-privacy-notice",
      title: "Klaveness recruitment privacy notice",
      updated: "19 September 2025",
      markdown: String.raw`
This Privacy Notice applies to potential candidates for employment with a Torvald Klaveness company (“Klaveness”) and is effective as of 20 July 2018.

Your privacy is important to us. This Information outlines how Klaveness collect, process, use and transfer (collectively “process”) your personal data during a recruitment process. Personal data is information that relates to an individual who can be identified from that information. Common examples of personal data include names, addresses, telephone numbers and other contact details, and CVs.

* * *

**Legal entities and privacy contacts**

If you have questions regarding the processing of your personal data, you may contact the privacy contact (see below) of the company that you are applying for a job with, or

**Chief Legal and Compliance Officer at the head office in Oslo, Henrik Semb Rønningen.**

This Privacy Notice applies to the following Torvald Klaveness companies unless otherwise stated or follows from law:

| Legal entity | Country | Local privacy contact |
| --- | --- | --- |
| Klaveness AS | Norway | Chief HR Officer – Trine Hellum |
| Klaveness Digital AS | Norway | Chief HR Officer – Trine Hellum |
| Klaveness Dry Bulk AS | Norway | Chief HR Officer – Trine Hellum |
| Klaveness Combination Carriers ASA | Norway | Chief HR Officer – Trine Hellum |
| Klaveness Shore Services, Inc. | The Philippines | Data Protection Officer (DPO) – Randy Magnaye |
| Klaveness Asia Pte Ltd. | Singapore | Data Protection Officer (DPO) – Michael Jørgensen |
| Klaveness Dry Bulk Asia Pte Ltd. | Singapore | Data Protection Officer (DPO) – Michael Jørgensen |
| Klaveness Combination Carriers Asia Pte Ltd. | Singapore | Data Protection Officer (DPO) – Michael Jørgensen |

The company you apply for a job with is the data controller. Governed by data processing agreements, Klaveness AS is the data processor for Torvald Klaveness companies in Norway concerning candidates applying for a job onshore.

* * *

## Purpose – why we process your personal data

Klaveness will process your personal data for job recruiting purposes, including notification of future job opportunities and, for successful candidates, employment purposes. This includes processing in order to:

- verify your identity, academic and professional qualifications, working experience, evaluate your suitability for the position applied for, if necessary conduct background checks, and for purposes to comply with any applicable local laws.

- to keep you informed by email, telephone, mail and/or other communication methods about future work opportunities.

Additionally, in case of legal proceedings, Klaveness will need to process your personal data to establish, exercise or defend Klaveness against any legal claim.

If your initial application is unsuccessful, we may wish to retain your personal data in order to consider you for existing or future positions within Klaveness. We may contact you for this reason for up to one year after you apply for a position at Klaveness if we have a position assumed relevant for you, unless you do not consent to such processing.

If you accept an offer of employment, some of the personal data collected during the recruitment period will become part of your personnel records.

* * *

## The legal basis for the processing

The legal basis for Klaveness’ processing of your personal data is the GDPR art. 6.1 (b) – as the processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract. If your application includes special categories of personal data such as health information, Klaveness’ legal basis for processing is GDPR art. 9.2 (b) and (d).

When Klaveness processes your personal data for the purpose of keeping you informed of future work opportunities, the processing is based on your voluntary, explicit and informed consent. You may withdraw such consent at any time by contacting us, please see contact information.

* * *

## The personal data we collect

Generally, the type of personal data collected directly from you would include your name and contact information, date of birth, citizenship, gender, information about your prior employment, your educational background, courses and additional information that may be provided by you in your CV or during the recruitment process. Information on certain health conditions or other special categories of personal data will only be processed if relevant for the fulfilment of the employment relationship with Klaveness and in accordance with applicable law.

We encourage you to supply only the information you are comfortable with. In particular, care should be taken when you supply sensitive personal data.

* * *

## Where do Klaveness obtain personal data from?

Most of the personal data we process is obtained from you when you apply for a position, but we also obtain personal data about you in the course of the application process (for example, during interviews or in general correspondence). Other data types may be obtained from third parties, including, for example, recruitment agencies.

If you are invited for an interview, to the extent permitted by law and relevant for the position, we may also collect additional personal data, such as credit history, background checks etc. We may also store documentation from interviews you have attended.

If you provide us with details of a reference or any other third party as part of your application, it is your responsibility to obtain consent from that third party prior to passing their personal information to us.

* * *

## Sub processors and transfer of personal data

Klaveness may use manning agencies or third party service providers who provide recruitment services (data processors). In providing the services, your personal data will, where applicable, be processed by the service provider on Klaveness’ behalf. We will only use sub processors that can provide sufficient guarantees regarding the confidentiality and security of your data. We will have written contracts with them which provide assurances regarding the protections that they will give to your data and their compliance with our data security standards and international transfer restrictions.

We may transfer your personal data we process in Europe also to countries outside the European Economic Area (”EEA”), for example to Torvald Klaveness companies outside the EEA, or when one of our service providers use staff or equipment based outside the EEA. We have put in place adequate safeguards with respect to the protection of your privacy, fundamental rights and freedoms, and the exercise of your rights, e.g. we establish an adequate level of data protection, usually through EU Standard Contractual Clauses.

Where your personal data is disclosed to third parties, we will ensure that those third parties abide by the practices and policies relating to the collection, use and retention of personal data of the company you apply for a job with.

* * *

## Security

Klaveness has implemented strict procedures and appropriate security measures to protect your personal data and prevent any unauthorised disclosure or access to your personal data which is under our control. Within Klaveness, access is only granted on a need-to-know basis to those people whose roles require them to process your personal data.

* * *

## How long we store your personal data

We will keep your personal data only for as long as we need it to fulfil the purposes for which it was collected (see above) and in order to comply with legal and regulatory requirements.

If your application was unsuccessful, your personal data will be deleted after the recruitment process has ended, unless longer storing is required by law or necessary due to legitimate reasons and in accordance with applicable law. You may have also given your consent for us to retain your data for a longer period so that we can contact you in case of future job vacancies.

If your application for employment is successful and you commence employment with a Torvald Klaveness company, your personal data will be transferred to your personnel file and will be processed for employment purposes in accordance with our internal rules for processing employee personal data.

## Your rights

By law you have various rights which you can enforce, including the right to be informed in accordance with this information. Please be aware that some of the following rights might not be available to you in all jurisdictions.

- You have the right to find out exactly what personal data we have stored about you, and the right to request access to your personal data.

- You have the right to withdraw your consent to any processing for which you have previously given that consent.

- Subject to certain conditions, you have the right to object to or ask us to restrict our processing of your personal data, for example if you think that the personal data is inaccurate.

- Subject to certain conditions, you are also entitled, on certain grounds, to have your personal data erased, e.g. where you think that the information we are processing is inaccurate, or the processing is unlawful.

- Data portability – subject to certain conditions, you are entitled to receive the data which you have provided to us and which is processed by us by automated means, in a commonly-used machine readable format.

- If you consider that we are in breach of our obligations under applicable data protection laws, you may lodge a complaint with the competent Data Protection Authority.

If you would like further information about your data protection rights, including rights about access to data and correction of inaccurate data, please contact the privacy contact listed on the first page or the Chief Legal and Compliance Officer (henrik.semb.ronningen@klaveness.com).

We reserve the right to amend this Privacy Notice any time, in order to address any changes in applicable data protection laws.

`,
    },
  ],
} satisfies LegalPage;

export const legalNoticePage = {
  path: "/legal-notice",
  title: "Legal notice",
  description: "Terms and conditions for using klaveness.com, the website of Torvald Klaveness.",
  sections: [
    {
      markdown: String.raw`
This website («site») is the homepage of Torvald Klaveness, registered under Klaveness AS, Drammensveien 260, 0283 OSLO («Klaveness»).

By accessing and using [www.klaveness.com](/) you agree to the following terms and conditions:

1. The contents on this site is provided without any warranties or representations whatsoever, either express or implied, including but not limited to any warranties of merchantability, fitness for a particular purpose or non-infringement. Reasonable care has been taken to ensure that the content is accurate and up-to-date, however Klaveness makes no warranties or representations about accuracy, sequence, timeliness or completeness or otherwise of the site content, and may discontinue distributing the site or related material without prior notice. The information on this site intends to provide general guidance and information.

2. Neither Klaveness nor any of its affiliates shall be liable for any direct or indirect damage or other losses of whatsoever kind arising from access to, or the use of this site or any information contained in it, including damage arising from computer viruses.

3. Any comments made on this site or messages sent to Klaveness regarding its content becomes the property of Klaveness and may be used without limitation of purposes and to the extent permitted by law.

4. Klaveness wants to ensure that personal data is handled securely. Personal data submitted to Klaveness through this site will be handled according to Norwegian and European personal data protection legislation.

5. Please be aware that while visiting our site, visitors can follow links to other sites that are beyond our sphere of influence. Klaveness is not responsible for the content or privacy policy of these sites.

6. These terms and conditions shall be governed by Norwegian Law. Any dispute arising out of or in connection with this Legal Notice shall be referred to Norwegian Courts.
`,
    },
  ],
} satisfies LegalPage;

export const cookiePolicyPage = {
  path: "/cookie-policy",
  title: "Cookie policy",
  description: "Which cookies klaveness.com uses, why, and how you can control them.",
  updated: "April 2025",
  sections: [
    {
      markdown: String.raw`
This Cookie Policy is part of our Privacy Policy. For more information about us, and how we protect personal data, please see our [Privacy policy](/privacy-policy).

In order to provide you with a more personalized service we need to remember and store information about how you use this website. This is done by using small text files called cookies. Cookies contain small amounts of information and are downloaded to your computer or other device by a service for this website.

Your web browser then sends these cookies back to this website on each subsequent visit so that it can remember things such as your user preferences. You can find more detailed information about cookies and how they work at [http://www.aboutcookies.org/](http://www.aboutcookies.org/)

Whenever you use this website, information may be collected through the use of cookies and other technologies. By using this website you agree to our use of cookies as described in this Cookie Policy.

## What cookies do we use and why?

Klaveness uses a range of cookies to ensure the proper functioning of our website, enhance user experience, and better understand how our content is used. Some cookies are set automatically when you visit the site, while others are only activated with your consent.

We do **not track individuals**, and all data collected through cookies is anonymized or pseudonymized in line with privacy regulations.

The cookies we use fall into the following categories:

- **Essential / Necessary cookies** – These cookies are required for core site functionality, such as navigation, security, and remembering your cookie preferences. They are always active and do not require consent.

- **Analytics and Marketing cookies** – These cookies help us understand how visitors interact with our site (e.g. page visits, time on page) and allow us to deliver relevant content or measure advertising performance. These cookies are only set if you accept them via our cookie banner in accordance with GDPR.

A full list of the specific cookies we use, along with their purpose and expiration, is provided below.

* * *

## Strictly Necessary Cookies (always active)

These cookies are essential for the website to function properly and are set automatically when you visit the site.

| Cookie Name | Purpose | Expiry |
| --- | --- | --- |
| SS\_MID | Unique visitor ID for Squarespace site analytics | 2 years |
| SS\_SESSION\_ID | Identifies a user’s session across page loads | Session |
| crumb | Prevents cross-site request forgery (security feature) | Session |
| ss\_cid | Identifies unique users for internal analytics | 2 years |
| ss\_cvisit | Records timestamp of current site visit | 30 minutes |
| ss\_cvr | Stores unique ID and timestamp of the first visit | 2 years |
| ss\_cvt | Tracks the time and frequency of current visit | 30 minutes |
| notice\_behavior | Stores your cookie consent preference | Session |

* * *

## Analytics Cookies (set with consent)

These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.

| Cookie Name | Purpose | Expiry |
| --- | --- | --- |
| \_clck | Microsoft Clarity user ID for heatmaps and session recordings | 1 year |
| \_clsk | Combines multiple pageviews into a single session for Clarity | 30 minutes |
| \_hjSession\_\* | Hotjar session tracking cookie | 30 minutes |
| \_hjid | Hotjar persistent user ID for visitor behavior analysis | 1 year |
| \_\_hstc | HubSpot visitor tracking (session timestamps, visit count) | 6 months |
| hubspotutk | HubSpot user ID token (used in forms and analytics) | 6 months |
| \_\_hssc | HubSpot session counter | 30 minutes |
| Silktide Analytics Javascript | Silktide analytics javascript is used to collect information about how visitors use our website. We use the information to compile reports and to help us improve the website. We collect information including the number of visitors to the website, where visitors have come to the website from and the pages they visited. The information is collected and processed in a way that does not directly identify anyone. Once the information is collected, the IP address and browser details of a visitor is used to create a 'magic number' that changes every 24 hours. The IP address and specific browser details are immediately forgotten and never stored. | 24 hours |
| \_\_hssrc | HubSpot flag to detect new session | Session |

* * *

## Marketing Cookies (set with consent)

These cookies are used to track visitors across websites to display relevant ads and measure campaign performance.

| Cookie Name | Purpose | Expiry |
| --- | --- | --- |
| \_fbp | Facebook Pixel – stores a unique browser ID for retargeting | 3 months |
| fr | Facebook third-party cookie for advertising and campaign attribution | 3 months |
| \_uetsid | Microsoft Bing Ads – session ID for user behavior tracking | 30 minutes |
| \_uetvid | Microsoft Bing Ads – visitor ID for remarketing | ~16 days |
| MUID | Microsoft user ID cookie for ad targeting across Microsoft domains | 1 year |
| CLID | Microsoft Clarity – identifier for first-time visits | 1 year |
| ss\_marketingCookie | Remembers if a website user consents to placing marketing Cookies on their browser | 30 days |
| ss\_performanceCookiesAllowed | Remembers if a website user consents to placing performance Cookies on their browser | 30 days |

## How to control cookies

By using this website you agree that we can place cookies on your computer or device as explained above. However, you can control and manage cookies in various ways. Please bear in mind that removing or blocking cookies can impact your user experience and parts of this website may no longer be fully accessible.

For more information on how to modify your browser settings to block or filter cookies, see [http://www.aboutcookies.org/](http://www.aboutcookies.org/) or [http://www.cookiecentral.com/faq/](http://www.cookiecentral.com/faq/).

## Social buttons

We use “social buttons” to enable our users to share content. These are buttons for third party social media sites, such as LinkedIn. When sharing content through the use of social buttons, a cookie from such third party social media site may be stored on your device.

We cannot control the cookies you receive by such third parties. Please review the respective terms of use and privacy policies of these third parties to understand exactly how they use your information and to find out how to opt-out, or delete, such information.

We may modify or amend this Cookie Notice from time to time at our discretion. When we make changes to this notice, we will amend the revision date at the top of this page, and such modified or amended Cookie Notice shall be effective as of that revision date. We encourage you to periodically review this Cookie Notice to be informed about how we are using cookies.

Please contact us if you would like more detailed information on the cookies we use at [KlavenessPrivacy@klaveness.com](mailto:KlavenessPrivacy@klaveness.com)
`,
    },
  ],
} satisfies LegalPage;

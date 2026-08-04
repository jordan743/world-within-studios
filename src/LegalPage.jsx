import Nav from './r2/Nav.jsx'
import Footer from './r2/Footer.jsx'
import './Studios.css'
import './LegalPage.css'

function Section({ heading, children }) {
  return (
    <div className="lp-section">
      <h2 className="lp-section__heading">{heading}</h2>
      <div className="lp-section__body">{children}</div>
    </div>
  )
}

function Para({ children }) {
  return <p className="lp-para">{children}</p>
}

function LegalLayout({ headline, effectiveDate, children }) {
  return (
    <div className="lp-page">
      <Nav />
      <div className="lp-header">
        <h1 className="lp-header__title">{headline}</h1>
        <p className="lp-header__date">Effective: {effectiveDate}</p>
      </div>
      <div className="lp-body">{children}</div>
      <div className="ww-display" aria-hidden="true">
        <img src="/assets/logo-studios.svg" alt="" />
      </div>
      <section className="quote-section">
        <blockquote className="quote-section__text">
          "THE ONE PERFECTLY DIVINE THING, THE ONE GLIMPSE OF GOD'S PARADISE GIVEN ON EARTH,
          IS TO FIGHT A LOSING BATTLE — AND NOT LOSE IT."
        </blockquote>
        <cite className="quote-section__attr">— G.K. CHESTERTON</cite>
      </section>
      <Footer />
    </div>
  )
}

// ── Terms of Use ──────────────────────────────────────────────────────────────

export function TermsOfUsePage() {
  return (
    <LegalLayout headline="Terms of Use" effectiveDate="July 31, 2025">

      <Section heading="Introduction">
        <Para>By accessing or using this website (the "Site"), you affirm that you have read, understood, and agree to be bound by these Terms of Use (the "Terms"). If you do not agree, do not use the Site. If you are accepting on behalf of an organization, you represent you have authority to bind that entity.</Para>
      </Section>

      <Section heading="1. Eligibility & Acceptable Use">
        <Para>The Site is intended for individuals 13 years of age or older. If you are between 13 and 18, you may use the Site only with parental or guardian consent. You agree not to: (a) violate any law; (b) upload malicious code; (c) attempt unauthorized access; (d) interfere with network or security features; or (e) engage in any activity that could harm World Within or other users.</Para>
      </Section>

      <Section heading="2. Contact Form Submissions">
        <Para>Information you submit through the Site, including via contact forms, is deemed non-confidential and non-proprietary. By submitting, you grant World Within a non-exclusive, royalty-free, worldwide license to use, display, and reproduce the submission for operational purposes. You agree not to submit unlawful, defamatory, or infringing content. World Within is not obligated to respond to any submission.</Para>
      </Section>

      <Section heading="3. Third-Party Donation Platform">
        <Para>Clicking the "Donate" button may redirect you to a third-party payment processor. World Within does not collect, store, or access payment-card data. All donation transactions are governed by the third party's terms and privacy policy. Contributions may be tax-deductible to the extent permitted by law; consult a qualified tax advisor.</Para>
      </Section>

      <Section heading="4. Intellectual Property">
        <Para>All content on the Site—including text, graphics, logos, and multimedia—is owned by or licensed to World Within unless otherwise noted. You may download or print content for personal, non-commercial use only, provided you retain all copyright and proprietary notices. No other use, reproduction, or distribution is permitted without prior written consent.</Para>
      </Section>

      <Section heading="5. External Links">
        <Para>The Site may link to external websites operated by third parties. World Within does not endorse, control, or assume responsibility for the content, privacy, security, or functionality of any external site. Your use of such sites is at your own risk.</Para>
      </Section>

      <Section heading="6. Disclaimer of Warranties">
        <Para>The Site and all content are provided "as is" and "as available," without warranties of any kind, express or implied. World Within does not warrant that the Site will be uninterrupted, secure, or error-free.</Para>
      </Section>

      <Section heading="7. Limitation of Liability">
        <Para>To the fullest extent permitted by law, World Within disclaims all liability for any losses or damages arising out of or in connection with your use of, or inability to use, the Site. This includes, without limitation, direct, indirect, incidental, consequential, punitive, or special damages, and damages for lost profits, data, or goodwill. Nothing in these Terms limits liability for gross negligence, willful misconduct, or any matter for which liability cannot be excluded under applicable law.</Para>
      </Section>

      <Section heading="8. Indemnification">
        <Para>You agree to indemnify, defend, and hold harmless World Within and its officers, directors, employees, and agents from any claim, demand, or damages (including attorneys' fees) arising out of your breach of these Terms or misuse of the Site.</Para>
      </Section>

      <Section heading="9. Termination">
        <Para>World Within may suspend or terminate your access to the Site, in whole or in part, at any time and without notice, for any violation of these Terms or to protect the integrity, security, or operation of the Site.</Para>
      </Section>

      <Section heading="10. Changes to These Terms">
        <Para>World Within may update these Terms at any time. The "Effective Date" will reflect the latest revision. Your continued use of the Site after any update constitutes acceptance of the revised Terms. Updates will be posted on this page or communicated by any reasonable means.</Para>
      </Section>

      <Section heading="11. Governing Law & Venue">
        <Para>These Terms are governed by the laws of the State of Montana, without regard to its conflict-of-law rules. Any action arising from or related to the Site shall be brought exclusively in the state or federal courts located in Lewis &amp; Clark County, Montana, and you consent to their jurisdiction.</Para>
      </Section>

      <Section heading="12. DMCA Notice">
        <Para>If you believe content on the Site infringes your copyright, please send a notice under the Digital Millennium Copyright Act to the address listed below. Include: (a) your contact info, (b) identification of the work infringed, (c) URL of the infringing material, (d) a statement of good-faith belief, (e) a statement under penalty of perjury that your notice is accurate, and (f) your physical or electronic signature.</Para>
      </Section>

      <Section heading="13. Contact Information">
        <Para>World Within<br />Email: <a href="mailto:info@worldwithin.org" className="lp-link">info@worldwithin.org</a><br />Website: <a href="https://worldwithin.org" target="_blank" rel="noopener noreferrer" className="lp-link">WorldWithin.org</a></Para>
      </Section>

    </LegalLayout>
  )
}

// ── Privacy Policy ────────────────────────────────────────────────────────────

export function PrivacyPolicyPage() {
  return (
    <LegalLayout headline="Privacy Policy" effectiveDate="July 31, 2025">

      <Section heading="Introduction">
        <Para>World Within is committed to protecting the privacy and security of individuals who visit our website or interact with our services. This Privacy Policy describes how we collect, use, share, and safeguard personal information, as well as the choices you have regarding your data. It applies to information collected through our website and any related online services operated by World Within.</Para>
      </Section>

      <Section heading="1. Information Collected">
        <Para><strong style={{ color: '#fff4e2' }}>Personal Information:</strong> We collect the personal information you voluntarily provide such as your name, email address, and the content of any message you submit through our contact form. If you sign up for newsletters or make donations, we will collect the information necessary to facilitate those activities. We do not intentionally request sensitive data (e.g., Social Security numbers) and ask that you refrain from including it in free-text fields.</Para>
        <Para><strong style={{ color: '#fff4e2' }}>Non-Personal (Technical) Information:</strong> When you visit the website, we automatically collect certain technical data (IP address, browser and device type, operating system, referring URLs, pages viewed, and time spent on pages) through cookies, web beacons, and analytics tools such as Google Analytics. Although this information is typically non-identifiable, we treat it as personal information if we ever link it to you or another identifiable individual.</Para>
      </Section>

      <Section heading="2. Use of Information">
        <Para>We use the information we collect to operate, maintain, and improve our website and related services; respond to inquiries and route messages to the appropriate team; manage communications and internal records; analyze usage patterns, detect and prevent fraud or security incidents, and diagnose technical issues; and satisfy applicable legal, regulatory, or contractual obligations. When you opt in to receive updates—such as newsletters or event announcements—we also use your personal information to deliver those communications. We do not employ automated decision-making or profiling, and we never use personal information for unsolicited marketing.</Para>
      </Section>

      <Section heading="3. Sharing of Information">
        <Para>We do not sell, trade, or otherwise monetize your personal information. We share it only when necessary: 1) with trusted service providers—such as website hosts, email platforms, payment or donation processors, and analytics vendors—who are bound by written agreements to keep the data confidential and to use it solely for our purposes; 2) when required to comply with laws, court orders, or legitimate government requests or to protect the rights, property, or safety of World Within, our users, or others; 3) in connection with a merger, acquisition, reorganization, or other change of control, provided the successor entity upholds privacy protections materially similar to those in this Policy; 4) when you expressly direct or consent to such sharing; and 5) by disclosing aggregated or de-identified information that cannot reasonably be used to identify you. We never authorize third parties to use your personal information for their own direct marketing.</Para>
      </Section>

      <Section heading="4. Donation Services">
        <Para>We process online donations through a third-party payment processor (currently impactassets.org). When you click "Donate," you are redirected to that provider's site, and any personal or financial information you submit there is governed by the provider's own privacy policy and terms of service; we do not receive or store full payment-card details. The processor is contractually required to comply with the Payment Card Industry Data Security Standard (PCI DSS v4.0) and may not use your information for its own direct marketing. We receive only the limited data needed to confirm and acknowledge your gift—such as your name, email address, donation amount, and transaction ID—and we use that information solely in accordance with this Privacy Policy. We do not use donor information for unsolicited marketing unless you have expressly opted in.</Para>
      </Section>

      <Section heading="5. Cookies and Analytics">
        <Para>We use cookies and similar tracking technologies to enable core site functionality, analyze traffic, and improve your experience. For a full description of the cookies we employ, the data they collect, and your options for managing them, please review our separate <a href="/cookies-policy" className="lp-link">Cookie Policy</a>.</Para>
      </Section>

      <Section heading="6. Email Communications">
        <Para>We may send you newsletters, event announcements, donation acknowledgments, or other email communications when you provide an email address and, where required by law, give your consent. Each marketing message contains a clearly labeled "unsubscribe" link. You may opt out at any time, and we will process your request within ten (10) business days, as required by the CAN-SPAM Act, 15 U.S.C. § 7704(a)(4). Opting out of marketing emails will not prevent us from sending non-promotional messages that are necessary to complete a transaction or otherwise administer your relationship with World Within—such as donation receipts or service-related notices.</Para>
      </Section>

      <Section heading="7. Data Security">
        <Para>We employ reasonable administrative, technical, and physical safeguards intended to protect personal information from accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. While we strive to protect the data we hold, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. If a data-security incident affecting your personal information occurs, we will provide any notifications required by applicable law.</Para>
      </Section>

      <Section heading="8. Children's Privacy">
        <Para>Our website is not directed to children under thirteen (13) years of age, and we do not knowingly collect personal information from anyone in such age group. If we become aware that we have inadvertently received personal information from a child under 13 without verifiable parental consent, we will promptly delete the information from our records and take any other steps required by applicable law. Parents or legal guardians who believe their child has provided us with personal information may contact us through the contact information below to request its removal.</Para>
      </Section>

      <Section heading="9. User Rights">
        <Para>Subject to applicable U.S. privacy laws—including, where relevant, the California Consumer Privacy Act (as amended by the CPRA), the Colorado Privacy Act, Virginia's VCDPA, and similar state statutes—you may have the right to: 1) request confirmation of whether we process your personal information and obtain access to it; 2) request correction of inaccurate or incomplete personal information; 3) request deletion of personal information we maintain about you; and 4) withdraw consent to receive marketing communications at any time. We will verify your identity before fulfilling a request and respond within the timeframe required by law. To exercise any of these rights, please contact us through the contact information below.</Para>
      </Section>

      <Section heading="10. State-Specific Privacy Rights">
        <Para>In addition to the rights described in Section 9, residents of Colorado, Delaware, New Jersey, Oregon, and Minnesota may—if their state's consumer-privacy law applies to us—have the right to 1) obtain a portable copy of certain personal information they provided to us, 2) opt out of the sale of their personal information or its use for targeted advertising or certain automated profiling, and 3) appeal any denial of a privacy request. World Within does not sell personal information, share it for targeted advertising, or engage in automated profiling that produces legal or similarly significant effects. If you wish to exercise one of these state-specific rights or appeal a decision, please contact us through the contact information below; we will verify your identity and respond within the period required by applicable law.</Para>
      </Section>

      <Section heading="11. Data Retention">
        <Para>We retain personal information only for as long as necessary to accomplish the purposes described in this Policy, unless a longer retention period is required or permitted by law (e.g., for tax, accounting, or audit purposes). When retention is no longer required, we will delete, anonymize, or otherwise dispose of the information in a secure manner consistent with applicable regulations and industry standards.</Para>
      </Section>

      <Section heading="12. Updates to This Privacy Policy">
        <Para>We may revise this Privacy Policy from time to time to reflect changes in law, our practices, or the features of our services. When we do, we will post the updated version on this page and revise the "Effective Date" at the top. If a change materially affects the way we use or disclose personal information, we will provide additional notice—such as by prominently posting a banner on our website or emailing you—before the change takes effect. Your continued use of our website or services after the updated Policy becomes effective constitutes your acceptance of the revised terms.</Para>
      </Section>

      <Section heading="13. Contact Information">
        <Para>If you have questions about this Privacy Policy or wish to exercise any of the rights described above, please contact us as follows:</Para>
        <Para>World Within<br />Email: <a href="mailto:info@worldwithin.org" className="lp-link">info@worldwithin.org</a><br />Website: <a href="https://worldwithin.org" target="_blank" rel="noopener noreferrer" className="lp-link">WorldWithin.org</a></Para>
      </Section>

    </LegalLayout>
  )
}

// ── Disclaimer ────────────────────────────────────────────────────────────────

export function DisclaimerPage() {
  return (
    <LegalLayout headline="Disclaimer" effectiveDate="July 31, 2025">

      <Section heading="Introduction">
        <Para>The information provided on this website is intended for general informational purposes only. World Within makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of the content.</Para>
      </Section>

      <Section heading="1. Not Professional Advice">
        <Para>Nothing on this website constitutes legal, financial, investment, tax, medical, mental health, or other professional advice. Users should seek guidance from qualified professionals before acting on any information presented on this site.</Para>
      </Section>

      <Section heading="2. External Links">
        <Para>This website may contain links to third-party websites provided solely for convenience. World Within does not endorse, control, or assume responsibility for the content, availability, or policies of any third-party site, including any security or data practices.</Para>
      </Section>

      <Section heading="3. Donations and Third-Party Platforms">
        <Para>Clicking the "Donate" button may redirect users to a third-party payment processor. World Within does not collect, store, or have access to payment card information entered on external platforms. All donation transactions are subject to the terms and privacy policies of the third-party provider. Contributions may be tax-deductible to the extent permitted by law; please consult a qualified tax advisor.</Para>
      </Section>

      <Section heading="4. User Submissions">
        <Para>Information submitted through the website, including via contact forms or other communication features, is considered non-confidential and non-proprietary. Submission does not create a professional, fiduciary, or confidential relationship with World Within. The organization reserves the right to review, ignore, edit, or delete any submission at its sole discretion and in accordance with its Privacy Policy.</Para>
      </Section>

      <Section heading="5. No Guarantees">
        <Para>World Within strives to maintain a secure and operational website but makes no guarantees regarding uninterrupted access, website functionality, or protection from viruses, malware, or other technical issues. Users access the site at their own risk.</Para>
      </Section>

      <Section heading="6. Limitation of Liability">
        <Para>To the fullest extent permitted by law, World Within disclaims all liability for any loss or damages arising out of or in connection with the use of, or reliance on, any content or services provided on this website. This includes, without limitation, direct, indirect, incidental, consequential, or punitive damages, and damages for lost profits, data, or goodwill. Nothing in this Disclaimer limits liability for gross negligence, willful misconduct, or any matter for which liability cannot be excluded under applicable law.</Para>
      </Section>

      <Section heading="7. Changes to This Disclaimer">
        <Para>World Within may update this Disclaimer periodically. Revisions will be posted on this page with a new effective date. Continued use of the site after changes are posted constitutes acceptance of the revised Disclaimer.</Para>
      </Section>

      <Section heading="8. Governing Law & Venue">
        <Para>This Disclaimer is governed by the laws of the State of Montana, without regard to its conflict-of-law rules. Any dispute arising from or related to the website shall be resolved exclusively in the state or federal courts located in Lewis and Clark County, Montana.</Para>
      </Section>

      <Section heading="9. Contact Information">
        <Para>If you have questions about this Disclaimer, please contact us as follows:</Para>
        <Para>World Within<br />Email: <a href="mailto:info@worldwithin.org" className="lp-link">info@worldwithin.org</a><br />Website: <a href="https://worldwithin.org" target="_blank" rel="noopener noreferrer" className="lp-link">WorldWithin.org</a></Para>
      </Section>

    </LegalLayout>
  )
}

// ── Cookies Policy ────────────────────────────────────────────────────────────

export function CookiesPolicyPage() {
  return (
    <LegalLayout headline="Cookies Policy" effectiveDate="July 31, 2025">

      <Section heading="Introduction">
        <Para>By continuing to use this website (the "Site") operated by World Within ("World Within," "we," or "us"), you consent to the placement of cookies and similar technologies in accordance with this Cookie Policy ("Policy"), unless you disable them through your browser settings or our on-site cookie-consent tool. For additional information on how we process personal data, please review our <a href="/privacy-policy" className="lp-link">Privacy Policy</a>.</Para>
      </Section>

      <Section heading="1. What Are Cookies?">
        <Para>Cookies are small text files placed on your device when you visit a website, together with similar technologies such as web beacons, pixels, and local-storage objects (collectively, "cookies"). They enable core functionality, enhance performance, and provide analytics data to website operators.</Para>
      </Section>

      <Section heading="2. Types of Cookies Used">
        <Para>World Within employs four broad categories of cookies on the Site. Strictly necessary cookies enable core functions such as page navigation, form security, and session management without which the Site cannot operate correctly. Functional cookies remember your preferences—for example, language selection or display settings—so you don't have to reset them on each visit. Performance and analytics cookies, including Google Analytics identifiers like "_ga," gather aggregated, anonymous statistics about how visitors interact with the Site; this helps us measure traffic patterns and improve content and usability. Finally, advertising cookies would track browsing habits to deliver or measure personalized advertising, but none are in use at this time; if that changes, this Policy will be updated to describe them.</Para>
      </Section>

      <Section heading="3. How Cookies Are Used">
        <Para>World Within uses cookies to operate and secure the Site, remember your settings and preferences, analyze traffic patterns to improve content, and measure the effectiveness of outreach and fundraising campaigns. The legal basis for setting any non-essential cookies is your consent, and each cookie is retained only for as long as necessary to fulfill these stated purposes.</Para>
      </Section>

      <Section heading="4. Third-Party Cookies">
        <Para>Third-party services integrated into the Site—such as Google Analytics or embedded YouTube videos—may set their own cookies to collect device identifiers, IP addresses, or browsing information. These cookies are governed by the third party's privacy policy.</Para>
      </Section>

      <Section heading="5. Your Choices & Managing Cookies">
        <Para>You can manage or disable cookies at any time through your browser settings or our on-site cookie-consent tool. Because World Within does not sell or share personal information for advertising purposes, Global Privacy Control (GPC) signals do not trigger any additional changes on our Site; nevertheless, we honor GPC by ensuring that no advertising or data-sharing cookies are loaded in the first place. Please note that disabling certain cookies may affect Site functionality.</Para>
      </Section>

      <Section heading="6. Changes to the Cookie Policy">
        <Para>We may revise this Policy periodically. When we make material changes, we will update the "Effective Date" and provide a prominent notice on the Site or through the cookie-consent banner. Your continued use of the Site constitutes acceptance of the revised Policy.</Para>
      </Section>

      <Section heading="7. Contact Information">
        <Para>If you have questions about this Policy, please contact us as follows:</Para>
        <Para>World Within<br />Email: <a href="mailto:info@worldwithin.org" className="lp-link">info@worldwithin.org</a><br />Website: <a href="https://worldwithin.org" target="_blank" rel="noopener noreferrer" className="lp-link">WorldWithin.org</a></Para>
      </Section>

    </LegalLayout>
  )
}

import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import heroImage from './assets/seadoo-hero.jpeg'
import clusterBefore from './assets/cluster-before.jpeg'
import clusterBeforeRepair from './assets/cluster-before-repair.jpeg'
import clusterRepair from './assets/cluster-repair.jpeg'
import clusterAfter from './assets/cluster-after.jpeg'

function Layout({ children }) {
  return (
    <div className="page">
      <header
        className="hero hero-small"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.55), rgba(2, 6, 23, 0.78)), url(${heroImage})`,
        }}
      >
        <div className="overlay">
          <nav className="nav">
            <div className="brand">
              <img
                src="/logo.png"
                alt="Marks Sea-Doo Repair Logo"
                className="site-logo"
              />
              <p className="eyebrow">Central Texas</p>
              <h1>Marks Sea-Doo Repair</h1>
            </div>
            <a href="#contact" className="nav-btn">Contact</a>
          </nav>

          <section className="hero-content hero-content-small">
            <div className="badge-row">
              <span className="badge amber">No fix, no repair labor charge</span>
              <span className="badge green">Older skis welcome</span>
            </div>

            <h2>Keeping older Sea-Doo models running when dealerships won’t.</h2>

            <p className="subheadline">
              Small independent mobile Sea-Doo repair serving Central Texas riders.
            </p>

            <p>
              Mobile Sea-Doo repair serving Austin, Georgetown, Cedar Park, Leander,
              Round Rock, Temple, Belton, Liberty Hill, Lake Travis, and nearby
              Central Texas areas.
            </p>
          </section>
        </div>
      </header>

      <main>{children}</main>

      <section id="contact" className="section">
        <div className="contact-panel">
          <p className="section-label">Contact</p>
          <h3>Ready to get your ski looked at?</h3>
          <p>
            Call or text with the year, model, and symptoms of your Sea-Doo.
            Mobile service available around Central Texas lakes and surrounding
            cities. If the issue cannot be repaired, there is no repair labor charge.
          </p>

          <p className="availability-note">
            Appointments are scheduled based on availability since this is an
            independent side operation.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <p className="contact-label">Phone</p>
              <p className="contact-value">(512) 817-3499</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">Email</p>
              <p className="contact-value">info@marksseadoorepair.com</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">Facebook</p>
              <p className="contact-value">Marks Sea-Doo Repair</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HomePage() {
  const services = [
    {
      title: 'Oil Change',
      price: '$85 – $140',
      path: '/oil-change',
      summary: 'Economy and premium naturally aspirated options.',
    },
    {
      title: 'Carbon Seal Replacement',
      price: '$400',
      path: '/carbon-seal-replacement',
      summary: 'OEM parts with driveline inspection.',
    },
    {
      title: 'Wear Ring Replacement',
      price: '$200',
      path: '/wear-ring-replacement',
      summary: 'Fix cavitation and poor acceleration issues.',
    },
    {
      title: 'LCD Gauge Cluster Repair',
      price: '$150 – $250',
      path: '/lcd-gauge-cluster-repair',
      summary: 'Fix sun damaged or faded Sea-Doo screens.',
    },
    {
      title: 'Diagnostic Scan',
      price: '$60',
      path: '/diagnostic-scan',
      summary: 'Fault codes, troubleshooting, and recommendations.',
    },
  ]

  return (
    <Layout>
      <section id="about" className="section">
        <div className="two-col">
          <div className="panel">
            <p className="section-label">About</p>
            <h3>Built for the jobs many shops don’t want.</h3>
            <p>
              Marks Sea-Doo Repair started from a simple goal: giving broken and
              unwanted Sea-Doos a second chance.
            </p>
            <p>
              What began as a hobby fixing flooded skis and machines with blown
              engines quickly turned into hands-on experience working on these
              watercraft and bringing them back to life.
            </p>
            <p>
              The idea for offering repair services came after trying to take a
              Sea-Doo to a dealership just to have a key programmed. The wait time
              was months, and the dealership explained they typically do not work on
              watercraft that are more than 10 years old.
            </p>
            <p>
              Marks Sea-Doo Repair operates as a small independent side business
              built around helping riders who may not have the time, tools, or
              experience to work on their own machines.
            </p>
          </div>

          <div className="panel highlight">
            <p className="section-label">Special focus</p>
            <div className="stack">
              <div>
                <h4>Diagnostics</h4>
                <p>
                  Fault codes, starting issues, electrical problems, and check
                  engine troubleshooting.
                </p>
              </div>
              <div>
                <h4>Older models</h4>
                <p>
                  Helping keep older naturally aspirated Sea-Doo models running
                  when dealerships turn them away.
                </p>
              </div>
              <div>
                <h4>Cluster help</h4>
                <p>
                  2010+ gauge cluster LCD related service and troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-top">
          <div>
            <p className="section-label">Services & Pricing</p>
            <h3>Click a service to view details</h3>
          </div>
          <p className="section-note">
            Fixed pricing for common jobs. Additional services are available and
            priced based on parts, model, and repair needs.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <Link to={service.path} className="service-link-card" key={service.title}>
              <div className="service-link-top">
                <h4>{service.title}</h4>
                <p className="service-link-price">{service.price}</p>
              </div>
              <p className="service-link-summary">{service.summary}</p>
              <span className="service-link-button">View Details</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-top">
          <div>
            <p className="section-label">Additional Services</p>
            <h3>Other repairs and troubleshooting available</h3>
          </div>
          <p className="section-note">
            These services are available but priced after inspection, model
            confirmation, and parts lookup.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <h4>Starter Replacement</h4>
            <p>Price determined by model and labor required.</p>
          </div>

          <div className="problem-card">
            <h4>Fuel Pump Replacement</h4>
            <p>Price determined by parts and machine condition.</p>
          </div>

          <div className="problem-card">
            <h4>iBR Troubleshooting</h4>
            <p>Diagnostics and repair pricing determined after inspection.</p>
          </div>

          <div className="problem-card">
            <h4>Cooling System Repair</h4>
            <p>
              Sand, blockage, overheating, and water flow issues quoted as needed.
            </p>
          </div>

          <div className="problem-card">
            <h4>Electrical Troubleshooting</h4>
            <p>
              Wiring faults, sensor issues, and no-start diagnosis quoted by issue.
            </p>
          </div>

          <div className="problem-card">
            <h4>Key Programming / Learning</h4>
            <p>
              Available on supported models. Price depends on machine and key setup.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-top">
          <div>
            <p className="section-label">Common Problems</p>
            <h3>Common Sea-Doo Problems We Fix</h3>
          </div>
          <p className="section-note">
            Many riders run into the same issues. Here are some of the most common
            problems we diagnose and repair.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <h4>Cavitation</h4>
            <p>
              Engine revs high but the ski barely accelerates. Often caused by a
              worn wear ring or damage inside the jet pump.
            </p>
          </div>

          <div className="problem-card">
            <h4>Carbon Seal Leaks</h4>
            <p>
              Water appearing in the hull while riding can indicate a worn carbon
              seal or driveline issue.
            </p>
          </div>

          <div className="problem-card">
            <h4>Starter Failure</h4>
            <p>
              Pressing the start button and hearing clicking or no crank at all can
              indicate a worn starter or electrical issue.
            </p>
          </div>

          <div className="problem-card">
            <h4>Faded Gauge Cluster Screens</h4>
            <p>
              Sun damage can cause LCD displays on many Sea-Doo models to fade or
              become unreadable. These displays can often be repaired.
            </p>
          </div>

          <div className="problem-card">
            <h4>Check Engine Lights</h4>
            <p>
              Sensors, electrical faults, and system errors can trigger warning
              lights that require proper diagnostics.
            </p>
          </div>

          <div className="problem-card">
            <h4>iBR Problems</h4>
            <p>
              Reverse or brake system issues can come from sensors, calibration
              issues, or electrical faults.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="section-label">Models Serviced</p>
        <h3>Naturally Aspirated Sea-Doo Models</h3>

        <p>
          Marks Sea-Doo Repair primarily focuses on naturally aspirated 4-stroke
          Sea-Doo models commonly found around Central Texas lakes.
        </p>

        <ul className="model-list">
          <li>Sea-Doo GTI</li>
          <li>Sea-Doo GTX (non-supercharged)</li>
          <li>Sea-Doo Wake models</li>
        </ul>

        <p>
          Services are currently focused on naturally aspirated models and common
          maintenance and repair work.
        </p>
      </section>
    </Layout>
  )
}

function ServicePage({ title, price, children }) {
  return (
    <Layout>
      <section className="section">
        <div className="detail-wrap">
          <div className="detail-back">
            <Link to="/">← Back to Services</Link>
          </div>

          <div className="detail-card">
            <p className="section-label">Service Details</p>
            <h3>{title}</h3>
            <p className="detail-price">{price}</p>
            <div className="detail-content">{children}</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function OilChangePage() {
  return (
    <ServicePage title="Oil Change" price="$85 – $140">
      <div className="detail-block">
        <h4>Economy Oil Change — $85</h4>
        <ul>
          <li>Shell Rotella T6 full synthetic oil</li>
          <li>Oil filter included</li>
          <li>O-rings included</li>
          <li>Quick inspection included</li>
          <li>Recommended for naturally aspirated Sea-Doo models</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>Premium Oil Change — $120</h4>
        <ul>
          <li>Liqui Moly full synthetic oil</li>
          <li>Oil filter included</li>
          <li>O-rings included</li>
          <li>Quick inspection included</li>
          <li>Upgraded synthetic oil service</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>OEM Oil Change — $140</h4>
        <ul>
          <li>BRP XPS OEM oil</li>
          <li>OEM filter included</li>
          <li>O-rings included</li>
          <li>Quick inspection included</li>
          <li>Available depending on model and service request</li>
        </ul>
      </div>
    </ServicePage>
  )
}

function CarbonSealPage() {
  return (
    <ServicePage title="Carbon Seal Replacement" price="$400">
      <div className="detail-block">
        <h4>What’s Included</h4>
        <ul>
          <li>OEM carbon seal parts</li>
          <li>Installation</li>
          <li>Driveline inspection</li>
          <li>OEM parts only for this service</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>Common Symptoms</h4>
        <ul>
          <li>Water in the hull</li>
          <li>Leaking around the driveshaft area</li>
          <li>Driveline related concerns</li>
        </ul>
      </div>
    </ServicePage>
  )
}

function WearRingPage() {
  return (
    <ServicePage title="Wear Ring Replacement" price="$200">
      <div className="detail-block">
        <h4>What’s Included</h4>
        <ul>
          <li>Jet pump removal</li>
          <li>Wear ring replacement</li>
          <li>Pump inspection</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>Common Symptoms</h4>
        <ul>
          <li>Cavitation</li>
          <li>Poor acceleration</li>
          <li>High RPM but low speed</li>
        </ul>
      </div>
    </ServicePage>
  )
}

function ClusterRepairPage() {
  return (
    <ServicePage title="LCD Gauge Cluster Repair (2010+)" price="$150 – $250">
      <div className="detail-block">
        <h4>Pricing</h4>
        <ul>
          <li>$150 with original housing</li>
          <li>$250 with new housing</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>Repairs Common Problems</h4>
        <ul>
          <li>Sun damaged screen</li>
          <li>Faded LCD display</li>
          <li>Dark or unreadable screen</li>
          <li>Burned looking screen damage</li>
        </ul>
      </div>

      <div className="detail-block">
        <h4>Example Repair Process</h4>
        <div className="repair-steps">
          <div className="repair-step">
            <img src={clusterBefore} alt="Sun damaged Sea-Doo gauge cluster before repair" />
            <p>Before</p>
          </div>

          <div className="repair-step">
            <img src={clusterBeforeRepair} alt="Sea-Doo cluster before repair work" />
            <p>Before Repair</p>
          </div>

          <div className="repair-step">
            <img src={clusterRepair} alt="Sea-Doo gauge cluster repair in process" />
            <p>Repair Process</p>
          </div>

          <div className="repair-step">
            <img src={clusterAfter} alt="Finished Sea-Doo gauge cluster repair" />
            <p>Finished Result</p>
          </div>
        </div>
      </div>

      <div className="detail-block">
        <h4>Note</h4>
        <p>Cluster must be functional aside from LCD damage.</p>
      </div>
    </ServicePage>
  )
}

function DiagnosticPage() {
  return (
    <ServicePage title="Diagnostic Scan" price="$60">
      <div className="detail-block">
        <h4>What’s Included</h4>
        <ul>
          <li>Fault code scan</li>
          <li>Troubleshooting guidance</li>
          <li>Repair recommendations</li>
        </ul>
      </div>
    </ServicePage>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/oil-change" element={<OilChangePage />} />
      <Route path="/carbon-seal-replacement" element={<CarbonSealPage />} />
      <Route path="/wear-ring-replacement" element={<WearRingPage />} />
      <Route path="/lcd-gauge-cluster-repair" element={<ClusterRepairPage />} />
      <Route path="/diagnostic-scan" element={<DiagnosticPage />} />
    </Routes>
  )
}
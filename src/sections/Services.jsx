import {
  Bot,
  Cable,
  Database,
  Headset,
  MessageCircle,
  ShoppingCart,
  UserRoundSearch,
  Workflow,
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard.jsx'

const services = [
  {
    icon: Workflow,
    title: 'n8n Automation',
    description: 'Design and development of automated workflows using n8n to connect tools, trigger actions and orchestrate processes.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'AI-powered workflows that use intelligent processing to classify, generate, analyze or route information.',
  },
  {
    icon: Cable,
    title: 'API Integrations',
    description: 'Connect applications and services through APIs, webhooks and automated data flows.',
  },
  {
    icon: MessageCircle,
    title: 'Telegram Bots & Chatbots',
    description: 'Automated Telegram experiences for notifications, interactions, support and workflow triggers.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Automation',
    description: 'Automate repetitive e-commerce operations such as order processing, notifications, data handling and customer workflows.',
  },
  {
    icon: UserRoundSearch,
    title: 'Lead Automation',
    description: 'Capture, process and route leads automatically between forms, platforms, databases and communication tools.',
  },
  {
    icon: Headset,
    title: 'Customer Support Automation',
    description: 'Build workflows that organize incoming requests, automate responses and route information to the right place.',
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Automate data collection, transformation, filtering and movement between different systems.',
  },
]

function Services() {
  return (
    <section className="services-section section-space" id="services" aria-labelledby="services-title">
      <div className="page-container">
        <div className="services-heading">
          <div>
            <p className="section-eyebrow type-label">
              <span className="section-eyebrow-mark" aria-hidden="true" />
              WHAT I BUILD
            </p>
            <h2 className="section-title type-heading" id="services-title">
              Automation Systems Built Around Your Workflow.
            </h2>
          </div>
          <p className="services-intro">
            From connecting your tools to automating repetitive operations, I build workflows
            designed around real processes and specific use cases.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
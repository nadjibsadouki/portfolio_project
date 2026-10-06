function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <article
      className="service-card premium-card fade-up"
      style={{ '--card-index': index }}
    >
      <div className="service-card-topline">
        <span className="service-icon-wrap" aria-hidden="true">
          <Icon size={19} strokeWidth={1.7} />
        </span>
        <span className="service-card-index type-code" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="service-card-accent" aria-hidden="true" />
    </article>
  )
}

export default ServiceCard
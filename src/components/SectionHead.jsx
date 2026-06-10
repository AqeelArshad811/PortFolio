export default function SectionHead({ num, label, title }) {
  return (
    <div className="sec-head">
      <span className="eyebrow">
        <span className="num">{num}</span> / {label}
      </span>
      <h2 data-reveal className="reveal">{title}</h2>
    </div>
  )
}

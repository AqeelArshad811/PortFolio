export default function SystemMap() {
  return (
    <div
      className="sysmap"
      aria-label="System architecture diagram: a React client connected to a NestJS API layer, which connects to PostgreSQL, Twilio, and an AI/MCP service layer"
    >
      <div className="sysmap-head">
        <span>system.map</span>
        <span>live</span>
      </div>
      <svg viewBox="0 0 460 320" role="img">
        {/* static links */}
        <path className="link" d="M110 60 H230 V140" />
        <path className="link" d="M230 200 V250 H110" />
        <path className="link" d="M310 170 H360" />
        <path className="link" d="M310 110 H360 V60" />
        <path className="link" d="M310 230 H360 V275" />

        {/* animated signal flows */}
        <path className="flow" d="M110 60 H230 V140" />
        <path className="flow d2" d="M230 200 V250 H110" />
        <path className="flow d3" d="M310 110 H360 V60" />
        <path className="flow d4" d="M310 230 H360 V275" />

        {/* Client */}
        <rect className="node-box" x="14" y="40" width="96" height="40" rx="3" />
        <text className="node-label" x="62" y="58" textAnchor="middle">CLIENT</text>
        <text className="node-sub" x="62" y="71" textAnchor="middle">React · Next.js</text>

        {/* Realtime */}
        <rect className="node-box" x="14" y="230" width="96" height="40" rx="3" />
        <text className="node-label" x="62" y="248" textAnchor="middle">REALTIME</text>
        <text className="node-sub" x="62" y="261" textAnchor="middle">Socket.io</text>

        {/* Core API */}
        <rect className="node-box core" x="208" y="140" width="104" height="60" rx="3" />
        <text className="node-label" x="260" y="166" textAnchor="middle">API LAYER</text>
        <text className="node-sub" x="260" y="181" textAnchor="middle">NestJS · Node · TS</text>

        {/* Data */}
        <rect className="node-box" x="360" y="40" width="86" height="40" rx="3" />
        <text className="node-label" x="403" y="58" textAnchor="middle">DATA</text>
        <text className="node-sub" x="403" y="71" textAnchor="middle">Prisma · PG</text>

        {/* Comms */}
        <rect className="node-box" x="360" y="150" width="86" height="40" rx="3" />
        <text className="node-label" x="403" y="168" textAnchor="middle">COMMS</text>
        <text className="node-sub" x="403" y="181" textAnchor="middle">Twilio</text>

        {/* AI / MCP */}
        <rect className="node-box" x="360" y="255" width="86" height="40" rx="3" />
        <text className="node-label" x="403" y="273" textAnchor="middle">AI / MCP</text>
        <text className="node-sub" x="403" y="286" textAnchor="middle">orchestration</text>
      </svg>
    </div>
  )
}

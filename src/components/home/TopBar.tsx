export default function TopBar() {
  return (
    <a
      href="https://mboka.finance"
      data-screen-label="Top bar"
      style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, flexWrap: "wrap", background: "#3B2ED3", color: "#fff", padding: "10px 20px", fontSize: 14, textAlign: "center", textDecoration: "none" }}
    >
      <span style={{ padding: "2px 9px", borderRadius: 999, background: "#FFB224", color: "#131126", fontSize: 12, fontWeight: 700 }}>New</span>
      <span>Mboka: real business bank accounts, cards and payouts in one web app. Visit mboka.finance →</span>
    </a>
  );
}

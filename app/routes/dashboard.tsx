export default function Dashboard() {
  return (
    <>
      <p>Dashboard</p>
      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>
          This is some temporary content to make the page scrollable. Item{" "}
          {i + 1}
        </p>
      ))}
    </>
  );
}

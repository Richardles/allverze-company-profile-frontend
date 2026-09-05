interface HomeProps {
  companyName?: string;
}

export default function Home({ companyName = 'Allverze Corporation' }: HomeProps) {
  return (
    <section className="page home-page">
      <h1>Welcome to {companyName}</h1>
      <p>Connecting Possibilities.</p>
      <p>Find your way here.</p>
    </section>
  );
}
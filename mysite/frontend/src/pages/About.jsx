import { Helmet } from "react-helmet";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Big Marketing Agency",
  "url": "https://www.bigagency.co.uk",
  "logo": "https://www.bigagency.co.uk/images/logo.png",
  "description": "Big is a full-service digital marketing agency...",
  "telephone": "+44 1234 567890",
  // ...rest of the fields
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | My Site</title>
        <meta name="description" content="Learn more about our team and mission." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </>
  );
}
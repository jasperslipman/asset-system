import { Helmet } from "react-helmet";
import NavBar from "../components/navbar/NavBar";
import '../styles/jasperminimalreset.css';
import '../styles/jaspernormalize.css'; 
import '../styles/designsystem.css'

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

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | My Site</title>
        <meta name="description" content="Welcome to our amazing site." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <NavBar />
      <h1>Welcome to My Site</h1>
      <p>This is the home page.</p>
      

    </>
  );
}
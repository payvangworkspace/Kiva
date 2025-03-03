import React from "react";

const cardData = [
    {
      title: "Drag and Drop Functionality",
      description:
        "Effortlessly manage your workflow with intuitive drag-and-drop features, providing seamless control and efficiency for your business operations.",
      imageUrl: "/service1.png",
    },
    {
      title: "Transparent Pricing",
      description:
        "Enjoy a straightforward pricing model with no hidden fees. Our end-to-end payment gateway ensures cost-effectiveness with no monthly charges post-integration.",
      imageUrl: "/service2.png",
    },
    {
      title: "Optimized Performance",
      description:
        "Enhance your payment process with advanced optimization, ensuring top-tier security, efficiency, and reliability for every transaction.",
      imageUrl: "/service3.png",
    },
    {
      title: "Advanced Dashboard",
      description:
        "Gain real-time insights and analytics to make informed decisions. Access key stats and generate customizable reports with ease.",
      imageUrl: "/facility.png",
    },
    {
      title: "Safe and Secure",
      description:
        "Security is our top priority. We exceed industry standards to ensure that every transaction on our platform is 100% secure.",
      imageUrl: "/service5.png",
    },
    {
        title: "24/7 Dedicated Support",
        description:
          "Our expert support team is available anytime via chat, email, or phone to provide seamless assistance and instant resolution to your concerns.",
        imageUrl: "/service1.png",
      },
  ];

const ModernSection = () => {
  return (
    <section className="modern-ui-section">
      <div className="modern-ui-container">
        <h2 className="modern-ui-title">Why Choose Us?</h2>
        <div className="modern-ui-card-container">
          {cardData.map((card, index) => (
            <div className="modern-ui-card" key={index}>
              <img src={card.imageUrl} alt={card.title} className="modern-ui-card-image" />
              <h3 className="modern-ui-card-title">{card.title}</h3>
              <p className="modern-ui-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSection;

// CSS (Separate file: ModernSection.css)
const styles = `
.modern-ui-section {
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f9f9f9, #e3eaf1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.modern-ui-container {
  max-width: 1200px;
  width: 100%;
}

.modern-ui-title {
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 3rem;
}

.modern-ui-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
  width: 100%;
}

.modern-ui-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  max-width: 320px;
  margin: 0 auto;
}

.modern-ui-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.modern-ui-card-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.2rem;
  transition: transform 0.3s ease-in-out;
}

.modern-ui-card:hover .modern-ui-card-image {
  transform: scale(1.05);
}

.modern-ui-card-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #0056b3;
  margin-bottom: 0.8rem;
}

.modern-ui-card-description {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .modern-ui-title {
    font-size: 2.5rem;
  }
  .modern-ui-card {
    padding: 1.5rem;
  }
  .modern-ui-card-title {
    font-size: 1.4rem;
  }
  .modern-ui-card-description {
    font-size: 1rem;
  }
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

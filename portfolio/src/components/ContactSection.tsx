import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "Rannieri Mazzali", email: "rannieri.mazzali@outlook.com", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-caldeira-950 to-iron-950"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="gradient-text-caldeira">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-caldeira-300">
            Estamos prontos para ajudar sua frota
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-dark">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="text-xl font-bold text-caldeira-300 mb-2">
                Localização
              </h4>
              <p className="text-caldeira-200">Brasil</p>
            </div>
            <div className="card-dark">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="text-xl font-bold text-caldeira-300 mb-2">
                Telefone
              </h4>
              <p className="text-caldeira-200">+351 936745950</p>
            </div>
            <div className="card-dark">
              <div className="text-3xl mb-3">✉️</div>
              <h4 className="text-xl font-bold text-caldeira-300 mb-2">Email</h4>
              <p className="text-caldeira-200">rannieri.mazzali@outlook.com</p>
            </div>
            <div className="card-dark">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="text-xl font-bold text-caldeira-300 mb-2">
                WhatsApp
              </h4>
              <p className="text-caldeira-200">+351 936745950</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-caldeira-300 font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-caldeira-800 border border-caldeira-600 rounded-lg text-white focus:outline-none focus:border-caldeira-400 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-caldeira-300 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-caldeira-800 border border-caldeira-600 rounded-lg text-white focus:outline-none focus:border-caldeira-400 transition-colors"
                  placeholder="seu.email@empresa.com"
                />
              </div>
              <div>
                <label className="block text-caldeira-300 font-semibold mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-caldeira-800 border border-caldeira-600 rounded-lg text-white focus:outline-none focus:border-caldeira-400 transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div>
                <label className="block text-caldeira-300 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-caldeira-800 border border-caldeira-600 rounded-lg text-white focus:outline-none focus:border-caldeira-400 transition-colors resize-none"
                  placeholder="Conte-nos sobre sua necessidade..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                {submitted ? "Mensagem enviada! ✓" : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

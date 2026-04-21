export function Testimonials() {
  const testimonials = [
    {
      name: "Mark Thompson",
      role: "Principal, MT Plumbing Services",
      content:
        "Since installing Contactify, I haven't missed a single emergency leak call. It's paid for itself ten times over in the first month.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBf47CKPpukVLWloBYWX8U4KDY5UOjKDg-z1dUdL2QJKwvuEosPw-_UPHxSoW3G8OCjJrWr2YagHPCy2luV2KVR08uIM7z9BpuP2ErrcpBUHNMIg3UpHNMfTGUCWzglr6G1WgCHBqhujGRFmC5bd2jDGtzE66IoQOH7Tbu6ESO2IFheO7IjHJXNuDXOwtML-azbUbguvQ8z8cb3_wizatiSByo_EEzspNK7wG6FoNTf0XkDVjKup2uaVVNTJYjtg1CcIU5ANfVxcVHo",
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Riverside Family Wellness",
      content:
        "The form builder is incredibly intuitive. We were able to create a secure intake process that our patients actually enjoy using.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAP3jls2fFKV9n-Yw5yqDLGZc-AelcfwnWFRv6r9cy8BfhV4fjv4JBl5zexbNmQjRjaAUkxyCiqGH1IE__TpKKbyFuoSsWTE51E2rl3n-WZ78THSOzUYgsYr91fDiBnElvg04WWgQ-CeodRXdKWw7TxH7eJGvnVqvODypNFuzHZhREbNPbmavmN1rx26AqEyt6415TdjbIgx9Muu24xjmr64YXgOM7GTS60-rzsBtyaIx6sYA5O3ktKHCHZC3dAp4IXS02wiprZsj1G",
      featured: true,
    },
    {
      name: "Julian Vance",
      role: "Senior Partner, Vance & Co. Law",
      content:
        "Privacy and professionalism are paramount in my field. Contactify delivers on both, helping me screen inquiries effectively.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNGF9w5KCEk79O2hyPdrr-sKXBdWdWfsJr5Os_rTFx63AjuD71x0AdL93Bi2CRNaXapaasxiLDft_EiFH19BVgp2ugJe8GmU7X7RK5ZJyqdhat0AmALtLRzYlCD-3l_qDCJ3OA9nNbVSQwPKfGMoySKAlkRTsHjFhqIzPXZAglE03OBO9OInHC73X9KABfxc-eKjfNqjs0UlukZyEUN2NER-uI7AxhMJQ69P-gsvdcl0rtaOzVvxG653w7niYDxwpsminXYUBK8UcC",
    },
  ];

  return (
    <section className="bg-background px-8 py-24" id="testimonials">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-primary mb-16 text-center text-4xl font-bold">
          Trusted by the Professionals
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-card ghost-border rounded-2xl p-8 italic ${t.featured ? "border-secondary border-t-4" : ""}`}
            >
              <p className="text-muted-foreground mb-8 leading-relaxed">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-4 not-italic">
                <img
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  src={t.image}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h5 className="text-primary text-sm font-bold">{t.name}</h5>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

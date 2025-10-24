// ===== PRODUCT DATA =====
const products = [
  {
    "id": 7,
    "name": "Sureglim-M1",
    "composition": "Glimepiride 1 mg + Metformin SR",
    "category": "Diabetes",
    "use": "Dual therapy for sugar control — stimulates insulin and reduces hepatic glucose.",
    "image_url": "assets/images/Sureglim-M1.jpg"
  },
  {
    "id": 8,
    "name": "Sureglim-M2",
    "composition": "Glimepiride 2 mg + Metformin SR",
    "category": "Diabetes",
    "use": "Stronger dose variant of Sureglim-M1 for advanced diabetic control.",
    "image_url": "assets/images/Sureglim-M2.jpg"
  },
  {
    "id": 10,
    "name": "Sureglim-MP1",
    "composition": "Glimepiride + Pioglitazone + Metformin SR",
    "category": "Diabetes",
    "use": "Improves insulin sensitivity and reduces glucose levels (lower strength).",
    "image_url": "assets/images/Sureglim-MP1.jpg"
  },
  {
    "id": 11,
    "name": "Sureglim-MP2",
    "composition": "Glimepiride + Pioglitazone + Metformin SR",
    "category": "Diabetes",
    "use": "Same as MP1 with higher Glimepiride strength for stronger effect.",
    "image_url": "assets/images/Sureglim-MP2.jpg"
  },
  {
    "id": 9,
    "name": "Sureglim-VG2",
    "composition": "Voglibose + Glimepiride + Metformin SR",
    "category": "Diabetes",
    "use": "Triple-action therapy controlling glucose absorption, secretion, and production.",
    "image_url": "assets/images/Sureglim-VG2.jpg"
  },
  {
    "id": 3,
    "name": "Saveglip-50",
    "composition": "Vildagliptin 50 mg",
    "category": "Diabetes",
    "use": "Improves insulin release and lowers blood sugar as monotherapy or adjunct.",
    "image_url": "assets/images/Saveglip-50.jpg"
  },
  {
    "id": 2,
    "name": "Saveglip-D",
    "composition": "Dapagliflozin + Vildagliptin SR",
    "category": "Diabetes",
    "use": "Dual-action glucose control — increases insulin and removes excess sugar via urine.",
    "image_url": "assets/images/Saveglip-D.jpg"
  },
  {
    "id": 1,
    "name": "Saveglip-M",
    "composition": "Vildagliptin + Metformin Hydrochloride",
    "category": "Diabetes",
    "use": "Improves blood sugar control by enhancing insulin secretion and reducing glucose production.",
    "image_url": "assets/images/Saveglip-M.jpg"
  },
  {
    "id": 5,
    "name": "Saveglip-DM",
    "composition": "Vildagliptin SR + Dapagliflozin + Metformin SR",
    "category": "Diabetes",
    "use": "Long-acting triple combination to maintain steady glucose levels.",
    "image_url": "assets/images/Saveglip-DM.jpg"
  },
  {
    "id": 4,
    "name": "Saveglip-Trio",
    "composition": "Dapagliflozin + Sitagliptin + Metformin",
    "category": "Diabetes",
    "use": "Triple therapy for comprehensive glycemic management.",
    "image_url": "assets/images/Saveglip-Trio.jpg"
  },
  {
    "id": 6,
    "name": "Tinsure-M",
    "composition": "Teneligliptin + Metformin ER",
    "category": "Diabetes",
    "use": "DPP-4 inhibitor and Metformin combo for insulin sensitivity and glucose reduction.",
    "image_url": "assets/images/Tinsure-M.jpg"
  },
  {
    "id": 12,
    "name": "Suretel-40",
    "composition": "Telmisartan 40 mg",
    "category": "Hypertension",
    "use": "Controls high blood pressure and prevents heart attacks.",
    "image_url": "assets/images/Suretel-40.jpg"
  },
  {
    "id": 13,
    "name": "Suretel-H",
    "composition": "Telmisartan + Hydrochlorothiazide",
    "category": "Hypertension",
    "use": "Combines ARB and diuretic for improved BP control.",
    "image_url": "assets/images/Suretel-H.jpg"
  },
  {
    "id": 23,
    "name": "AmloLife-AT",
    "composition": "Amlodipine + Atenolol",
    "category": "Hypertension",
    "use": "Used for management of high blood pressure and prevention of angina.",
    "image_url": "assets/images/AmloLife AT.jpg"
  },
  {
    "id": 14,
    "name": "Ristrose-10",
    "composition": "Rosuvastatin 10 mg",
    "category": "Cholesterol",
    "use": "Lowers LDL cholesterol and triglycerides; reduces risk of heart disease.",
    "image_url": "assets/images/Ristrose-10.jpg"
  },
  {
    "id": 15,
    "name": "Ristrose-F10",
    "composition": "Rosuvastatin 10 mg + Fenofibrate 160 mg",
    "category": "Cholesterol",
    "use": "Dual therapy for cholesterol and triglyceride reduction.",
    "image_url": "assets/images/Ristrose-F10.jpg"
  },
  {
    "id": 24,
    "name": "Levorist-M",
    "composition": "Levocetirizine 5 mg + Montelukast 10 mg",
    "category": "Allergy and sneezing",
    "use": "Relieves symptoms of allergic rhinitis such as runny nose and sneezing.",
    "image_url": "assets/images/Levorist-M.jpg"
  },
  {
    "id": 19,
    "name": "Coughsure Syrup",
    "composition": "Terbutaline + Bromhexine + Guaiphenesin + Menthol",
    "category": "Cough",
    "use": "Relieves productive cough, bronchitis, and chest congestion.",
    "image_url": "assets/images/Coughsure Syrup.jpg"
  },
  {
    "id": 25,
    "name": "Rabispeed-DSR",
    "composition": "Domperidone 30mg + Rabeprazole 20mg",
    "category": "Gastric",
    "use": "Reduces acid reflux and stomach discomfort.",
    "image_url": "assets/images/Rabispeed-DSR.jpg"
  },
  {
    "id": 18,
    "name": "IT-New 200",
    "composition": "Itraconazole 200 mg",
    "category": "Fungal infection",
    "use": "Treats fungal infections affecting skin, nails, or internal organs.",
    "image_url": "assets/images/IT New 200.jpg"
  },
  {
    "id": 16,
    "name": "PM-Sure",
    "composition": "Mecobalamin + Alpha Lipoic Acid + Pyridoxine + Folic Acid + Vitamin D3",
    "category": "Diabetic Neuropathy",
    "use": "Supports nerve repair and reduces diabetic neuropathic pain.",
    "image_url": "assets/images/PM-Sure.jpg"
  },
  {
    "id": 26,
    "name": "Active-M Syrup",
    "composition": "Lycopene + Multivitamins + Minerals + Antioxidants",
    "category": "Vitamin",
    "use": "General health tonic to improve energy and appetite.",
    "image_url": "assets/images/Active M Syrup.jpg"
  },
  {
    "id": 20,
    "name": "Active-M 4G",
    "composition": "Omega 3 + Ginseng + Green Tea + Ginkgo Biloba + Grape Seed + Antioxidants",
    "category": "Vitamin",
    "use": "Improves vitality, stamina, and immunity with potent antioxidants.",
    "image_url": "assets/images/Active-M 4G Softgel Capsules.jpg"
  },
  {
    "id": 17,
    "name": "Full-D3 60K",
    "composition": "Cholecalciferol 60000 IU",
    "category": "Vitamin",
    "use": "Vitamin D3 supplement for bone strength and calcium absorption.",
    "image_url": "assets/images/Full-D3 60K.jpg"
  },
  {
    "id": 21,
    "name": "Highrich Pro",
    "composition": "Protein + Vitamins + Minerals + DHA",
    "category": "Protein",
    "use": "General health supplement for energy, recovery, and strength.",
    "image_url": "assets/images/Highrich Pro Protein Powder.jpg"
  },
  {
    "id": 22,
    "name": "Highrich Pro-D",
    "composition": "Protein + Balanced Nutrition (Low Sugar)",
    "category": "Protein",
    "use": "Protein supplement designed for diabetics; supports strength and immunity.",
    "image_url": "assets/images/Highrich Pro-D Protein Powder.jpg"
  }
];



// ===== RENDER SECTIONS DYNAMICALLY =====
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");
  const navContainer = document.getElementById("category-nav");
  if (!container || !navContainer) return;

  // Group products by category
  const grouped = {};
  products.forEach(p => {
    const cat = p.category.trim();
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  });

  // ✅ Populate category navigation
  Object.keys(grouped).forEach((cat, i) => {
    const safeId = cat.toLowerCase().replace(/\s+/g, "-");
    navContainer.insertAdjacentHTML(
      "beforeend",
      `<a href="#${safeId}" class="nav-link px-3 py-2 text-nowrap ${i === 0 ? 'active' : ''}">
         ${cat}
       </a>`
    );
  });

  // ✅ Render category sections
  Object.keys(grouped).forEach((cat, i) => {
    const safeId = cat.toLowerCase().replace(/\s+/g, "-");
    const bgShade = i % 2 === 0 ? "bg-light" : "bg-white";

    const section = document.createElement("section");
    section.className = `py-5 ${bgShade} border-bottom`;
    section.id = safeId;

    section.innerHTML = `
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="fw-bold text-primary text-uppercase">${cat}</h2>
          <div class="divider mx-auto mb-4" style="width:80px;height:4px;background:#0d6efd;border-radius:2px;"></div>
        </div>
        <div class="row g-4" id="${safeId}-group"></div>
      </div>
    `;
    container.appendChild(section);

    const row = section.querySelector(`#${safeId}-group`);
    grouped[cat].forEach(p => {
      row.insertAdjacentHTML("beforeend", `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card border-0 shadow-lg overflow-hidden h-100 rounded-4">
            <div class="position-relative bg-light d-flex justify-content-center align-items-center" style="height: 320px;">
              <img src="${p.image_url || 'https://placehold.co/600x400?text=No+Image'}"
                   class="product-img img-fluid p-3"
                   alt="${p.name}"
                   style="object-fit: contain; max-height: 100%; border-radius: 12px;">
            </div>
            <div class="card-body p-4 d-flex flex-column">
              <h5 class="fw-semibold text-primary mb-2">${p.name}</h5>
              <p class="text-muted mb-1"><strong>Category:</strong> ${p.category}</p>
              <p class="small text-secondary mb-2"><strong>Composition:</strong> ${p.composition || "—"}</p>
              <p class="small text-dark flex-grow-1">${p.use}</p>
              <a href="product-details.html?id=${p.id}" class="btn btn-primary btn-sm px-4 rounded-pill mt-3 align-self-start">View Details</a>
            </div>
          </div>
        </div>
      `);
    });
  });

  // ✅ Scrollspy: highlight current category
  const navLinks = document.querySelectorAll("#category-nav .nav-link");
  const sections = Array.from(document.querySelectorAll("section"));
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 150;
      if (scrollY >= sectionTop) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) link.classList.add("active");
    });
  });

  // Assuming `grouped` is your category grouping object
const dropdown = document.getElementById('category-dropdown');
const nav = document.getElementById('category-nav');

if (dropdown && nav) {
  Object.keys(grouped).forEach(cat => {
    // populate desktop nav
    // nav.insertAdjacentHTML('beforeend', `
    //   <a href="#${cat.toLowerCase().replace(/\s+/g, '-')}" 
    //      class="nav-link px-3">${cat}</a>
    // `);

    // populate mobile dropdown
    dropdown.insertAdjacentHTML('beforeend', `
      <option value="#${cat.toLowerCase().replace(/\s+/g, '-')}">${cat}</option>
    `);
  });

  // smooth scroll for desktop
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // scroll behavior for dropdown
  dropdown.addEventListener('change', e => {
    const target = document.querySelector(e.target.value);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}

});

const options = document.querySelectorAll('.option-card');
            let selected = {};

            // контент для каждой комбинации
            const benefitsContent = {
              "role-company_interest-data": [
                {title: "Publish your concession (Mining Project)", body: "Get listed on Peru Mining Data and gain exposure to global investors."},
                {title: "Global visibility", body: "Let investors discover your project by region, mineral and volume of deposits."},
                {title: "Direct contact", body: "Investors can reach you through verified channels."},
                {title: "Benchmark your project", body: "Compare your concession against others in Peru’s mining landscape."},
                {title: "Ongoing promotion", body: "Keep your listing active and visible as the platform grows."}
              ],
              "role-company_interest-verified": [
                {title: "Investor-ready briefs", body: "Structured summaries following simplified NI 43-101 / JORC standards."},
                {title: "Professional packaging", body: "Present key data and advantages in a format investors expect."},
                {title: "Enhanced funding potential", body: "Stand out with a Verified Project badge, showing credibility and professionalism."},
                {title: "Targeted outreach", body: "Align your project brief with investors most interested in your commodity or region."},
                {title: "Growth-focused presentation", body: "Emphasize upside potential with data-driven storytelling."}
              ],
              "role-investor_interest-data": [
                {title: "Discover opportunities", body: "Access verified briefs of concessions across Peru (gold, silver, copper, and more)."},
                {title: "Save time on due diligence", body: "Review standardized project overviews in one place."},
                {title: "Direct access", body: "Verified contact details (email, phone, WhatsApp) of concession owners or owner representatives."},
                {title: "Filter by region & mineral", body: "Focus on the most relevant opportunities."},
                {title: "Market insights", body: "Track trends in Peru’s mining landscape with continuously updated data."}

              ],
              "role-investor_interest-verified": [
              {title: "Verified Legal Clearance", body: "Ensure your investment is fully secure with independent confirmation of mining permits, licenses, and compliance with Peruvian regulations."},
              {title: "Exclusive On-Site Assessments", body: "Get firsthand insights with detailed inspections of operations, infrastructure, and environmental conditions."},
              {title: "High-Precision Sampling & Assays", body: "Reliable collection and laboratory analysis of rock, soil, and mineral samples to confirm resource quality."},
              {title: "Comprehensive Documentation Support", body: "Navigate SUNARP records, title transfers, and all regulatory paperwork with expert guidance."},
              {title: "Strategic Feasibility & Risk Evaluation", body: "Receive detailed reports highlighting technical, operational, and financial risks, empowering confident investment decisions."}
              ]
            };

            // функция обновления аккордеона
            function updateAccordion() {
              if (selected.role && selected.interest) {
                const key = `${selected.role}_${selected.interest}`;
                const content = benefitsContent[key] || [];
                const accordion = document.getElementById('benefitsAccordion');
                accordion.innerHTML = "";

                content.forEach((item, index) => {
                  accordion.innerHTML += `
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button custom-accordion-btn ${index === 0 ? "" : "collapsed"}" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapse${index}" 
                                aria-expanded="${index === 0 ? "true" : "false"}" 
                                aria-controls="collapse${index}">
                          ${index+1}. ${item.title}
                        </button>
                      </h2>
                      <div id="collapse${index}" 
                          class="accordion-collapse collapse custom-accordion-btn-2 ${index === 0 ? "show" : ""}" 
                          data-bs-parent="#benefitsAccordion">
                        <div class="accordion-body">${item.body}</div>
                      </div>
                    </div>
                  `;
                });

                document.getElementById('benefitsSection').classList.remove('d-none');
              }
            }

            // обработка кликов
            options.forEach(opt => {
              opt.addEventListener('click', () => {
                const group = opt.closest('.row'); 
                group.querySelectorAll('.option-card').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                if(opt.id.includes('role')) {
                  selected.role = opt.id;
                } else {
                  selected.interest = opt.id;
                }
                updateAccordion(); // сразу обновляем при клике
              });
            });

            // кнопка Show Benefits тоже обновляет
            document.getElementById('showBenefits').addEventListener('click', () => {
              updateAccordion();
            });

            // при загрузке страницы выбрать дефолтные опции
            window.addEventListener('DOMContentLoaded', () => {
              document.getElementById('role-investor').classList.add('active');
              document.getElementById('interest-data').classList.add('active');
              selected.role = 'role-investor';
              selected.interest = 'interest-data';
              updateAccordion();
            });
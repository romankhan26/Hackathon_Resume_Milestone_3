function downloadPDF() {
  // Select the resume output section to download
  const resume = document.getElementById("resumeOutput");

  // Use html2pdf library to generate the PDF
  html2pdf()
    .set({
      margin: 0,
      filename: "My_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "px", format: [794.9, 1123], orientation: "portrait" },
    })
    .from(resume)
    .save();
}
//adding more experience
function addExperience() {
  const experienceSection = document.getElementById("experience-section");
  const experienceHTML = `
      <div>
        <input type="text" placeholder="Job Title" name="experienceTitle[]">
        <input type="text" placeholder="Company Name" name="experienceCompany[]">
        <input type="text" placeholder="from (date manually)" id="start" name="startDate[]" maxlength="16" >
        <input type="text" placeholder="to (date manually)" id="end" name="endDate[]" maxlength="16">
        <textarea placeholder="Describe your role..." name="experienceDescription[]"></textarea>
      </div>`;
  experienceSection.insertAdjacentHTML("beforeend", experienceHTML);
}
function addEducation() {
  const educationSection = document.getElementById("education-section");
  const educationHTML = `
      <div>
        <input type="text" placeholder="Degree" name="educationDegree[]">
        <input type="text" placeholder="Institute" name="educationUniversity[]">
        <input type="text" placeholder="from (date manually)" id="start" name="educationStartDate[]"maxlength="16" >
        <input type="text" placeholder="to (date manually)" id="end" name="educationEndDate[]" maxlength="16">
      </div>`;
  educationSection.insertAdjacentHTML("beforeend", educationHTML);
}

// adding more skills sections
function addSkill() {
  const skillsSection = document.getElementById("skills-section");
  const skillHTML = `<input type="text" name="skills[]" placeholder="Skill">`;
  skillsSection.insertAdjacentHTML("beforeend", skillHTML);
  //adding languages
}
function addLanguage() {
  const skillsSection = document.getElementById("language-section");
  const skillHTML = `<input type="text" name="language[]" placeholder="Language">`;
  skillsSection.insertAdjacentHTML("beforeend", skillHTML);
}
//rendering the data and resume html
document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    let resumeHTML = `
                    <div class="resume-head">
                        <div class="left">
                             <h1>${formData.get("name")}</h1>
                             <h3    >${formData.get("title")}</h3>
                        </div>
                        <p class="right">
                       <br>   <strong>Email:</strong> ${formData.get("email")}
                       <br>  <strong> Phone:</strong> ${formData.get("phone")}
                       <br>  <strong> Address:</strong> ${formData.get(
                         "address"
                       )}
                        </p>
                    </div>
                    <div class="resume-main">
                    <div class="left-side">
                   <h2>Professional Summary</h2>
                   <p class="objective">${formData.get(
                     "professional-summary"
                   )}</p>
                      `; //color to be blue or dark toned

    const experienceTitles = formData.getAll("experienceTitle[]");
    const experienceCompanies = formData.getAll("experienceCompany[]");
    const experienceDescriptions = formData.getAll("experienceDescription[]");
    const experienceDateStart = formData.getAll("startDate[]");
    const experienceDateEnd = formData.getAll("endDate[]");
    resumeHTML += `<br><h2>Professional Experience</h2>
                   <ul>`;

    experienceCompanies.forEach((company, i) => {
      resumeHTML += `
                    <li>
                    
                       <div class="flex_box">
                         <h4>${company}</h4>
                         <p class="date exp_date">${experienceDateStart[i]} - ${experienceDateEnd[i]}</p>
                       </div>
                       <h5>
                          <i>${experienceTitles[i]}</i>
                       </h5>
                       <p>${experienceDescriptions[i]}</p>
                    </li>`;
    });
    resumeHTML += `</ul></div>`;

    const skills = formData.getAll("skills[]");
    resumeHTML += `<div class="right-side"><h2>Skills</h2><ul>`;
    skills.forEach((skill) => {
      resumeHTML += `<li><p><strong>${skill}</strong></p></li>`;
    });
    resumeHTML += `</ul> `;

    const educationDegree = formData.getAll("educationDegree[]");
    const educationUniversity = formData.getAll("educationUniversity[]");
    const educationDateStart = formData.getAll("educationStartDate[]");
    const educationDateEnd = formData.getAll("educationEndDate[]");
    resumeHTML += `<br><h2>Education</h2><ul>`;

    educationUniversity.forEach((university, i) => {
      resumeHTML += `<li>
                       
      <h4>${university}</h4>      
      
      <h5> <i>${educationDegree[i]}</i><h5>
      <p class="date">${educationDateStart[i]} - ${educationDateEnd[i]}</p></li>`;
    });

    resumeHTML += `</ul> `;
    const languages = formData.getAll("language[]");
    resumeHTML += `<div class="right-side"><h2 class="lang">Languages</h2><ul>`;
    languages.forEach((language) => {
      resumeHTML += `<li style=" margin-left: 20%;"><p><strong>${language}</strong></p></li>`;
    });
    resumeHTML += `</ul></div></div>`;

    const primaryColorInput = document.getElementById("primary-color");
    const textColorInput = document.getElementById("text-color");
    const backgroundColorInput = document.getElementById("background-color");
    const secondBackgroundColorInput = document.getElementById(
      "second-background-color"
    );
    const dateColorInput = document.getElementById("date-color");
    const contactSectionColorInput = document.getElementById(
      "contact-section-color"
    );

    const primaryColor = primaryColorInput.value;
    const textColor = textColorInput.value;
    const backgroundColor = backgroundColorInput.value;
    const secondBackgroundColor = secondBackgroundColorInput.value;
    const dateColor = dateColorInput.value;
    const contactSectionColor = contactSectionColorInput.value;
    if (primaryColor == "#000000") {
    } else {
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
    }

    if (textColor == "#000000") {
    } else {
      document.documentElement.style.setProperty("--text-color", textColor);
    }
    if (backgroundColor == "#000000") {
    } else {
      document.documentElement.style.setProperty(
        "--background-color",
        backgroundColor
      );
    }
    if (secondBackgroundColor == "#000000") {
    } else {
      document.documentElement.style.setProperty(
        "--second-background-color",
        secondBackgroundColor
      );
    }
    if (dateColor == "#000000") {
    } else {
      document.documentElement.style.setProperty("--date-color", dateColor);
    }
    if (contactSectionColor == "#000000") {
    } else {
      document.documentElement.style.setProperty(
        "--contact-section-color",
        contactSectionColor
      );
    }
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
    document.getElementById("resumeOutput").style.display = "block";
    document.getElementById("downloadPDF").style.display = "block";
    document.getElementById("resumeForm").style.display = "none";
    document.getElementById("backButton").style.display = "block";
    document
      .getElementById("styleSheet")
      .setAttribute("href", "resume-styles.css"); // New CSS for the resume
  });

document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("resumeOutput").style.display = "none";
  document.getElementById("downloadPDF").style.display = "none";
  document.getElementById("resumeForm").style.display = "block";
  document.getElementById("backButton").style.display = "none";
  document.getElementById("styleSheet").setAttribute("href", "form-styles.css"); // Original CSS
});

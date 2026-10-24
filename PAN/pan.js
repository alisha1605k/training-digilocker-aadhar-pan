/* ========================================
   PAN SERVICES - JAVASCRIPT
======================================== */


/* ========================================
   PAN SERVICE INFORMATION
======================================== */

const panServices = [

    {
        title: "Apply for PAN",
        message:
            "Learn about applying for a new PAN through authorised PAN service providers. Applicants need to provide the required personal and supporting information."
    },

    {
        title: "Download e-PAN",
        message:
            "An e-PAN is an electronic version of the PAN document. Eligible users can access or download their e-PAN through authorised services after completing the required verification."
    },

    {
        title: "PAN Correction",
        message:
            "If there is an error in your PAN information, such as your name or date of birth, you can request a correction through an authorised PAN service."
    },

    {
        title: "Check PAN Status",
        message:
            "You can check the status of a PAN application or correction request through the authorised service portal using the required application details."
    },

    {
        title: "Verify PAN",
        message:
            "PAN verification allows authorised users or organisations to verify PAN details through the appropriate authorised verification service."
    },

    {
        title: "PAN Information",
        message:
            "PAN stands for Permanent Account Number. It is a unique ten-character alphanumeric identifier issued by the Income Tax Department of India and is commonly used for tax and financial identification."
    }

];


/* ========================================
   GET MODAL ELEMENTS
======================================== */

const infoModal = document.getElementById("infoModal");

const modalTitle = document.getElementById("modalTitle");

const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");

const modalCloseButton =
    document.getElementById("modalCloseButton");


/* ========================================
   GET LEARN MORE BUTTONS
======================================== */

const learnMoreButtons =
    document.querySelectorAll(".learn-more");


/* ========================================
   LEARN MORE BUTTON FUNCTION
======================================== */

learnMoreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const serviceIndex =
            Number(button.getAttribute("data-service"));


        const service =
            panServices[serviceIndex];


        if (!service) {
            return;
        }


        modalTitle.textContent =
            service.title;


        modalMessage.textContent =
            service.message;


        infoModal.classList.add("active");

    });

});


/* ========================================
   CLOSE USING X BUTTON
======================================== */

closeModal.addEventListener("click", function () {

    infoModal.classList.remove("active");

});


/* ========================================
   CLOSE USING CLOSE BUTTON
======================================== */

modalCloseButton.addEventListener("click", function () {

    infoModal.classList.remove("active");

});


/* ========================================
   CLOSE WHEN CLICKING OUTSIDE POPUP
======================================== */

infoModal.addEventListener("click", function (event) {

    if (event.target === infoModal) {

        infoModal.classList.remove("active");

    }

});


/* ========================================
   CLOSE USING ESCAPE KEY
======================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        infoModal.classList.remove("active");

    }

});
// ========================================
// AADHAAR SERVICES - MODAL POPUP
// ========================================

const buttons = document.querySelectorAll(".learn-more");

const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");

const closeModal = document.getElementById("closeModal");
const modalCloseButton = document.getElementById("modalCloseButton");


// Aadhaar service information

const serviceInformation = [

    {
        title: "Aadhaar Enrolment",
        message:
            "Aadhaar enrolment is the process of registering for Aadhaar through an authorised enrolment centre. Follow the official UIDAI process and provide the required information."
    },

    {
        title: "Update Aadhaar",
        message:
            "Eligible Aadhaar details can be updated through the available UIDAI services. The required process may depend on the type of information being updated."
    },

    {
        title: "Download Aadhaar",
        message:
            "An electronic copy of Aadhaar can be downloaded through the official UIDAI services when the user is eligible and has the required details."
    },

    {
        title: "Check Aadhaar Status",
        message:
            "You can check the status of an Aadhaar enrolment or update request through the appropriate UIDAI service."
    },

    {
        title: "Verify Aadhaar",
        message:
            "Aadhaar verification can be performed using the verification services provided by UIDAI."
    },

    {
        title: "Aadhaar Information",
        message:
            "Aadhaar is a 12-digit identification number issued by UIDAI to eligible residents of India. It is used for identity-related services and verification."
    }

];


// ========================================
// OPEN POPUP
// ========================================

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const serviceIndex = Number(
            button.getAttribute("data-service")
        );

        modalTitle.textContent =
            serviceInformation[serviceIndex].title;

        modalMessage.textContent =
            serviceInformation[serviceIndex].message;

        modal.classList.add("active");

    });

});


// ========================================
// CLOSE USING X
// ========================================

closeModal.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE USING CLOSE BUTTON
// ========================================

modalCloseButton.addEventListener("click", function() {

    modal.classList.remove("active");

});


// ========================================
// CLOSE BY CLICKING OUTSIDE
// ========================================

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// ========================================
// CLOSE USING ESCAPE
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});
// ========================================
// AADHAAR SERVICES - INTERACTIVE DEMO
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".learn-more");

    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    const closeModal = document.getElementById("closeModal");
    const modalCloseButton = document.getElementById("modalCloseButton");

    const services = [
        {
            title: "Aadhaar Enrolment",
            resultTitle: "Aadhaar Enrolment Acknowledgement",
            fields: [
                { label: "Applicant Name", name: "name", type: "text" },
                { label: "Enrolment Centre", name: "centre", type: "text" },
                { label: "Enrolment Type", name: "type", options: ["New Enrolment", "Child Enrolment", "Other"] }
            ]
        },
        {
            title: "Update Aadhaar",
            resultTitle: "Aadhaar Update Request Receipt",
            fields: [
                { label: "Applicant Name", name: "name", type: "text" },
                { label: "Update Type", name: "type", options: ["Address", "Mobile Number", "Email", "Other"] },
                { label: "Update Centre", name: "centre", type: "text" }
            ]
        },
        {
            title: "Download Aadhaar",
            resultTitle: "Sample Aadhaar Document Preview",
            fields: [
                { label: "Display Name", name: "name", type: "text" },
                { label: "Document Format", name: "format", options: ["PDF Preview", "Digital Preview"] },
                { label: "Purpose", name: "purpose", options: ["Personal Use", "Educational Demo", "Other"] }
            ]
        },
        {
            title: "Check Aadhaar Status",
            resultTitle: "Aadhaar Status Report",
            fields: [
                { label: "Applicant Name", name: "name", type: "text" },
                { label: "Request Type", name: "type", options: ["New Enrolment", "Aadhaar Update"] },
                { label: "Sample Reference Code", name: "reference", type: "text" }
            ]
        },
        {
            title: "Verify Aadhaar",
            resultTitle: "Aadhaar Verification Report",
            fields: [
                { label: "Display Name", name: "name", type: "text" },
                { label: "Verification Purpose", name: "purpose", options: ["Education", "Identity Demo", "Other"] },
                { label: "Sample Reference Code", name: "reference", type: "text" }
            ]
        },
        {
            title: "Aadhaar Information",
            resultTitle: "Aadhaar Information Card",
            fields: [
                { label: "Display Name", name: "name", type: "text" },
                { label: "Information Category", name: "category", options: ["About Aadhaar", "UIDAI Services", "Documents Required"] },
                { label: "Purpose", name: "purpose", options: ["Learning", "Educational Project", "General Information"] }
            ]
        }
    ];

    // ========================================
    // CREATE FORM FIELDS
    // ========================================

    function createField(field, index) {
        const group = document.createElement("div");
        group.className = "demo-form-group";

        const label = document.createElement("label");
        label.textContent = field.label;
        label.htmlFor = "aadhaarField" + index;

        let input;

        if (field.options) {
            input = document.createElement("select");
            input.required = true;

            const firstOption = document.createElement("option");
            firstOption.value = "";
            firstOption.textContent = "Select " + field.label;
            firstOption.disabled = true;
            firstOption.selected = true;
            input.appendChild(firstOption);

            field.options.forEach(function (option) {
                const item = document.createElement("option");
                item.value = option;
                item.textContent = option;
                input.appendChild(item);
            });

        } else {
            input = document.createElement("input");
            input.type = field.type || "text";
            input.placeholder = "Enter " + field.label;
            input.required = true;
            input.maxLength = 80;
        }

        input.id = "aadhaarField" + index;
        input.name = field.name;

        group.appendChild(label);
        group.appendChild(input);

        return group;
    }

    // ========================================
    // SAMPLE REFERENCE NUMBER
    // ========================================

    function createReference(index) {
        const prefixes = ["ENR", "UPD", "DWN", "STS", "VRF", "INF"];

        return prefixes[index] + "-" +
            Date.now().toString().slice(-8);
    }

    // ========================================
    // ADD RESULT ROW
    // ========================================

    function addRow(container, label, value) {
        const row = document.createElement("p");
        row.style.textAlign = "left";
        row.style.padding = "9px";
        row.style.borderBottom = "1px solid #dce5ef";
        row.style.margin = "0";

        const strong = document.createElement("strong");
        strong.textContent = label + ": ";

        row.appendChild(strong);
        row.appendChild(document.createTextNode(value));

        container.appendChild(row);
    }

    // ========================================
    // CREATE RESULT DOCUMENT
    // ========================================

    function createResult(index, values) {

        const service = services[index];
        const reference = createReference(index);

        const documentBox = document.createElement("div");

        documentBox.style.border = "5px double #245b91";
        documentBox.style.padding = "22px";
        documentBox.style.background = "#ffffff";
        documentBox.style.color = "#17365d";
        documentBox.style.marginTop = "20px";
        documentBox.style.textAlign = "center";

        const brand = document.createElement("h2");
        brand.textContent = "AADHAAR SERVICES";
        brand.style.color = "#245b91";
        documentBox.appendChild(brand);

        const heading = document.createElement("h3");
        heading.textContent = service.resultTitle;
        documentBox.appendChild(heading);

        const line = document.createElement("hr");
        documentBox.appendChild(line);

        const status = document.createElement("p");
        status.textContent = "DEMO / TRAINING OUTPUT";
        status.style.fontWeight = "bold";
        status.style.color = "#176b45";
        documentBox.appendChild(status);

        const details = document.createElement("div");
        details.className = "result-details";

        service.fields.forEach(function (field) {
            addRow(details, field.label, values[field.name]);
        });

        addRow(details, "Sample Reference Number", reference);
        addRow(details, "Generated On", new Date().toLocaleString("en-IN"));

        documentBox.appendChild(details);

        // Different result design for each service

        const message = document.createElement("p");
        message.style.marginTop = "18px";
        message.style.padding = "12px";
        message.style.background = "#eef5fc";
        message.style.borderRadius = "6px";

        const messages = [
            "Your sample enrolment acknowledgement has been generated for this educational demonstration.",
            "Your sample update request receipt has been generated. No actual Aadhaar information was changed.",
            "This is a sample document preview only. It is not an actual Aadhaar card or downloadable UIDAI document.",
            "This report displays the sample details entered in the training form. It does not show a real UIDAI request status.",
            "The sample form details have been recorded for demonstration. Aadhaar identity has not been verified.",
            "This information card is for learning about Aadhaar and UIDAI services."
        ];

        message.textContent = messages[index];
        documentBox.appendChild(message);

        const notice = document.createElement("p");
        notice.textContent =
            "Important: This document is generated by a student training website. It is not issued, approved, or verified by UIDAI. It has no official validity.";
        notice.style.fontSize = "12px";
        notice.style.color = "#a12b2b";
        notice.style.marginTop = "18px";

        documentBox.appendChild(notice);

        // Download PDF button

        const downloadButton = document.createElement("button");
        downloadButton.type = "button";
        downloadButton.textContent = "Download PDF";
        downloadButton.className = "demo-submit";
        downloadButton.style.marginTop = "15px";

        downloadButton.addEventListener("click", function () {

            const printWindow = window.open("", "_blank");

            if (!printWindow) {
                alert("Please allow popups to download the PDF.");
                return;
            }

            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Aadhaar Demo Document</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 30px;
                        }
                        p {
                            line-height: 1.6;
                        }
                        @media print {
                            body { margin: 10px; }
                        }
                    </style>
                </head>
                <body>
                    ${documentBox.outerHTML}
                </body>
                </html>
            `);

            printWindow.document.close();
            printWindow.onload = function () {
                printWindow.focus();
                printWindow.print();
            };
        });

       return documentBox;
    }

    // ========================================
    // OPEN EACH SERVICE
    // ========================================

    function openService(index) {

        const service = services[index];

        modalTitle.textContent = service.title;
        modalMessage.textContent = "";

        const form = document.createElement("form");
        form.className = "demo-form";

        const heading = document.createElement("h3");
        heading.textContent = "Enter Sample Details";
        form.appendChild(heading);

        service.fields.forEach(function (field, fieldIndex) {
            form.appendChild(createField(field, fieldIndex));
        });

        const notice = document.createElement("p");
        notice.className = "demo-notice";
        notice.textContent =
            "Use sample information only. Never enter your real Aadhaar number or OTP.";
        form.appendChild(notice);

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.className = "demo-submit";
        submit.textContent = "Generate Result";
        form.appendChild(submit);

        const reset = document.createElement("button");
        reset.type = "reset";
        reset.className = "demo-reset";
        reset.textContent = "Reset";
        form.appendChild(reset);

        const oldResult = document.getElementById("aadhaarDemoResult");
        if (oldResult) oldResult.remove();

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const values = {};

            service.fields.forEach(function (field) {
                const input = form.elements[field.name];
                values[field.name] = input.value.trim();
            });

            const result = createResult(index, values);
            result.id = "aadhaarDemoResult";

            const existing = document.getElementById("aadhaarDemoResult");
            if (existing) existing.remove();

            form.appendChild(result);
        });

        form.addEventListener("reset", function () {
            const result = document.getElementById("aadhaarDemoResult");
            if (result) result.remove();
        });

        modalMessage.appendChild(form);
        modal.classList.add("active");
    }

    // ========================================
    // OPEN SERVICE BUTTONS
    // ========================================

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const index = Number(button.getAttribute("data-service"));

            if (index >= 0 && index < services.length) {
                openService(index);
            }

        });

    });

    // ========================================
    // CLOSE MODAL
    // ========================================

    function hideModal() {
        modal.classList.remove("active");
    }

    closeModal.addEventListener("click", hideModal);
    modalCloseButton.addEventListener("click", hideModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            hideModal();
        }
    });

});

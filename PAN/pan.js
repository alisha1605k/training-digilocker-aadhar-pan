
document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // GET HTML ELEMENTS
    // ========================================

    const buttons = document.querySelectorAll(".learn-more");
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalMessage = document.getElementById("modalMessage");

    const closeModal = document.getElementById("closeModal");
    const modalCloseButton = document.getElementById("modalCloseButton");

    // ========================================
    // PAN SERVICES
    // ========================================

    const services = [
        {
            title: "Apply for PAN",
            resultTitle: "PAN Application Acknowledgement",
            fields: [
                { label: "Applicant Name", name: "name" },
                { label: "Application Type", name: "type", options: ["New PAN Application", "Reprint PAN Card"] },
                { label: "Applicant Category", name: "category", options: ["Individual", "Company", "Other"] },
                { label: "Application Mode", name: "mode", options: ["Online", "Offline"] }
            ]
        },
        {
            title: "Download e-PAN",
            resultTitle: "Sample e-PAN Preview",
            fields: [
                { label: "Display Name", name: "name" },
                { label: "Document Format", name: "format", options: ["Digital Preview", "PDF Preview"] },
                { label: "Purpose", name: "purpose", options: ["Educational Demo", "Personal Learning", "Other"] }
            ]
        },
        {
            title: "PAN Correction",
            resultTitle: "PAN Correction Request Receipt",
            fields: [
                { label: "Applicant Name", name: "name" },
                { label: "Correction Type", name: "type", options: ["Name Correction", "Date of Birth", "Address", "Other"] },
                { label: "Request Mode", name: "mode", options: ["Online", "Offline"] }
            ]
        },
        {
            title: "Check PAN Status",
            resultTitle: "PAN Application Status Report",
            fields: [
                { label: "Applicant Name", name: "name" },
                { label: "Request Type", name: "type", options: ["New PAN", "PAN Correction", "Reprint PAN"] },
                { label: "Sample Application Reference", name: "reference" }
            ]
        },
        {
            title: "Verify PAN",
            resultTitle: "PAN Verification Report",
            fields: [
                { label: "Display Name", name: "name" },
                { label: "Verification Purpose", name: "purpose", options: ["Educational Demo", "Identity Learning", "Other"] },
                { label: "Sample Reference Code", name: "reference" }
            ]
        },
        {
            title: "PAN Information",
            resultTitle: "PAN Information Card",
            fields: [
                { label: "Display Name", name: "name" },
                { label: "Information Category", name: "category", options: ["About PAN", "PAN Benefits", "PAN Application Process"] },
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
        label.htmlFor = "panField" + index;

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
            input.type = "text";
            input.placeholder = "Enter " + field.label;
            input.maxLength = 80;
            input.required = true;
        }

        input.id = "panField" + index;
        input.name = field.name;
        input.autocomplete = "off";

        group.appendChild(label);
        group.appendChild(input);

        return group;
    }

    // ========================================
    // GENERATE SAMPLE REFERENCE
    // ========================================

    function createReference(index) {

        const prefixes = ["APP", "EPAN", "COR", "STS", "VER", "INF"];

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

        

        documentBox.style.border = "5px double #245b91";
        documentBox.style.padding = "22px";
        documentBox.style.background = "#ffffff";
        documentBox.style.color = "#17365d";
        documentBox.style.marginTop = "20px";
        documentBox.style.textAlign = "center";

        const brand = document.createElement("h2");
        brand.textContent = "PAN SERVICES";
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

        // Different result messages

        const messages = [
            "Your sample PAN application acknowledgement has been generated for this educational demonstration. No actual PAN application has been submitted.",
            "This is a sample e-PAN document preview. It is not an actual PAN card issued by the Income Tax Department.",
            "Your sample correction request receipt has been generated. No actual PAN information has been changed.",
            "This report displays the sample application details entered in the form. It does not show a real application status.",
            "The sample details have been recorded for demonstration. No actual PAN verification has been performed.",
            "This information card provides educational information about PAN and its services."
        ];

        const message = document.createElement("p");
        message.textContent = messages[index];
        message.style.marginTop = "18px";
        message.style.padding = "12px";
        message.style.background = "#eef5fc";
        message.style.borderRadius = "6px";

        documentBox.appendChild(message);

        const notice = document.createElement("p");

        notice.textContent =
            "Important: This document is generated by a student training website. It is not issued, approved, or verified by the Income Tax Department. It has no official validity.";

        notice.style.fontSize = "12px";
        notice.style.color = "#a12b2b";
        notice.style.marginTop = "18px";

        documentBox.appendChild(notice);

        return documentBox;
    }

    // ========================================
    // OPEN PAN SERVICE
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
            "Use sample information only. Never enter your real PAN number, Aadhaar number, OTP, or personal financial details.";

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

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const values = {};

            service.fields.forEach(function (field) {
                values[field.name] =
                    form.elements[field.name].value.trim();
            });

            const oldResult = form.querySelector(".pan-demo-result");

            if (oldResult) {
                oldResult.remove();
            }

           const result = createResult(index, values);
form.appendChild(result);
        });

        form.addEventListener("reset", function () {

            const result = form.querySelector(".pan-demo-result");

            if (result) {
                result.remove();
            }
        });

        modalMessage.appendChild(form);

        modal.classList.add("active");
    }

    // ========================================
    // SERVICE BUTTONS
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
const documentBox = document.createElement("div");
documentBox.className = "pan-demo-result";
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

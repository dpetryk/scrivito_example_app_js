import * as Scrivito from "scrivito";

const FormFieldWidget = Scrivito.provideWidgetClass("FormFieldWidget", {
    attributes: {
        name: "string",
        label: "string",
        type: ["enum", { values: ["text", "checkbox", "radio", "select", "date", "email", "password"] }],
        required: ["enum", { values: ["yes", "no"] }],
        placeholder: "string",
    },
    onlyInside: "FormWidget",
});

export default FormFieldWidget;

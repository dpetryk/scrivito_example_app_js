import * as Scrivito from "scrivito";

const FormFieldTextWidget = Scrivito.provideWidgetClass("FormFieldTextWidget", {
    attributes: {
        name: "string",
        label: "string",
        type: ["enum", { values: ["text", "date", "email", "tel", "password"] }],
        required: ["enum", { values: ["true", "false"] }],
        placeholder: "string",
    },
    onlyInside: ["FormWidget", "FormColumnWidget"]
});

export default FormFieldTextWidget;

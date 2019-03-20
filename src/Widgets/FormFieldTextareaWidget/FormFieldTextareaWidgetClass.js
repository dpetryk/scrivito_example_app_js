import * as Scrivito from "scrivito";

const FormFieldTextareaWidget = Scrivito.provideWidgetClass("FormFieldTextareaWidget", {
    attributes: {
        name: "string",
        label: "string",
        rows: "integer",
        placeholder: "string",
        maxLength: "integer",
        preventResize: ["enum", { values: ["yes", "no"] }],
        required: ["enum", { values: ["true", "false"] }],
    },
    onlyInside: ["FormWidget", "FormColumnWidget"]
});

export default FormFieldTextareaWidget;

import * as Scrivito from "scrivito";

const FormFieldCheckboxWidget = Scrivito.provideWidgetClass("FormFieldCheckboxWidget", {
    attributes: {
        name: "string",
        label: "string",
        required: ["enum", { values: ["true", "false"] }],
        value: "string"
    },
    onlyInside: ["FormWidget", "FormColumnWidget"]
});

export default FormFieldCheckboxWidget;

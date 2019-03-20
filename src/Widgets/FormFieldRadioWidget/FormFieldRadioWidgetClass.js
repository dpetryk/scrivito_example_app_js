import * as Scrivito from "scrivito";

const FormFieldRadioWidget = Scrivito.provideWidgetClass("FormFieldRadioWidget", {
    attributes: {
        name: "string",
        label: "string",
        required: ["enum", { values: ["true", "false"] }],
        value: "string"
    },
    onlyInside: ["FormWidget", "FormColumnWidget"]
});

export default FormFieldRadioWidget;

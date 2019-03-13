import * as Scrivito from "scrivito";

const FormFieldSelectWidget = Scrivito.provideWidgetClass("FormFieldSelectWidget", {
    attributes: {
        name: "string",
        label: "string",
        options: "string",
        values: "string",
        required: ["enum", { values: ["true", "false"] }],
    },
    onlyInside: "FormWidget",
});

export default FormFieldSelectWidget;

import * as Scrivito from "scrivito";

const FormWidget = Scrivito.provideWidgetClass("FormWidget", {
  attributes: {
    items: ["widgetlist", {
      only: [
        "FormFieldTextWidget",
        "FormFieldCheckboxWidget",
        "SpaceWidget",
        "FormFieldRadioWidget",
        "FormFieldSelectWidget",
        "FormFieldTextareaWidget"
      ]
    }],
    buttonText: "string",
    action: "string",
    backgroundColor: ["enum", { values: ["white", "transparent"] }],
    includeBotField: ["enum", { values: ["yes", "no"] }]
  },
});

export default FormWidget;

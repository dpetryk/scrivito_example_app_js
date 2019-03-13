import * as Scrivito from "scrivito";

const FormWidget = Scrivito.provideWidgetClass("FormWidget", {
  attributes: {
    items: ["widgetlist", { only: ["FormFieldTextWidget", "FormFieldCheckboxWidget", "SpaceWidget", "FormFieldRadioWidget", "FormFieldSelectWidget"] }],
     buttonText: "string",
     action: "string",
     backgroundColor: ["enum", { values: ["white", "transparent"] }],
  },
});

export default FormWidget;

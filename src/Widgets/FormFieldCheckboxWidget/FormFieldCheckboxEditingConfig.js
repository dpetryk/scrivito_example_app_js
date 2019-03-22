import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_checkbox.svg";

Scrivito.provideEditingConfig("FormFieldCheckboxWidget", {
    title: "Form Field - Checkbox",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
        },
        label: {
            title: "Label"
        },
        value: {
            title: "Value",
            description: "Value passed when checkbox is selected. If not specified, label will be treated as value"
        },
        required: {
            title: "Required",
            values: [
                { value: "true", title: "Yes" },
                { value: "false", title: "No" }
            ]
        },
    },
    properties: ["name", "label", "value", "required"],
    initialContent: {
        required: "false",
        label: "Checkbox",
    },
});

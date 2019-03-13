import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_widget.svg";

Scrivito.provideEditingConfig("FormFieldTextWidget", {
    title: "Form Field - Text",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
        },
        label: {
            title: "Label"
        },
        type: {
            title: "Type",
            values: [
                { value: "text", title: "Text" },
                { value: "date", title: "Date" },
                { value: "email", title: "Email" },
                { value: "tel", title: "Phone" },
                { value: "password", title: "Password" },
            ]
        },
        required: {
            title: "Required",
            values: [
                { value: "true", title: "Yes" },
                { value: "false", title: "No" }
            ]
        },
        placeholder: {
            title: "Placeholder"
        },
    },
    properties: ["name", "label", "type", "required", "placeholder"],
    initialContent: {
        required: "false",
        type: "text",
        label: "Input field"
    },
});

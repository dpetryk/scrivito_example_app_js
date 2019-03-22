import * as Scrivito from "scrivito";
import iconWidgetIcon from "../../assets/images/icon_textarea.svg";

Scrivito.provideEditingConfig("FormFieldTextareaWidget", {
    title: "Form Field - Textarea",
    thumbnail: iconWidgetIcon,
    attributes: {
        name: {
            title: "Field name"
        },
        label: {
            title: "Label"
        },
        rows: {
            title: "Number of rows",
            description: "Default: 3"
        },
        placeholder: {
            title: "Placeholder",
        },
        maxLength: {
            title: "Max input length",
            description: "Default: 250 characters"
        },
        required: {
            title: "Required",
            values: [
                { value: "true", title: "Yes" },
                { value: "false", title: "No" }
            ]
        },
    },
    properties: ["name", "label", "rows", "placeholder", "maxLength", "required"],
    initialContent: {
        required: "false",
        type: "text",
        rows: 3,
        maxLength: 250
    },
});

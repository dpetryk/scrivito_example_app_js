import * as Scrivito from "scrivito";
import FormWidgetIcon from "../../assets/images/contact_form_widget.svg";

Scrivito.provideEditingConfig("FormWidget", {
  title: "Form",
  thumbnail: FormWidgetIcon,
  attributes: {
  
    buttonText: {
      title: "Submit button text",
      description: "Default: send message",
    },
    action: {
      title: "Form action",
      description: "Define action URL",
    },
    backgroundColor: {
      title: "Background color",
      description: "Default: White",
      values: [
        { value: "white", title: "White" },
        { value: "transparent", title: "Transparent" },
      ],
    },
  },
  properties: ["buttonText", "action", "backgroundColor"],
  initialContent: {
    buttonText: "send message",
    backgroundColor: "white",
  },
});

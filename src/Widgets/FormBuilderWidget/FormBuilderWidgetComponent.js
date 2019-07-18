import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormBuilderWidget", ({ widget }) => {
  const classNames = [""];
  const action = widget.get("action");
  const formName = widget.get("formName") ? `${widget.get("formName")}-id-${widget.id()}` : `form-id-${widget.id()}`;

  if (widget.get("backgroundColor") === "transparent") {
    classNames.push("card-white-transparent");
  } else {
    classNames.push("floating-label", "card-theme", "card", "card-padding");
  }

  return (
    <div className={classNames.join(" ")}>
      <form name={formName} method="post" action={action} data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value={formName} />
        <div className="d-none">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <Scrivito.ContentTag
          content={widget}
          attribute="items"
        />
        <button className="btn btn-primary btn-block" type="submit">
          {widget.get("buttonText") || "Submit"}
        </button>
      </form>
    </div>

  );
});

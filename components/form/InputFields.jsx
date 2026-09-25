import { theme } from "../../utils/theme";

export const  InputField = ({ id, type = "text", placeholder, value, onChange, error, ...rest })=> {
  return (
    <div className="flex flex-col gap-1">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={[
          "w-full rounded-md px-3 py-2.5",
          theme.inputBg,
          error ? theme.inputErrorBorder : theme.inputBorder,
          theme.inputFocus,
          theme.inputPlaceholder,
          theme.inputText,
          theme.fontInput,
          "transition-colors duration-200",
          "border",
        ].join(" ")}
        {...rest}
      />
      {error && (
        <span className={`${theme.textError} text-xs`}>{error}</span>
      )}
    </div>
  );
}



export const TextareaField =({ id, placeholder, value, onChange, error, rows = 4 })=> {
  return (
    <div className="flex flex-col gap-1">
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={[
          "w-full rounded-md px-3 py-2.5 resize-none",
          theme.inputBg,
          error ? theme.inputErrorBorder : theme.inputBorder,
          theme.inputFocus,
          theme.inputPlaceholder,
          theme.inputText,
          theme.fontInput,
          "transition-colors duration-200",
          "border",
        ].join(" ")}
      />
      {error && (
        <span className={`${theme.textError} text-xs`}>{error}</span>
      )}
    </div>
  );
}


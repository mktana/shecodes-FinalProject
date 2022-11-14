
export function InputComponent({onChange, type, title, value}) {

  return (
    <label>
      <span>{title}</span>
      <input
        type={type}
        onChange={onChange}
        value={value}
      />
    </label>
    
  );
}

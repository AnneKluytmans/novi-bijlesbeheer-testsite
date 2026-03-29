export default function ChoiceGroup({ options }) {
  return (
    <div>
      {options.map((opt, i) => (
        <label key={i} className="option">
          <input type="radio" name="choice" />
          {opt}
        </label>
      ))}
    </div>
  );
}

export default function InstructionBox({ situation, task, thinkAloud }) {
  return (
    <section className="instruction-box">
      <div className="instruction-block">
        <h2>Situatie</h2>
        <p>{situation}</p>
      </div>

      <div className="instruction-block">
        <h2>Opdracht</h2>
        <p>{task}</p>
      </div>

      <div className="instruction-block">
        <h2>Denk hardop</h2>
        <p>{thinkAloud}</p>
      </div>
    </section>
  );
}
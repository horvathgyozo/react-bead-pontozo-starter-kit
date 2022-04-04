export function ScoringComponent({ criteria, onSubmit, onCancel }) {
  console.log(criteria);
  return (
    <>
      <h1>Scoring Component</h1>
      <button onClick={() => onSubmit('submit')}>Submit</button>
      <button onClick={() => onCancel('cancel')}>Cancel</button>
    </>
  );
}
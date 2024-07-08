export default function Message({ name, data, text1, text2 }) {
  return !data || !name || !data.types ? (
    <p>No data yet.</p>
  ) : (
    <div>
      <p>
        {text1} {name}
      </p>
      <p>
        {text2} {JSON.stringify(data.types[0].type.name)}
      </p>
    </div>
  );
}

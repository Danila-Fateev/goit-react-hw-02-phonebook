export default function PhonebookList({ id, name, number, deleteContact }) {
  return (
    <>
      <li id={id}>
        {name}: {number}
        <button type="button" onClick={deleteContact}>
          Delete
        </button>
      </li>
    </>
  );
}

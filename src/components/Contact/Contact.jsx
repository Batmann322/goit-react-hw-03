import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.itame}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>

      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
